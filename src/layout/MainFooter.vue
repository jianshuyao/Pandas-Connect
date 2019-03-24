<!-- Remember to route the footer here-->
<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark">
    <div class="text-center">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-google-plus"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-li mx-1"><i class="fab fa-linkedin-in"> </i></a></li>
        <li class="list-inline-item"><a class="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-dribbble"> </i></a></li>
      </ul>
    </div>
    <div class="footer-copyright text-center py-1">
        <p align="center">&copy; {{year}} Copyright: Team Pandas</p>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>
<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    },
    props: {
      backgroundColor: String,
      type: String
    },
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  }
</script>

<!--
<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.pandas-connect.com">
              Pandas-Connect
            </a>
          </li>
          <li>
            <a href="">
              About Us
            </a>
          </li>
          <li>
            <a href="">
              Blog
            </a>
          </li>
          <li>
            <a href="">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a href="https://nus.edu.sg/" target="_blank">Team Pandas</a>
        for our fellow students' benefit.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
-->
