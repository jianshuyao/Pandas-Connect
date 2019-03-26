<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start mw-100">
        <img src="Panda.png" style="width:60px;height:50px" />
        <h3 class="md-title" style="font-weight:bold; font-size:22px">
          PANDAS CONNECT
        </h3>
      </div>
      <div class="md-toolbar-section-end mw-100">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  href="#landing"
                  v-smooth-scroll
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                      >
                        <i class="material-icons md-48">home</i>
                        <p>Home</p>
                      </md-button>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  href="#about_tag"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  v-smooth-scroll
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                      >
                        <i class="material-icons">info</i>
                        <p>About</p>
                      </md-button>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  href="#why_us_tag"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  v-smooth-scroll
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                      >
                        <i class="material-icons">verified_user</i>
                        <p>Why Us?</p>
                      </md-button>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  href="#team_tag"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  v-smooth-scroll
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                      >
                        <i class="material-icons">people</i>
                        <p>Team</p>
                      </md-button>
                    </drop-down>
                  </div>
                </a>
              </li>
              <li class="md-list-item">
                <a
                  href="#contact_tag"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  v-smooth-scroll
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                      >
                        <i class="material-icons">email</i>
                        <p>Contact Us</p>
                      </md-button>
                    </drop-down>
                  </div>
                </a>
              </li>
              <md-list-item
                href="https://github.com/thepandas/Pandas-Connect"
                target="_blank"
                class="md-simple"
              >
                <i class="fab fa-github"></i>
                <p class="hidden-lg">Github</p>
                <md-tooltip md-direction="bottom"
                  >Check out our Github</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("about_tag");
      if (element_id) {
        element_id.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    },
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
