# Brundij
_Santirix Gremioni's robot_

### About
An open source tool to help teams host squad health checks. Written in Clojure and Clojurescript and powered by awesome libraries such as datahike and re-frame.

Some of the free squad health check tools found on the web were really buggy, which eventually made me decide on creating an application for that purpose using Clojure, which was something I was trying to learn.

There were a few main features I was looking for while making this:
- Users needed to be able to create health checks and share those using it's UUID
- Health checks could be assigned questions (users could choose whether to use the pre-defined one or mix them with custom ones)
- Users should be able to answer a health check's questions by using the health check's UUID

### Development
In order to get a development server up and running you'll need to run `lein repl` supplying it a few environement variables:
```
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
```
yarn watch
```

### Testing

It is possible to run all of the server's tests using the script below. **Beware the database info should be related to your test database**. Your development database will end up with test data in case you run the test with the same environment variables supplied to the dev server.
```
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

## License

Copyright © 2021 Arthur Barroso

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
