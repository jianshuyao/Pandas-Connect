<template>
   <div class="wrapper" style="min-height: 87.5vh;">
      <section id="module">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-center d-flex align-items-stretch">
               <mdb-col col="3">
                  <vue-particles
                     color="#1a237e"
                     :particleOpacity="0.6"
                     :particlesNumber="300"
                     shapeType="circle"
                     :particleSize="4"
                     linesColor="#1a237e"
                     :linesWidth="1"
                     :lineLinked="true"
                     :lineOpacity="0.4"
                     :linesDistance="150"
                     :moveSpeed="3"
                     :hoverEffect="true"
                     hoverMode="grab"
                     :clickEffect="true"
                     clickMode="push"
                     > </vue-particles>
               </mdb-col>
            </mdb-row>
                  <mdb-row md="6" center>
                     <mdb-modal-title>
                        <h1 class="card-title" style="font-size:45px">COMPANIES BY MAJOR </h1>
                        <hr align="center" style="width:50%;height:2px;color:white;background-color:black;" />
                     </mdb-modal-title>
                  </mdb-row>
                  <mdb-row md="6" center>
                     <p style="font-size:18px"><i>Advanced Analytics brought to you by The Pandas</i></p>
                     <br/><br/>
                  </mdb-row>
                  <mdb-row md="6" center>
                     <mdb-col col="3">
                     <select @change="updateCareer" name="modselect" id="modselect" v-model="maj" style="width:350px; height:40px">
                        <option selected="selected" disabled class="placeholder" value=''> Choose Your Major</option>
                        <option v-for="industry in industry_list" :key="industry">{{industry}}</option>
                     </select>
                     </mdb-col>

                     <mdb-col col="3">
                        <datalist id="suggestions" style="width:350px;">
                           <option v-for="career in career_list">{{career}}</option>
                        </datalist>
                        <input :disabled="maj==''" autoComplete="on" list="suggestions" style="width:350px;height:40px;" placeholder=" Choose Your Company of Interest" v-model="car"/> 
                     </mdb-col>
                  </mdb-row>
                  <br/>
            <mdb-row md="6" center v-if="maj!=''&&car!=''">
               <button class="button button5" v-on:click="$router.push({ path: '/company/' + car + '/' +maj});"><i class="fas fa-industry"></i> Find Company</button>
            </mdb-row>
         </section>
      </section>
   </div>
</template>
<script>
   import { db } from "../firebase";
      import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
      
      import {
        NavTabsCard
      } from '@/components'
      
      export default {
      name: 'Dashboard',
      bodyClass: "landing-page",
      props: {
      header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
      }
      },
      computed: {
      headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
      }
      },
      components: {
      NavTabsCard,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbCardHeader,
      mdbCardText,
      mdbIcon,
      mdbTbl,
      mdbBarChart,
      mdbPieChart,
      mdbLineChart,
      mdbRadarChart,
      mdbDoughnutChart,
      mdbListGroup,
      mdbListGroupItem,
      mdbBadge,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter
      },
      data () {
      return {
      maj:"",
      car:"",
      modal: false,
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
      industry_list:{},
      career_list:{} 
      }
      },
       mounted() {
       db.ref("/majname/major")
         .once("value") //need smaller dataset to quicken loading
         .then(snapshot => {
           this.industry_list = snapshot.val();
         });
       },
       methods:{
         updateCareer(){
            db.ref("/majwithcompany/" + this.maj)
            .once("value")
            .then(snapshot => {
           this.career_list = snapshot.val();
           this.career_list.sort();
         });
         }
       }
    }
      
      
      
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .cascading-admin-card {
   margin: 100px 0;
   }
   .cascading-admin-card .admin-up {
   margin-left: 4%;
   margin-right: 4%;
   margin-top: -20px;
   }
   .cascading-admin-card .admin-up .fas,
   .cascading-admin-card .admin-up .far {
   box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
   padding: 1.7rem;
   font-size: 2rem;
   color: #fff;
   text-align: left;
   margin-right: 1rem;
   border-radius: 3px;
   }
   .cascading-admin-card .admin-up .data {
   float: right;
   margin-top: 2rem;
   text-align: right;
   }
   .admin-up .data p {
   color: #999999;
   font-size: 12px;
   }
   .classic-admin-card .card-body {
   color: #fff;
   margin-bottom: 0;
   padding: 0.9rem;
   }
   .classic-admin-card .card-body p {
   font-size: 13px;
   opacity: 0.7;
   margin-bottom: 0;
   }
   .classic-admin-card .card-body h4 {
   margin-top: 10px;
   }
   .md-card-actions.text-center {
   display: flex;
   justify-content: center !important;
   }
   .contact-form {
   margin-top: 30px;
   }
   .md-has-textarea + .md-layout {
   margin-top: 15px;
   }
   .modal-header {
   min-height: 16.42857143px;
   padding: 10px;
   border-bottom: 1px solid #e5e5e5;
   }
   .modal-footer {
   padding: 10px;
   text-align: center;
   border-top: 1px solid #000000;
   }
   .button {
   a {
   text-decoration: none;
   }
   a:link, a:visited {
   color: white;
   }
   a:hover {
   color: black;
   }
   opacity: 0.8;
   background-color: #4CAF50; 
   border: 2px solid white;
   color: white;
   padding: 5px 8px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 15px;
   margin: 3px 5px;
   cursor: pointer;
   -webkit-transition-duration: 0.4s; /* Safari */
   transition-duration: 0.4s;
   }
   .button5 {
   background-color: #555555;
   border-radius: 12px;
   }
   .button5:hover {
   background-color: white;
   color: black;
   border-radius: 12px;
   }
</style>