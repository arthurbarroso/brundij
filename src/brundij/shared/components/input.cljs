(ns brundij.shared.components.input)

(defn get-input-valid-style [valid?]
  (case valid?
    nil "input "
    false "invalid-input input "
    true "input "))

(defn input
  [{:keys [value on-change type id disabled placeholder extra-style-class on-blur valid?]}]
  [:input
   {:type type
    :value value
    :id id
    :class (str (get-input-valid-style valid?) extra-style-class)
    :on-blur on-blur
    :placeholder placeholder
    :disabled disabled
    :on-change #(on-change (-> % .-target .-value))}])
