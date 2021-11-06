(ns brundij.shared.components.label)

(defn label [{:keys [text for-id required?]}]
  [:label {:for for-id
           :class "label"}
   (if required?
     [:<>
      [:p text]
      [:p {:class "ml-1-red"} " *"]]
     [:p text])])

