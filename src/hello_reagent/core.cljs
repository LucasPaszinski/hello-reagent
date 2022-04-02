(ns hello-reagent.core
  (:require [reagent.core :as reagent :refer [atom]]))

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it change!"]])

(def marks [{:msg "you fuck"} {:msg "you fede"} {:msg "you baddy"}])

(defn wtf []
  [:div
   [:h1 "Mark zero..."]
   [:ul (map (fn [{:keys [msg]}] [:li msg]) marks)]])

(defn start []  (reagent/render-component [wtf] (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
