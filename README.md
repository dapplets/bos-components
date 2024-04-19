# DAPPLETS NEAR COMPONENTS

## Run DEV mode

1. Run DEV server

```sh
yarn
yarn dev
```

2. Browser console

Start:

```js
await temp1.engine.enableDevMode({ polling: true }) // with autoupdate
await temp1.engine.enableDevMode() // without
```

Stop:

```js
temp1.engine.disableDevMode()
```

## Push BOS-components to NEAR mainnet

```sh
yarn push:mainnet
```

Probably you have to log in via NEAR CLI before

```sh
NEAR_ENV=mainnet near login
```

## Pull BOS-components from NEAR mainnet

```sh
yarn pull:mainnet
```