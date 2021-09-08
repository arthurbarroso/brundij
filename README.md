# Brundij

An open source tool to help teams host squad health checks. Application written in Clojure and Clojurescript and powered by awesome tools such as datahike and re-frame.

## Development setup

#### Server

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

#### Client

To start the web client in development mode run:
```
yarn watch
```

## Testing

It is possible to run all of the server's tests using the script below. **Beware the database info should be related to your test database**. Your development database will get erased in case you run the test with the same environment variables supplied to the dev server.
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

It is also possible to run the client's tests using the script below.
```
npx shadow-cljs watch test
```

## License

Copyright © 2021 Arthur Barroso

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
