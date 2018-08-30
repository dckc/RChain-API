% RChain-API: a **node.js** package for RChain
% Dan Connolly; Josh Orndorff
% Sep 2018


## Origin: Trust Metric in Rholang

![Port Trust Metric to Rholang #561](https://www.diigo.com/file/image/brpqocpzeppprraqezdodddoob/Port+Trust+Metric+to+Rholang+%C2%B7+Issue+%23561+%C2%B7+rchain%2Fbounties.jpg)


## Step 1: Trust Certifications on RChain

First part of trust metric protocol:

> I (dckc) certify Bob at journeyer level.


## Web UI makes JSON data

> I (dckc) certify Bob at journeyer level.

becomes

```{javascript}
{
  "voter": "dckc",
  "subject": "bob",
  "rating": 2,
  "cert_time": "2018-07-29T02:00:21.259Z"
}
```

## How to do transactions?

The [Genesis Block Demo][gbd] of July 11 showed all the pieces working
together:

  - Signatures are generated offline
  - on-chain contract, [BasicWallet.rho][bw], checks signatures

```
@cryptoVerify!([nonce, amount, retCh].toByteArray(),
               sig.hexToBytes(), pk.hexToBytes(), *result)
```

[bw]: https://github.com/rchain/rchain/blob/dev/casper/src/main/rholang/BasicWallet.rho
[gbd]: https://www.youtube.com/watch?v=WzAdfjwgaQs#t=9m28s


## What bytes to sign?

```{javascript}
@cryptoVerify!([nonce, amount, retCh].toByteArray(),
               sig.hexToBytes(), pk.hexToBytes(), *result)
```

ISSUE: underline `[nonce, amount, retCh].toByteArray()`


## How to serialize Rholang data?

  - RChain nodes communicate [CasperMessage.proto][cp]
    - a gRPC protocol
    - uses protobuf serialization
  - [CasperMessage.proto][cp] uses datatypes from [RhoTypes.proto][rt]

[rt]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/RhoTypes.proto
[cp]: https://github.com/rchain/rchain/blob/dev/models/src/main/protobuf/CasperMessage.proto


## How to turn JSON into RhoTypes?

```{javascript}
{ "voter": "dckc",
  "subject": "bob",
  "rating": 2,
  "cert_time": "2018-07-29T02:00:21.259Z" }
```

_[Mobile process calculi for the blockchain][1]_:
> ... we can detail a **direct representation of JSON into a
> fragment of the rholang syntax** referred to ...
> as RHOCore.

[1]: https://github.com/rchain/mobile-process-calculi-for-blockchain/blob/master/enter-the-blockchain.rst


## JSON and Rholang

ISSUE: side-by-side
ISSUE: boxed

$\begin{array}{lll}
Obj & ::= & \{\ Key : Val\ [,\ Key : Val\ ] \} \\
Key & ::= & "\ [Char]+\ " \\
Val & ::= & Grnd\ |\ Arry\ |\ Obj \\
Grnd & ::= & Bool\ |\ Num\ |\ Str\ |\ ... \\
Arry & ::= & [\ Obj\ [,Obj]\ ]
\end{array}$

$\begin{array}{lll}
P & ::= & \{\ [P\ [|\ P]]\ \} \\
& | & {\tt for(} Ptrn\ \texttt{ <-}\ X\ [{\tt ;}\ Ptrn \texttt{ <-}\ X]\ {\tt })\ P \\
& | & X {\tt !(}\ P\ {\tt )} \\
& | & {\tt *} X \\
& | & V \\
V & ::= & Arry\ |\ Grnd\ \\
Grnd & ::= & Bool\ |\ Num\ |\ Str\ |\ ... \\
Ptrn & ::= & X\ |\ \_\ |\ ... \\
X & ::= & @P\ |\ [Char]+ \\
\end{array}$

$\begin{equation}
[\![\{ key_1 : val_1,\ ... ,\ key_N : val_N \}]\!] = 
\{ [\![key_1]\!]!(\ [\![val_1]\!]\ )\ |\ ...\ |\ [\![key_N]\!]!(\ [\![val_N]\!]\ )\ \}
\end{equation}$

Embeds JSON into RHOCore


## RhoTypes.proto

A process (`Par`) has `Expr`s, `Send`s, ...:

ISSUE: side-by-side

```
message Par {
    repeated Send sends = 1;
    repeated Receive receives = 2;
    repeated New news = 4;
    repeated Expr exprs = 5;
...
```

ISSUE: boxed

$\begin{array}{lll}
P & ::= & \{\ [P\ [|\ P]]\ \} \\
& | & {\tt for(} Ptrn\ \texttt{ <-}\ X\ [{\tt ;}\ Ptrn \texttt{ <-}\ X]\ {\tt })\ P \\
& | & X {\tt !(}\ P\ {\tt )} \\
& | & {\tt *} X \\
& | & V \\
V & ::= & Arry\ |\ Grnd\ \\
Grnd & ::= & Bool\ |\ Num\ |\ Str\ |\ ... \\
Ptrn & ::= & X\ |\ \_\ |\ ... \\
X & ::= & @P\ |\ [Char]+ \\
\end{array}$


## JSON to RHOCore

$\begin{array}{lll}
Obj & ::= & \{\ Key : Val\ [,\ Key : Val\ ] \} \\
Key & ::= & "\ [Char]+\ " \\
Val & ::= & Grnd\ |\ Arry\ |\ Obj \\
Grnd & ::= & Bool\ |\ Num\ |\ Str\ |\ ... \\
Arry & ::= & [\ Obj\ [,Obj]\ ]
\end{array}$

```
function toRSON(val) {
    const expr1 = kv => { exprs: [kv] };
    function toArry(items) {
        return expr1({e_list_body: { ps: items.map(recur) } });
    }
    function keysValues(obj) {
    function recur(x) { ... }

    return recur(val);
}
```

_TODO: fix the "RSON" misnomer_


## JSON to RHOCore: Objects become Sends


```
function keysValues(obj) {
    const sends = Object.keys(obj).sort().map(k => {
        const chan = { quote: expr1({ g_string: k }) };
        return fixLF({ chan: chan, data: [recur(obj[k])] });
    });
    return fixLF({ sends });
}
```

$\begin{equation}
[\![\{ key_1 : val_1,\ ... ,\ key_N : val_N \}]\!] = 
\{ [\![key_1]\!]!(\ [\![val_1]\!]\ )\ |\ ...\ |\ [\![key_N]\!]!(\ [\![val_N]\!]\ )\ \}
\end{equation}$

**Don't forget to `sort()`!**  
You won't get the right bytes to sign.


## JSON to RHOCore: recur

```{js}
function recur(x) {
    switch (typeof x) {
    case 'boolean':
        return expr1({ g_bool: x });
    case 'number':
        return expr1({ g_int: x }); // ISSUE: only integers
    case 'string':
        return expr1({ g_string: x });
    case 'object':
        if (x === null) {
            return fixLF({});
        } else if (Array.isArray(x)) {
            return toArry(x);
        } else {
            return keysValues(x);
        }
    default:
        throw(new Error('no mapping to RSON for ' +  typeof x));
    };
}
```


## JSON to RHOCore*

This locallyFree: emptyBitSet stuff shouldn't be necessary; see
[RHOL-537](https://rchain.atlassian.net/browse/RHOL-537).

```{js}
const bytesPerLong = 8;
const emptyBitSet = new Buffer(Array(bytesPerLong).fill(0));
function toRSON(x) {
    const fixLF = p => Object.assign({ locallyFree: emptyBitSet }, p);

    const expr1 = kv => fixLF({ exprs: [kv] });
```


## Back to our Trust Metric dApp...


## `gameSession.gs`: OAuth Gateway

Policy
: Only RChain cooperative members are authorized.

Mechanism
: discord **member** role via OAuth2 API


## `gameSession.gs` OAuth Gateway

... discord **member** role via OAuth2 API:

 - Smart contracts are like multiplayer games.
 - The gateway hosts games,  
   each with its own key pair.
 - An OAuth session becomes  
   participation in a game.
 - The gateway signs moves on behalf of players.


## OAuth2 leads to JavaScript

scala
:  OAuth2 libraries are not mature

JavaScript
:  [simple guide to discord oauth2](https://medium.com/@orels1/using-discord-oauth2-a-simple-guide-and-an-example-nodejs-app-71a9e032770) May 2017 by Orlov


## Off-chain ocap security and persistence: Capper

[Capper](https://github.com/dckc/Capper):

  - ocaps for node.js and express
  - object persistence
  - [waterken webkeys](http://waterken.sourceforge.net/web-key/)
  
_a story for another day..._


## `gameSession.js`: off-chain signature

```{js}
const gatewayKey = ... ;
const cert1 = { voter: "dckc", subject: "bob", rating: 2, cert_time: clock().toISOString() };

const certPar = RSON.fromData(cert1),
      certSigHex = gatewayKey.signBytesHex(rchain.toByteArray(certPar))
      certRho = RSON.stringify(certPar),
      sigRho = JSON.stringify(certSigHex)
      certTerm = `@"takeTurn"!(${certRho}, ${sigRho})`;

const rchain = rnodeAPI.clientFactory({grpc, clock})
   .casperClient({ host, port });
rchain.doDeploy(certTerm).then(result => {
  if (!result.success) { throw(result); }
  return rchain.createBlock();
```


## `gameSession.js`: off-chain signature

using `tweetnacl`:


```{scala}
@"takeTurn"!("850a6d00e44e5dd9ec02d05bda38d7da760c9c143f2499a754d66dc43f0177df",
    ["merge", "trust_cert",
     @"cert_time"!("2018-08-10T20:31:46.545Z") |
     @"rating"!("1") | @"subject"!("c3") | @"voter"!("dckc")
], "182e4fea4f9a53ed99cf4560d2254c476d64fafefd1e19ccb9a34e71cc0ba12592d58b7c096731a2d189e5097f467ebdf062d752815a87281e4b59f7174ca00a", *ret)
```

ISSUE: underline sig


## `communityTrust.rho`: on-chain verification

```{scala}
  contract @"takeTurn"(@gameKey, @turn, @turnSig, return) = {
    new sigCh in {
      @"ed25519Verify"!(turn.toByteArray(),
                        turnSig.hexToBytes(), gameKey.hexToBytes(), *sigCh))
      ...
```

## MySql to RChain

Another in-progress application of this rchain-api package:

 - Use the DB to enforce business logic constraints.
 - Subscribe to valid changes and send them to RChain.
 - _Subscribe to RChain and update the DB?_


## MySql events binlog

 - Originally for replication
 - Available to node.js via `mysql-events` npm package


## MySql event data

```{js}
{ type: 'INSERT', table: 'budget_vote',
  rows: [ { after: { pay_period: 2018-07-01T05:00:00.000Z,
                     issue_num: 199, voter: 'dckc', amount: 425,
                     vote_time: 2018-08-05T01:19:05.000Z, weight: null },
            before: undefined } ]
```

## Rholang Translation of SQL data

```{scala}
@[`https://rewards.rchain.coop`, "budget_vote"]
      !("INSERT", [@"after"!(@"amount"!(425) | @"issue_num"!(199) | @"pay_period"!("2018-07-01T05:00:00.000Z") | @"vote_time"!("2018-08-05T01:19:05.000Z") | @"voter"!("dckc") | @"weight"!(Nil))])
```

## INSERT SQL data to to RChain

in rnode log:

```
20:19:05.205 [grpc-default-executor-1] INFO  c.rchain.casper.MultiParentCasper$ - CASPER: Received Deploy #1533431945199 -- @{[``https://rewards.rcha...
```
