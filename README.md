# Brundij 🦾
_Santirix Gremioni's robot, from Isaac's Asimov [The Robots of Dawn](https://www.amazon.com/Robots-Dawn-Robot-Isaac-Asimov/dp/0553299492)_

Brundij is an open source tool to help teams host squad health checks. It is written in Clojure and Clojurescript and powered by awesome tools such as datahike, re-frame and nbb. It started as a side project and turned into an attempt on having a working, self-hosted and easy to use squad health check platform. Brundij tries to handle a few main features:

- Users needed to be able to create health checks and share those using UUIDs
- Health checks could be assigned questions (users could choose whether to use the pre-defined ones or mix them with custom ones)
- Users should be able to answer a health check's questions by using the health check's UUID

### Development
In order to get a development server up, you'll want to follow these steps:
- Set up a local postgres database
  - This can be done by running `docker-compose up -d`
- Start the REPL
  - which can be done by running `clj -M:repl`
- Run Integrant's `go` function, which is available from whithin the `user` namespace.

To start the web client in development mode, run `clj -A:cljs watch app`, which will start `shadow-cljs`.

#### Testing
Server tests can be started by running `.bin/kaocha`, which runs kaocha with a fixture that sets up a test server using an in-memory database.

Client tests can be started using `clj -A:cljs-test watch test`. It is also possible to generate a compiled version of the client tests by running `clj -A:cljs-test compile ci`. This compiled version of the tests can be ran using `npx karma start --single-run` - this version is specially useful for CIs.

#### Building
It is possible to create release/production builds of the server and the application. To do so, run:
```bash
clj -A:cljs release app # creates a release version of the app's client
clj -T:build uber # creates an uberjar that serves the whole application
docker build . # a docker image can also be built for the whole application
```

### Misc
Brundij is the first "real world" application I build with Clojure. I decided to create a health check application because I was having a bit of trouble finding a tool I liked to run my squad's health checks.

This application served as a personal playground for trying out stuff I wanted to understand in Clojure(script), such as the following:
- [React pre-rendering in Clojure(script)](https://www.arthurbrrs.me/prerendering-react-clojurescript-land.html)
- [Testing Reagent elements in Clojurescript](https://www.arthurbrrs.me/testing-the-dom-using-shadow-and-reagent.html)

I still plan on using it to try out new stuff while I learn Clojure(script).

### License

Copyright © 2021 Arthur Barroso.

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
