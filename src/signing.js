/* keyPair -- ed25519 signing
 */
/* global require, exports, Buffer */
// @flow

/*::

import type { HexStr, Bytes } from './hex';

// ISSUE: opaque types?
export type Signature = Bytes;
export type PrivateKey = Bytes;
export type PublicKey = Bytes;

export type KeyPair = $Call<typeof Ed25519keyPair, PrivateKey>;
*/

// ref https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
// ack: https://stackoverflow.com/a/46870568
// const inspect = require('util').inspect;

const crypto = require('crypto');

const { sign } = require('tweetnacl'); // ocap discpline: "hiding" keyPair
const blake2 = require('blake2');
const { keccak256 } = require('js-sha3');

const b2hx = require('./hex').fromBytes;

const def = obj => Object.freeze(obj); // cf. ocap design note

/**
 * Build key pair from seed.
 *
 * @param seed 32 bytes, as from crypto.randombytes(32)
 *
 */
function Ed25519keyPair(seed /*: PrivateKey */) {
  const key = sign.keyPair.fromSeed(seed);
  const t2b = text => Buffer.from(text);

  // TODO const toString = () => `<keyPair ${label}: ${state.publicKey.substring(0, 12)}...>`;
  /**
   * @memberof Ed25519keyPair
   */
  function signBytes(bytes /*: Uint8Array */) /*: Signature */ {
    return sign.detached(bytes, key.secretKey);
  }

  return def({
    // TODO toString,
    signBytes,
    /**
     * @memberof Ed25519keyPair
     */
    signBytesHex(bs /*: Uint8Array*/) /*: HexStr<Signature> */ { return b2hx(signBytes(bs)); },
    /**
     * @memberof Ed25519keyPair
     */
    signText(text /*: string*/) /*: Signature */ { return signBytes(t2b(text)); },
    /**
     * @memberof Ed25519keyPair
     */
    signTextHex(text /*: string*/) /*: HexStr<Signature> */ { return b2hx(signBytes(t2b(text))); },
    /**
     * ISSUE: if the caller wants the bytes, we go bytes -> hex -> bytes
     *
     * @memberof Ed25519keyPair
     */
    publicKey() /*: HexStr<PublicKey> */ { return b2hx(key.publicKey); },

    // TODO label: () => state.label,
    // TODO [inspect.custom]: toString
  });
}
exports.Ed25519keyPair = Ed25519keyPair;


/**
 * Verify ed25519 signature
 *
 * @param message any number of bytes (TODO: test!)
 * @param sig 64 byte ed25519 signature over message
 * @param publicKey 32 byte ed25519 public key
 *
 * @return indicates whether the signature is valid
 *
 * @example
 *
 *  const publicKey = Hex.decode(
 *     '288755c48c3951f89c5f0ffe885088dc0970fd935bc12adfdd81f81bb63d6219');
 *  const message = Hex.decode(
 *     'a6da46a1dc7ed715d4cd6472a736249a4d11142d160dbef9f20ae493de908c4e');
 *  const sig = Hex.decode(
 *     'd0a909078ce8b8706a641b07a0d4fe2108064813ce42009f108f89c2a3f4864a' +
 *     'a1a510d6dfccad3b62cd610db0bfe82bcecb08d813997fa7df14972f56017e0b');
 *
 *  assert(RholangCrypto.ed25519Verify(message, sig, publicKey));
 *
 * @memberof RholangCrypto
 */
function ed25519Verify(
  message /*: Uint8Array */,
  sig /*: Uint8Array */,
  publicKey /*: Uint8Array */,
) /*: boolean */ {
  return sign.detached.verify(message, sig, publicKey);
}


/**
 * SHA-2 256 bit cryptographic hash function
 *
 * @param input any number of bytes
 * @return 256 bit (32 byte) hash
 *
 * @memberof RholangCrypto
 */
function sha256Hash(input /*: Uint8Array*/) /*: Uint8Array*/ {
  const sha256 = crypto.createHash('sha256');
  sha256.update(Buffer.from(input));
  return Uint8Array.from(sha256.digest());
}

/**
 * Keccak 256 bit cryptographic hash function (aka SHA-3)
 *
 * @param input any number of bytes
 * @return 256 bit (32 byte) hash
 *
 * @memberof RholangCrypto
 */
function keccak256Hash(input /*: Uint8Array*/) /*: Uint8Array*/ {
  return new Uint8Array(keccak256.arrayBuffer(input));
}


/**
 * Blake2b 256 bit cryptographic hash function
 *
 * @param input any number of bytes
 * @return 256 bit (32 byte) hash
 *
 * @memberof RholangCrypto
 */
function blake2b256Hash(input /*: Uint8Array*/) /*: Uint8Array*/ {
  const blake2b256 = blake2.createHash('blake2b', { digestLength: 32 });
  blake2b256.update(input);
  return Uint8Array.from(blake2b256.digest());
}

/**
 * Cryptographic functions from Rholang.
 *
 * refs:
 *   - [RChain Cryptography Specification][cspec] May 2018
 *   - [rholang/examples/tut-hash-functions.rho][htut] Aug 2018
 *
 * [cspec]: https://rchain.atlassian.net/wiki/spaces/CORE/pages/112721930/Cryptography+Specification
 *
 * [htut]: https://github.com/rchain/rchain/blob/a582f94/rholang/examples/tut-hash-functions.rho
 */
const RholangCrypto = Object.freeze({ blake2b256Hash, sha256Hash, keccak256Hash, ed25519Verify });
exports.RholangCrypto = RholangCrypto;


function integrationTest({ randomBytes }) {
  const seed = randomBytes(32);

  const pair1 = Ed25519keyPair(seed);
  // TODO console.log('inspect keyPair:', pair1);
  // TODO console.log('keyPair.toString():', pair1.toString());
  console.log('public key:', pair1.publicKey());
  console.log('signature:', pair1.signTextHex('hello world'));
}


// ocap: Import powerful references only when invoked as a main module.
/* global module */
/* eslint-disable global-require */
if (require.main === module) {
  integrationTest({ randomBytes: require('crypto').randomBytes });
}
