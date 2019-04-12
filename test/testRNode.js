/* global require, module, exports */
// @flow

const ttest = require('tape');
const api = require('..');

const { RNode, RegistryProxy, SignDeployment, RHOCore, Hex } = api;
const { RholangCrypto, Ed25519keyPair } = api;

const { sha256Hash, keccak256Hash, blake2b256Hash } = RholangCrypto;

/*::
import type { JsonExt } from '..';
 */

/**
 * Run unit tests plus supplemental tests.
 *
 * @param suite2: supplemental tests
 */
function testRNode(suite2) {
  // mock enough of grpc
  function DeployService(_hostPort, _chan) { }
  const casper = { DeployService };
  const proto = { coop: { rchain: { casper: { protocol: casper } } } };
  const grpc0 = {
    loadPackageDefinition(_d) { return proto; },
    credentials: { createInsecure() { } },
  };

  Object.entries({
    'args check': (test) => {
      test.doesNotThrow(() => RNode(grpc0, { host: 'h', port: 123 }));
      // $FlowFixMe args are intentionally wrong type
      test.throws(() => RNode(grpc0, null), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { host: 'hi' }), Error);
      // $FlowFixMe
      test.throws(() => RNode(grpc0, { port: 123 }), Error);
      test.end();
    },
    ...suite2,
  }).forEach(([desc, fn]) => ttest(desc, fn));
}


const defaultSec = Hex.decode('b18e1d0045995ec3d010c387ccfeb984d783af8fbb0f40fa7db126d889f6dadd');

function netTests({ grpc, clock, rng }) {
  const localNode = () => RNode(grpc, { host: 'localhost', port: 40401 });

  function hashTest(test, hashBytes, hashData, fname) {
    const returnChannel = rng().toString(36).substring(7);
    const config = (hashBytes)
      ? { txt: 'deadbeef', func: 'hexToBytes' }
      : { txt: 'testtest', func: 'toByteArray' };
    const hashProc = `@"${fname}"!("${config.txt}".${config.func}(), "${returnChannel}")`;

    runAndListen(hashProc, returnChannel, clock().valueOf(), localNode(), test)
      .then((value) => {
        test.ok(value instanceof Uint8Array);
        if (!(value instanceof Uint8Array)) { throw new Error(`Uint8array expected: ${value}`); }
        if (hashBytes) {
          const bs = Hex.decode(config.txt);
          test.deepEqual(hashBytes(bs), value);
        } else if (hashData) {
          test.equal(hashData('testtest'), Hex.encode(value));
        }
        test.end();
      })
      .catch((oops) => {
        test.fail(oops.message);
        test.end();
      });
  }

  return {
    'smart contract deploy': (test) => {
      const term = 'new test in { contract test(return) = { return!("test") } }';
      const timestamp = clock().valueOf();

      const key = Ed25519keyPair(defaultSec);
      localNode().doDeploy(payFor({ term, timestamp }, key), true).then((results) => {
        test.equal(results.slice(0, 'Success'.length), 'Success');
        test.end();
      })
        .catch((oops) => { test.fail(oops.message); test.end(); });
    },
    'test getAllBlocks': (test) => {
      const expected = [
        'parentsHashList', 'blockHash', 'blockSize', 'blockNumber', 'version',
        'deployCount', 'tupleSpaceHash', 'timestamp', 'faultTolerance',
        'mainParentHash', 'sender',
      ];
      localNode().getAllBlocks()
        .then((actual) => {
          test.equal(actual.length > 0, true);
          test.deepEqual(Object.keys(actual[0]), expected);
          test.end();
        })
        .catch((oops) => { test.fail(oops.message); test.end(); });
    },
    'get block by hash - error test': (test) => {
      const blockHash = 'thisshouldbreak';
      localNode().getBlock(blockHash).catch((err) => {
        test.deepEqual(err.message, 'Error: Failure to find block with hash thisshouldbreak');
        test.end();
      })
        .catch((oops) => { test.fail(oops.message); test.end(); });
    },
    'simplified SHA256 hashing': (test) => {
      hashTest(test, null, RHOCore.wrapHash(sha256Hash), 'sha256Hash');
    },
    'simplified Keccak256 hashing': (test) => {
      hashTest(test, null, RHOCore.wrapHash(keccak256Hash), 'keccak256Hash');
    },
    'simplified Blake2b256 hashing': (test) => {
      hashTest(test, null, RHOCore.wrapHash(blake2b256Hash), 'blake2b256Hash');
    },
    'normal SHA256 hashing': (test) => {
      hashTest(test, sha256Hash, null, 'sha256Hash');
    },
    'normal Keccak256 hashing': (test) => {
      hashTest(test, keccak256Hash, null, 'keccak256Hash');
    },
    'normal Blake2b256 hashing': (test) => {
      hashTest(test, blake2b256Hash, null, 'blake2b256Hash');
    },
  };
}


exports.runAndListen = runAndListen;
async function runAndListen(
  term /*: string */, returnChannel /*: string*/, timestamp /*: number*/,
  node /*: any */, _test /*: any*/, // KLUDGE: any
) /*: Promise<JsonExt<URL | GPrivate>> */ {
  const key = Ed25519keyPair(defaultSec);

  return RegistryProxy.runRholang(
    term, RHOCore.fromJSData(returnChannel), payFor({ term, timestamp }, key),
    { rnode: node },
  );
}


function payFor(d0, key, phloPrice = 1, phloLimit = 10000000) {
  const dout = SignDeployment.sign(key, {
    ...d0,
    phloPrice,
    phloLimit,
  });
  // console.log({ valid: SignDeployment.verify(dout), sig: b2h(dout.sig) });
  return dout;
}


if (require.main === module) {
  // Access ambient stuff only when invoked as main module.
  /* eslint-disable global-require */
  /* global process */
  if (process.argv.includes('--net')) {
    testRNode(netTests({
      grpc: require('grpc'),
      clock: () => new Date(),
      rng: () => Math.random(),
    }));
  } else {
    testRNode({});
  }
}
