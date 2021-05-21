import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import axios from "axios"
import firebase from "firebase"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

Vue.use(Buefy)

let firebaseConfig = {
  apiKey: "AIzaSyCP2xWs2GRgr-FIqErIzS-z6P8vwCgvraU",
  authDomain: "iptv-player-d37e5.firebaseapp.com",
  projectId: "iptv-player-d37e5",
  storageBucket: "iptv-player-d37e5.appspot.com",
  messagingSenderId: "775311170155",
  appId: "1:775311170155:web:8056a3a0ff653efaca6f2e",
  measurementId: "G-K6W5JCKXDE"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
