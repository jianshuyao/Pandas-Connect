import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import LandingNavbar from "./layout/LandingNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import search from "./views/Search.vue";
import search2 from "./views/search_careers.vue";
import top5industries from "./views/top5industries.vue";
import singleindustry from "./views/singleindustry.vue";
import company from "./views/company.vue";
import internship from "./views/internship.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        default: Landing,
        header: LandingNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/search_careers",
      name: "search_careers",
      components: { default: search2, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/search",
      name: "search",
      components: { default: search, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/top5industries/:majorName",
      name: "top5industries",
      components: {
        default: top5industries,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/singleindustry/:currMaj/:indName",
      name: "singleindustry",
      components: {
        default: singleindustry,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/company/:companyName/:majName",
      name: "company",
      components: { default: company, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/internship",
      name: "internship",
      components: { default: internship, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
