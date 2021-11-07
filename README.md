# Brundij
_Santirix Gremioni's robot, from Isaac's Asimov [The Robots of Dawn](https://www.amazon.com/Robots-Dawn-Robot-Isaac-Asimov/dp/0553299492)_

### About
An open source tool to help teams host squad health checks. Written in Clojure and Clojurescript and powered by awesome libraries such as datahike and re-frame. An attempt on having a working, self-hosted and easy to use squad health check platform. Brundij tries to handle a few main features:

- Users needed to be able to create health checks and share those using it's UUID
- Health checks could be assigned questions (users could choose whether to use the pre-defined ones or mix them with custom ones)
- Users should be able to answer a health check's questions by using the health check's UUID

##### Development
In order to get a development server up and running you'll need to run `lein repl` after setting up a local postgres database
```bash
docker-compose up -d # Spins up a local docker container with a postgres database
clj -M:repl
```

With the REPL running, start the server using Integrant's `go` function. I usually start the server and then restart it with `reset-all` just in case. These functions are available in the `user` namespace and should be automatically loaded when you start the REPL. A function called `auto-reset` is also available. It automatically runs integrant's reset when changes are made to `.clj` and `.cljc` files.

To start the web client in development mode, run `yarn watch` or `npm run watch`. Shadow will automatically reload the application whenever there are changes to `.cljs` and `.cljc` files.

##### Testing
Server tests can be started by running `lein test`, which uses the `:test` profile from `project.clj`. This profile makes sure the project's tests are going to run using an in-memory datahike db.

Client tests can be started using `yarn test`. It is also possible to generate a compiled version of the client tests by running `npx shadow-cljs compile ci`. This compiled version of the tests can be ran using `npx karma start --single-run` - this version is specially useful for CIs.

It is also possible to run tests by namespace. This can done by `, t n` in Conjure or by calling `run namespace tests` from within cursive's command palette and is especially useful when some test is failing for some obscure reason.

##### Releasing:
It is possible to create release/production builds of the server and the application. To do so, run:
```bash
# for the server
clj -T:build uber
# a docker image can also be built for the server
docker build .
# for the client
yarn release
```

### License

Copyright © 2021 Arthur Barroso.

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
