FROM theasp/clojurescript-nodejs:alpine as build
WORKDIR /app
COPY project.clj /app/
COPY package.json /app/
COPY ./ /app/
RUN npm install
RUN ./build.sh

FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target/brundij.jar /app/brundij.jar
ENV PORT=4000
ENV DATABASE_PORT="$DATABASE_PORT"
ENV DATABASE_USER="$DATABASE_USER"
ENV DATABASE_PASSWORD="$DATABASE_PASSWORD"
ENV DATABASE_NAME="$DATABASE_NAME"
ENV DATABASE_HOST="$DATABSE_HOST"
ENV PRE_RENDER=true
CMD java -Xms500M -Xmx500M -cp brundij.jar clojure.main -m brundij.server
