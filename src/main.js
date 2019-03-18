import Vue from "vue";
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
