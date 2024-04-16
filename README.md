# DAPPLETS NEAR COMPONENTS

## Run DEV mode

1. Run DEV server

   ```
   npm i
   npm run dev
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
