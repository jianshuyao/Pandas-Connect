<template>
<div>
  <!--Navbar-->
  <mdb-navbar style="margin-top: 60px" color="stylish" position="top" dark href="#" transparent scrolling>
    <mdb-container>
      <mdb-navbar-brand href="#"><strong>MDB</strong></mdb-navbar-brand>
      <mdb-navbar-toggler style="max-width: 1140px">
        <mdb-navbar-nav left>
          <mdb-nav-item href="#" waves-fixed active>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Link</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Profile</mdb-nav-item>
        </mdb-navbar-nav>
        <!--Search form -->
        <mdb-navbar-nav right>
          <form>
            <mdb-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" navInput waves waves-fixed/>
          </form>
        </mdb-navbar-nav>
        <!--/.Search form -->
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
  <!--/.Navbar-->
  <!--ViewWrapper-->

  <mdb-parallax
    src="https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg"
    height="full"
    factor="2"
    >
    <mdb-mask overlay="black-light" color="#78909c" class="d-flex justify-content-center align-items-center">
      <mdb-container>
        <mdb-row class="mt-5 pt-5">
          <mdb-col md="12" class="text-center">
            <h1 class="h1-reponsive white-text">
              <strong>Minimalist intro</strong>
            </h1>
            <hr class="hr-light mt-4"/>
            <h5 class="mb-5 white-text">Photography & Design</h5>
            <mdb-btn outline="white">portfolio</mdb-btn>
            <mdb-btn outline="white">about me</mdb-btn>


          </mdb-col>
        </mdb-row>
      </mdb-container>
    </mdb-mask>
  </mdb-parallax>
  <!--/.ViewWrapper-->

  <main>
      <mdb-container>
          <!--Grid row-->
          <mdb-row class="py-5 mt-4">

              <!--Grid column-->
              <mdb-col md="12" class="text-center">

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

              </mdb-col>
              <!--Grid column-->
          </mdb-row>
          <!--Grid row-->
      </mdb-container>
  </main>
</div>
</template>

<script type="text/javascript">
  import { mdbContainer, mdbRow, mdbCol, mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput, mdbView, mdbMask, mdbBtn, mdbNavbarBrand, mdbParallax } from 'mdbvue';

export default {
  name: 'AppPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbNavbarBrand,
    mdbParallax
  }
};
</script>

<style type="text/css">
  .classic-form-page .view {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/91.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}

.classic-form-page .gradient {
  background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
}

.classic-form-page .card {
  background-color: rgba(126, 123, 215, 0.2);
}

.classic-form-page h6 {
  line-height: 1.7;
}

.classic-form-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

.classic-form-page .navbar .md-form {
  margin: 0;
}

.top-nav-collapse {
  background: #424f95 !important;
}

@media (max-width: 768px) {
  .classic-form-page .navbar:not(.top-nav-collapse) {
      background: #424f95 !important;
  }
}

.classic-form-page label {
  color: #fff!important;
}
</style>