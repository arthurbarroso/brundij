(ns brundij.shared.mount
  (:require [clojure.java.io :as io]
            [ring.util.response :as rr]))

(defn mount-serve [_env html-name]
  {:get
   {:handler (fn [_req]
               {:body
                (slurp (io/resource html-name))})}})

(defn mount-serve-cookies [env html-name cookie-handler parameters]
  {:get
   {:handler (fn [req]
               (let [{:keys [cookie-key cookie-value]} (cookie-handler env req)
                     html (slurp (io/resource html-name))]
                 (rr/set-cookie {:body html} cookie-key cookie-value)))
    :parameters parameters}})

(defn dummy-mount-serve-cookies [env _html-name cookie-handler]
  {:get
   {:handler (fn [req]
               (let [{:keys [cookie-key cookie-value]} (cookie-handler env req)
                     html "<html><body><h1>hi</h1></body></html>"]
                 (rr/set-cookie {:body html} cookie-key cookie-value)))}
   :parameters {:path {:health-id string?}}})
