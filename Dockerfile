FROM clojure:openjdk-8-lein as build
WORKDIR /app
COPY project.clj /app/
COPY ./ /app/
ENV LEIN_SNAPSHOTS_IN_RELEASE=true
RUN lein uberjar

FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target/brundij.jar /app/brundij.jar
ENV PORT=4000
ENV DATABASE_PORT="$DATABASE_PORT"
ENV DATABASE_USER="$DATABASE_USER"
ENV DATABASE_PASSWORD="$DATABASE_PASSWORD"
ENV DATABASE_NAME="$DATABASE_NAME"
ENV DATABASE_HOST="$DATABSE_HOST"
CMD java -cp brundij.jar clojure.main -m brundij.server
