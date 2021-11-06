#!/bin/bash
npm run release
LEIN_SNAPSHOTS_IN_RELEASE=true lein uberjar
