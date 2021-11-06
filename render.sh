#!/bin/bash

classpath="$(clojure -A:nbb -Spath -Sdeps '')"
nbb --classpath "$classpath" render.cljs
