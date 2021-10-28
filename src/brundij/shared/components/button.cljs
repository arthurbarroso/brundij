(ns brundij.shared.components.button)

(defn button [{:keys [on-click text disabled title extra-style-class]}]
  [:button
   {:class (str extra-style-class " button")
    :type "button"
    :disabled disabled
    :title title
    :on-click #(on-click)}
   text])

(defn button-outlined [{:keys [on-click text disabled title extra-style-class]}]
  [:button
   {:class (str "button-outlined " extra-style-class)
    :type "button"
    :disabled disabled
    :title title
    :on-click #(on-click)}
   text])

(defn button-text [{:keys [on-click text disabled title extra-style-class]}]
  [:button
   {:class (str "button-text " extra-style-class)
    :type "button"
    :disabled disabled
    :title title
    :on-click #(on-click)}
   text])

