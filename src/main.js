import Vue from "vue";
import firebase from 'firebase';
import VueFire from 'vuefire';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import App from "./App.vue";
import router from "./router";
import 'vue-material/dist/theme/default-dark.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import MaterialKit from "./plugins/material-kit";

import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false;

var config = {
	apiKey: "AIzaSyAUbCtpJXX8_I35iTWHQrRB1djQks-jnak",
	authDomain: "bt3103-datalake.firebaseapp.com",
	databaseURL: "https://bt3103-datalake.firebaseio.com",
	projectId: "bt3103-datalake",
	storageBucket: "bt3103-datalake.appspot.com",
	messagingSenderId: "404164157866"
};
let app = firebase.initializeApp(config);

export const db = app.database(); 
Vue.use(VueFire)


Vue.use(BootstrapVue);
Vue.use(MaterialKit);
Vue.use(vueSmoothScroll);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
