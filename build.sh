#!/bin/bash

API_URL="" npm run release
cp ./resources/public/js/app.js ./pre-render/resources/assets/app.js
cp ./resources/public/js/manifest.edn ./pre-render/resources/assets/manifest.edn
npm run serve-pre-render &
lein pre-render
killall -9 node

LEIN_SNAPSHOTS_IN_RELEASE=true lein uberjar
