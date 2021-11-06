(ns brundij.shared.components.link)

(defn link [{:keys [on-click title text extra-styles]}]
  [:a {:on-click on-click
       :class (str "link " extra-styles)
       :title title}
   text])

(defn link-outlined [{:keys [href text title extra-style-class]}]
  [:a
   {:class (str "link-outlined " extra-style-class)
    :type "button"
    :title title
    :href href}
   text])
