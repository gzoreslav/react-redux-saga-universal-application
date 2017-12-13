# The simplest React Universal Application

This boilerplate example allows you to create React universal application:

* server-side rendering for the first lunch with API data fetching (and if JS is disabled)
* SPA in other cases

## Why this boilerplate?

* all new packages used (react v16, react-ruoter v4)
* modern approach used - redux, redux-saga, react-router v4
* created using officiall recomendation for server-side rendering from redux and react-router
* one routing file
* no blink efect once bundle.js is loaded
* minimall eforts for making page server-rendering - just add method for data loading
* SEO-friendly as well

## Installation

```shell
> git clone https://github.com/gzoreslav/The-Simplest-React-Universal-Application.git
> cd The-Simplest-React-Universal-Application.git
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
| HMR for client.bundle.js | no |
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

## Credits

...

## Sending Feedback

I am always open to [your feedback](https://github.com/gzoreslav/The-Simplest-React-Universal-Application/issues).

## License

This software is distributed under an MIT licence.

Copyright 2017 © Zoreslav Goral
