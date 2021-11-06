(ns re-frame.core)

(defn reg-event-db [& _args])
(defn reg-event-fx [& _args])
(defn reg-fx [& _args])
(defn reg-cofx [& _args])
(defn inject-cofx [& _args])
(defn reg-sub [& _args])
(defn reg-sub-raw [& _args])
(defn subscribe [& _args] (atom false))
(defn dispatch [& _args])
(defn dispatch-sync [& _args])

(ns reagent.ratom)
(defn make-reaction [& _args] nil)

(ns re-frame-cljs-http.http-fx)

(ns cljs-http)

(ns tick.alpha.api)
(defn inst [& _args] "")
(defn now [& _args] "")

(ns datascript.core)
(defn empty-db [& _args] nil)
(defn reset-conn! [& _args] nil)
(defn listen! [& _args] nil)
(defn transact [& _args] nil)
(defn q [& _args] nil)
(defn tempid [& _args] nil)

(ns datascript.transit)
(defn write-transit-str [& _args] nil)
(defn read-transit-str [& _args] nil)

(ns brundij.uuids)
(defn random-uuid [& _args]
  (letfn [(hex [] (.toString (rand-int 16) 16))]
    (let [rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)
          final (str (hex) (hex) (hex) (hex)
                     (hex) (hex) (hex) (hex) "-"
                     (hex) (hex) (hex) (hex) "-"
                     "4"   (hex) (hex) (hex) "-"
                     rhex  (hex) (hex) (hex) "-"
                     (hex) (hex) (hex) (hex)
                     (hex) (hex) (hex) (hex)
                     (hex) (hex) (hex) (hex))]
      (.toLowerCase final))))
(defn generate-uuid [& _args] (random-uuid))

(ns reagent.cookies)
(defn set! [& _args] nil)
(defn get [& _args] nil)

(ns brundij.utils)
(defn get-health-id [& _args] "")
(defn set-cookie! [& _args] nil)

(ns render
  (:require [brundij.landing.render :refer [pre-render]]
            [brundij.healths.render :as healths]
            [brundij.questions.render :as questions]
            [brundij.answers.render :as answers]
            [brundij.shared.error.render :as error]))

(defn render-server []
  (pre-render)
  (healths/pre-render-create)
  (healths/pre-render-results)
  (questions/pre-render-create)
  (questions/pre-render-success)
  (answers/pre-render-create)
  (answers/pre-render-success)
  (error/pre-render-error))

(println (render-server))
