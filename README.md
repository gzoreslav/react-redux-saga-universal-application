# The simplest React Universal Application

This example allows you to create React universal application:

* server rendering for the first lunch (and if JS is disabled)
* SPA in other cases

This approach fix SEO issues as well.

## How to develop, build and lunch?

### Run in development mode

```shell
> npm run start-dev-client
```

It runs dev server with HMR and opens Browser

| Name | Value |
|------|-------|
| Port | auto |
| Open Browser | yes |
| Build app.bundle.js | no |
| Copy resources (fonts, css, images, etc.) to dist | no |
| Build server.bundle.js | no |
| HMR for app.bundle.js | yes |
| HMR for server.bundle.js | no |
| Server Rendering | no |

### Run in development mode and check server rendering

```shell
> npm run start-dev-iso
```

It builds app.bundle.js in dev mode and runs dev universal server with HMR and opens Browser

| Port | 3030 |
| Open Browser | no |
| Build app.bundle.js | yes, in dev mode |
| Copy resources (fonts, css, images, etc.) to dist | yes |
| Build server.bundle.js | no |
| HMR for app.bundle.js | no |
| HMR for server.bundle.js | yes |
| Server Rendering | yes |

### Build for production

You have to build client first and server build then.

#### Build client

```shell
> npm run build-prod-client
```

It builds app.bundle.js in production mode and copies resources to dist folder

| Port | - |
| Open Browser | no |
| Build app.bundle.js | yes, in prod mode |
| Copy resources (fonts, css, images, etc.) to dist | yes |
| Build server.bundle.js | no |
| HMR for app.bundle.js | no |
| HMR for server.bundle.js | no |
| Server Rendering | - |

#### Build server

```shell
> npm run build-prod-server
```

It builds server.bundle.js in production mode

| Port | 3030 |
| Open Browser | no |
| Build app.bundle.js | no |
| Copy resources (fonts, css, images, etc.) to dist | no |
| Build server.bundle.js | yes, in prod mode |
| HMR for app.bundle.js | no |
| HMR for server.bundle.js | no |
| Server Rendering | yes |

#### Lunch server

```shell
> npm run start-prod-iso
```

It lunch server.bundle.js built in the previous steps

## License

This software is distributed under an MIT licence.

Copyright 2017 © Zoreslav Goral
