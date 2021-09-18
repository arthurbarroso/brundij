# Brundij 🥑
_Santirix Gremioni's robot, from Isaac's Asimov The Robots of Dawn_

![Brundij in action](https://user-images.githubusercontent.com/48794198/132617903-a1556a2e-8ec2-45a7-a96c-d77726ab8258.gif)

### About
An open source tool to help teams host squad health checks. Written in Clojure and Clojurescript and powered by awesome libraries such as datahike and re-frame. An attempt on having a working, self-hosted and easy to use squad health check platform. Brundij tries to handle a few main features:

- Users needed to be able to create health checks and share those using it's UUID
- Health checks could be assigned questions (users could choose whether to use the pre-defined ones or mix them with custom ones)
- Users should be able to answer a health check's questions by using the health check's UUID

I also ended up deciding that I wanted users to be able to interact with the application while offline. In other words, this means:
- This application uses google's [workbox](https://developers.google.com/web/tools/workbox) to cache itself
- Health checks and questions are created to datascript and persisted to localStorage when offline `(false? (.-onLine (.-navigator js/window)))`
- Health checks persisted to localStorage can then be sent to the backend when online

##### Development
In order to get a development server up and running you'll need to run `lein repl` supplying it a few environement variables:
```bash
PORT=4000 \
DATABASE_HOST=localhost \
DATABASE_PORT=5432 \
DATABASE_USER=postgres \
DATABASE_PASSWORD=postgres \
DATABASE_NAME=brundij \
lein repl
```

With the REPL running, start the server using Integrant's `go` function. I usually start the server and then restart it with `reset-all` just in case. These functions are available in the `user` namespace and should be automatically loaded when you start the REPL. A function called `auto-reset` is also available. It automatically runs integrant's reset when changes are made to `.clj` and `.cljc` files.

To start the web client in development mode run:
```bash
yarn watch
```

It is possible to run all of the server's tests using the script below. **Beware the database info should be related to your test database**. Your development database will end up with test data in case you run the test with the same environment variables supplied to the dev server.
```bash
PORT=4000 \
DATABASE_HOST=localhost \
DATABASE_PORT=5432 \
DATABASE_USER=postgres \
DATABASE_PASSWORD=postgres \
DATABASE_NAME=brundij \
lein test
```

It is also possible to run tests by namespace. This can done by `, t n` in Conjure or by calling `run namespace tests` from within cursive's command palette and is especially useful when some test is failing for some obscure reason.

The client tests can be ran either by spinning up `shadow`'s `:browser-test` target using `npx shadow-cljs watch test` or by compiling them and passing the compiled output to karma by running `npx shadow-cljs compile test && npm run karma start --single-run`

It is also possible to create release/production builds of the server and the application. To do so, run:
```bash
# for the server
lein uberjar
# a docker image can also be built for the server
docker build .
# for the client
yarn release
yarn workbox injectManifest workbox.config.js
```

### License

Copyright © 2021 Arthur Barroso

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
