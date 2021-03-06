import Vue from "vue";
import VueFire from "vuefire";
import BootstrapVue from "bootstrap-vue";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import App from "./App.vue";
import router from "./router";
import "vue-material/dist/theme/default-dark.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import MaterialKit from "./plugins/material-kit";
import vueSmoothScroll from "vue2-smooth-scroll";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
import hcMore from "highcharts/highcharts-more";
import VueParticles from "vue-particles";
import Sticky from 'vue-sticky-directive'
import highchartsMore from 'highcharts/highcharts-more'

Vue.config.productionTip = false;
dataModule(Highcharts);
hcMore(Highcharts);
Vue.use(VueParticles);
Vue.use(HighchartsVue);
Vue.use(VueFire);
Vue.use(BootstrapVue);
Vue.use(MaterialKit);
Vue.use(vueSmoothScroll);
Vue.use(Sticky);
Vue.component("VueSlider", VueSlider);

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
