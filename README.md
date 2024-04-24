# Sugarchain-desktop

SugarChain Light Wallet is a locally running version of a web wallet that does not require servers or networks, and does not require synchronized blocks. It can be used as a cold wallet

The wallet will not upload any data, so please save the private key yourself. If lost, it cannot be retrieved.

The wallet can complete queries and transactions through the node API interface, with a built-in block browser. If the wallet API fails, a new available API interface can be changed.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run tauri start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run tauri build
```
