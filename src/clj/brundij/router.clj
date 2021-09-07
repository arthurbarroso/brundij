(ns brundij.router
  (:require [brundij.answers.routes :as answers]
            [brundij.healths.routes :as healths]
            [brundij.questions.routes :as questions]
            [clojure.java.io :as io]
            [muuntaja.core :as m]
            [reitit.coercion.spec :as coercion-spec]
            [reitit.dev.pretty :as pretty]
            [reitit.ring :as ring]
            [reitit.ring.coercion :as coercion]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [ring.middleware.cors :refer [wrap-cors]]))

(def router-config
  {:data {:coercion coercion-spec/coercion
          :exception pretty/exception
          :muuntaja m/instance
          :middleware [muuntaja/format-middleware
                       exception/exception-middleware
                       swagger/swagger-feature
                       coercion/coerce-request-middleware
                       coercion/coerce-response-middleware
                       coercion/coerce-exceptions-middleware]}})

(defn index-handler [_req]
  {:body (slurp (io/resource "public/index.html"))})

(def swagger-docs
  ["/swagger.json"
   {:get {:no-doc true
          :swagger {:basePath "/"
                    :info {:title "Brundij API reference"
                           :description "Rest API that returns JSON, Transit or EDN responses"
                           :version "0.1.0"}}
          :handler (swagger/create-swagger-handler)}}])

(defn routes [environment]
  (wrap-cors
    (ring/ring-handler
      (ring/router
        [
         [swagger-docs ;{:middleware [swagger/swagger-feature]}
          ["/v1"
           (healths/routes environment)
           (questions/routes environment)
           (answers/routes environment)]]
         ["/"
          {:get index-handler
           :no-doc true}]
         ["/js/*" {:no-doc true :handler
                     (ring/create-resource-handler {:root "public/js/" :no-doc true})}]]
        router-config)
      (ring/routes
        (swagger-ui/create-swagger-ui-handler {:path "/swagger"}))
      (ring/create-default-handler))
    :access-control-allow-origin [#".*"]
    :access-control-allow-methods [:get :put :post :delete]))
