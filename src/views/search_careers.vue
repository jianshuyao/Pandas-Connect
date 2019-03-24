<template>
   <div class="wrapper">
      <section id="module">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-center">
            <mdb-col col="4">
               <mdb-row md="4" center><br/><br/><br/><br/><br/><br/><br/><br/><br/></mdb-row>
               <mdb-row md="4" center>
                  <mdb-modal-title>
                     <h1 class="card-title" style="font-size:45px">COMPANIES BY MAJOR </h1>
                     <hr align="center" style="width:50%;height:2px;color:white;background-color:black;" />
                  </mdb-modal-title>
               </mdb-row>
               <mdb-row md="4" center>
                        <p style="font-size:18px"><i>Advanced Analytics brought to you by The Pandas!</i></p>
                        <br/>
                         </mdb-row>
                        <mdb-row md="4" center>
  <select @change="updateCareer" name="modselect" id="modselect" v-model="maj" style="width:350px; height:40px">
   <option selected="selected" disabled class="placeholder" value=''>Choose your Major</option>
    <option v-for="industry in industry_list" :key="industry">{{industry}}</option>
  </select>
  <br>
  </mdb-row>
  <br/>
<mdb-row md="4" center>
<div>
    <datalist id="suggestions" style="width:350px;">
        <option v-for="career in career_list">{{career}}</option>
    </datalist>
    <input @change="$router.push({ path: '/company/' + car + '/' +maj});" autoComplete="on" list="suggestions" style="width:350px;height:40px" placeholder="Choose your Career" v-model="car"/> 
</div>
                        </mdb-row>
                        <mdb-row md="4" center><br/><br/><br/><br/><br/><br/><br/><br/><br/></mdb-row>
            </mdb-col>
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
</style>