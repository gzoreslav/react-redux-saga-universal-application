# React Redux-Saga universal application

[![GitHub package version](https://img.shields.io/github/package-json/v/gzoreslav/react-redux-saga-universal-application.svg)]()
[![Dependency Status](https://david-dm.org/gzoreslav/react-redux-saga-universal-application.svg)](https://david-dm.org/gzoreslav/react-redux-saga-universal-application)
[![devDependencies Status](https://david-dm.org/gzoreslav/react-redux-saga-universal-application/dev-status.svg)](https://david-dm.org/gzoreslav/react-redux-saga-universal-application?type=dev)

This boilerplate example allows you to create React universal application:

* server-side rendering for the first lunch with API data fetching (and if JS is disabled), SPA in other cases
* show ajax loaders for request progress
* handle API request errors

| *JS Off (server-side render)* | *JS On (client-side render)* |
|-------------------------------|------------------------------|
| <img src="screenshots/javascript-off-v5.gif?raw=true"> | <img src="screenshots/javascript-on-v5.gif?raw=true"> |

## Why this boilerplate?

* all new packages used (react v16, react-router v4)
* modern approach used - redux, redux-saga, react-router v4
* created using officiall recomendation for server-side rendering from redux and react-router
* one routing file
* no blink efect once bundle.js is loaded
* minimall eforts for making page server-rendering - just add method for data loading
* SEO-friendly as well

## Installation

```shell
> git clone https://github.com/gzoreslav/react-redux-saga-universal-application.git
> cd react-redux-saga-universal-application
> npm i
```

**Note:** You may have to install nodemon and babel-cli globally

```shell
> npm i nodemon -g
> npm i babel-cli -g
```


## How to develop, build and lunch?

There are few options for lunch:

* Run in development mode and check server rendering - shows all application's opportunities (server-side rendering for the first lunch with fetchind data from the server using API), working as the SPA after the firs lunch
* Run in development mode - use this options for developing
* Build for production and run - build client and server bundles, start node server

### Run in development mode and check server rendering

```shell
> npm run start-dev-iso
```

It builds app.bundle.js in dev mode and runs dev universal server with HMR and opens Browser

| Name | Value |
|------|-------|
| Port | 3030 |
| Open Browser | no |
| Build client.bundle.js | yes, in dev mode |
| Copy resources (fonts, css, images, etc.) to dist | yes |
| Build server.bundle.js | no |
| HMR for client.bundle.js | yes |
| HMR for server.bundle.js | yes |
| Server Rendering | yes |

### Run in development mode

```shell
> npm run start-dev-client
```

It runs dev server with HMR and opens Browser

| Name | Value |
|------|-------|
| Port | auto |
| Open Browser | yes |
| Build client.bundle.js | no |
| Copy resources (fonts, css, images, etc.) to dist | no |
| Build server.bundle.js | no |
| HMR for client.bundle.js | yes |
| HMR for server.bundle.js | no |
| Server Rendering | no |

### Build for production

You have to build client first and build server then.

#### Build client

```shell
> npm run build-prod-client
```

It builds app.bundle.js in production mode and copies resources to dist folder

| Name | Value |
|------|-------|
| Port | - |
| Open Browser | no |
| Build client.bundle.js | yes, in prod mode |
| Copy resources (fonts, css, images, etc.) to dist | yes |
| Build server.bundle.js | no |
| HMR for client.bundle.js | no |
| HMR for server.bundle.js | no |
| Server Rendering | - |

#### Build server

```shell
> npm run build-prod-server
```

It builds server.bundle.js in production mode

| Name | Value |
|------|-------|
| Port | 3030 |
| Open Browser | no |
| Build client.bundle.js | no |
| Copy resources (fonts, css, images, etc.) to dist | no |
| Build server.bundle.js | yes, in prod mode |
| HMR for client.bundle.js | no |
| HMR for server.bundle.js | no |
| Server Rendering | yes |

#### Lunch server

```shell
> npm run start-prod-iso
```

It lunch server.bundle.js built in the previous steps

## How to deploy

### 1. Install dependencies

Copy *package.json* to the server

```shell
> npm install
```

NOTE: We do steps above, because _node_modules_ are not included into
built *server.bundle.js*. So, that's why we need _node_modules_ folder
on the server.

### 2. Build client and server

```shell
> npm run build-prod-client
> npm run build-prod-server
```

### 3. Copy built content to the server

Copy _dist_ folder to the server

### 3. Lunch node server

```shell
> npm run start-prod-iso
```

## What new?

### v5.x.x

* handle API fetch errors
* clean up code, refactoring
* separate reducers

### v4.x.x

* added request processing metadata (ajax loading status, e.g. gif spinners)
* fixed webpack stuff for client dev mode

### v3.x.x

* added image details route with appropriate redux, routing, actions, etc. stuff
* fixed helper package https://www.npmjs.com/package/react-redux-saga-server-side-render-helper

### v.2.x.x

* added styling, supporting bootstrap v3 styling
* added select image action
* client/server rendering methods moved to the separate package https://www.npmjs.com/package/react-redux-saga-server-side-render-helper
* added *Not Found* main menu link to show 404 route error handle
* clean up package.json - removed unused packages

## Credits

* https://redux.js.org/docs/recipes/ServerRendering.html
* https://reacttraining.com/react-router/web/guides/server-rendering
* https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-1
* https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-2

## Sending Feedback

I am always open to [your feedback](https://github.com/gzoreslav/The-Simplest-React-Universal-Application/issues).

## License

This software is distributed under an MIT licence.

Copyright 2017 © Zoreslav Goral
