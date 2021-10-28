(ns brundij.shared.components.header)

(defn header []
  [:div {:class "header-style"}
   [:a {:class "title-style"
        :href "/"}
    "brundij"]
   [:nav {:class "header-container-style"}
    [:a {:class "link-style"}
     "About"]]])
