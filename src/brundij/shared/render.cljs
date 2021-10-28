(ns brundij.shared.render
  (:require [clojure.string :as string]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            ["react-dom" :as react-dom]
            ["fs" :as fs]))

(defn add-component-string-to-html [html component-string]
  (string/replace html "${{html-string}}" component-string))

(defn add-scripts-to-include-to-html [html scripts-to-include]
  (string/replace html "${{scripts-to-include}}" scripts-to-include))

(defn add-hydrate-script-fn-to-html [html hydrate-script-fn]
  (string/replace html "${{hydrate-script}}" hydrate-script-fn))

(defn add-title-to-html [html title]
  (string/replace html "${{title}}" title))

(defn add-stylesheets-to-html [html stylesheets]
  (string/replace html "${{stylesheets}}" stylesheets))

(defn html-template [pre-rendered-html hydrate-script-fn scripts-to-include title stylesheets]
  (->
   "<html>
      <head>
        <meta charset=\"utf-8\">
        <style>
          body {
            margin: 0;
            outline: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: 'Poppins', sans-serif;
          }
        </style>
        <link rel=\"stylesheet\" href=\"/assets/css/brundij/shared/shared.css\">
        <link rel=\"shortcut icon\" href=\"/assets/favicon.ico\"/>
        <link rel=\"icon\" href=\"/assets/favicon.ico\" />
        ${{stylesheets}}
        ${{scripts-to-include}}
        <title>${{title}}</title>
      </head>
      <body>
        <div id=\"root\">${{html-string}}</div>
      </body>
      <script>${{hydrate-script}}</script>
    </html>"
   (add-component-string-to-html pre-rendered-html)
   (add-hydrate-script-fn-to-html hydrate-script-fn)
   (add-scripts-to-include-to-html scripts-to-include)
   (add-title-to-html title)
   (add-stylesheets-to-html stylesheets)))

(defn pre-render [pre-rendered-html
                  hydrate-script-fn
                  view-name
                  scripts-to-include
                  title
                  stylesheets]
  (fs/writeFileSync
   (str "public/" view-name ".html")
   (-> pre-rendered-html
       (html-template hydrate-script-fn scripts-to-include title stylesheets))))

(defn ^:export hydrate-no-event [component]
  (let [cb (.getElementById js/document "root")]
    (react-dom/hydrate (r/as-element [component])
                       cb)))

(defn ^:export hydrate [component event]
  (re-frame/dispatch-sync [event])
  (let [cb (.getElementById js/document "root")]
    (react-dom/hydrate (r/as-element [component])
                       cb)))
