FROM ghcr.io/graalvm/graalvm-ce:latest as native
COPY ./target/brundij-0.1.0-standalone.jar /brundij.jar
RUN gu install native-image
RUN native-image --report-unsupported-elements-at-runtime --initialize-at-build-time --no-server -jar /brundij.jar -H:Name=brundij brundij.server
ENV PORT=4000
ENV DATABASE_PORT="$DATABASE_PORT"
ENV DATABASE_USER="$DATABASE_USER"
ENV DATABASE_PASSWORD="$DATABASE_PASSWORD"
ENV DATABASE_NAME="$DATABASE_NAME"
ENV DATABASE_HOST="$DATABSE_HOST"
CMD ["./brundij.server", "-Xmx490m"]


#FROM gcr.io/distroless/base:latest
#WORKDIR /app
#COPY --from=native /app/brundij.server app/brundij.server
