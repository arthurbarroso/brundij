(ns brundij.router
  (:require [brundij.answers.routes :as answers]
            [brundij.healths.routes :as healths]
            [brundij.questions.routes :as questions]
            [muuntaja.core :as m]
            [reitit.coercion.spec :as coercion-spec]
            [reitit.dev.pretty :as pretty]
            [reitit.ring :as ring]
            [reitit.ring.coercion :as coercion]
            [reitit.ring.middleware.exception :as exception]
            [reitit.ring.middleware.muuntaja :as muuntaja]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.gzip :as gzip]
            [ring.middleware.cookies :as cookies]
            [brundij.shared.client-routes :as client-routes]))

(def router-config
  {:data {:coercion coercion-spec/coercion
          :exception pretty/exception
          :muuntaja m/instance
          :middleware [gzip/wrap-gzip
                       cookies/wrap-cookies
                       muuntaja/format-middleware
                       exception/exception-middleware
                       coercion/coerce-request-middleware
                       coercion/coerce-response-middleware
                       coercion/coerce-exceptions-middleware]}})

(def swagger-docs
  ["/swagger.json"
   {:get {:no-doc true
          :swagger {:basePath "/"
                    :info {:title "Brundij API reference"
                           :description "Rest API that returns JSON, Transit or EDN responses"
                           :version "0.1.0"}}
          :handler (swagger/create-swagger-handler)}}])

(defn routes [environment]
  (let [pre-rendered-routes (-> environment :renderer :config :render?)]
    (wrap-cors
     (ring/ring-handler
      (ring/router
       [""
        ["/assets/*" (ring/create-resource-handler {:root "./assets/"})]
        (client-routes/routes environment)
        [swagger-docs
         ["/v1" {:middleware [swagger/swagger-feature]}
          (healths/routes environment)
          (questions/routes environment)
          (answers/routes environment)]]]
       router-config)
      (ring/routes
       (swagger-ui/create-swagger-ui-handler {:path "/swagger"}))
      (ring/create-default-handler))
     :access-control-allow-origin [#".*"]
     :access-control-allow-methods [:get :put :post :delete])))
