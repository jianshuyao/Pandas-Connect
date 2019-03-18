<template>
   <div class="wrapper">
      <section id="ModsList">
         <div><br/></div>
         <section class="mt-lg-5">
         <mdb-row md="4" center>
                  <mdb-modal-title>
                     <h1 class="card-title">School of Computing 
                     </h1>
                     <hr class="hr-dark"/>
                     <br/>
                  </mdb-modal-title>
               </mdb-row>
               <mdb-container center>
                  <nav-tabs-card no-label>
                     <template slot="content" >
                        <mdb-row center>
                           <md-tabs md-sync-route class="md-warning" md-alignment="centered">
                              <md-tab id="tab-grade" md-label="1000" md-icon="laptop_chromebook">
                              </md-tab>
                              <md-tab id="tab-grade1" md-label="2000" md-icon="laptop_chromebook">
                              </md-tab>
                              <md-tab id="tab-grade2" md-label="3000" md-icon="laptop_chromebook">
                              </md-tab>
                              <md-tab id="tab-grade3" md-label="4000" md-icon="laptop_chromebook">
                              </md-tab>
                              <md-tab id="tab-grade4" md-label="5000" md-icon="laptop_chromebook">
                              </md-tab>
                              <md-tab id="tab-grade5" md-label="6000" md-icon="laptop_chromebook">
                              </md-tab>
                           </md-tabs>
                        </mdb-row>
                        <div v-for="(mod,index) in mod_list" v-if="modFiltering(mod)">
                        <div v-if="index == 0 || index % 3 == 0" class="columns">
                        <mdb-card-body> 
                        <mdb-row><br/></mdb-row>
                        <mdb-row>
                <mdb-col md="4">
                  <mdb-card>
                      <mdb-card-header>
                      <mdb-row center>
                      <h2 class="card-title" center>{{ mod_list[index].ModuleCode }}</h2>
                        </mdb-row>
                      </mdb-card-header> 
                    <mdb-card-body center>
                      <mdb-row center>
                      {{ mod_list[index].ModuleTitle }}
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card>
                        </mdb-col>
                        <mdb-row><br/></mdb-row>
                                       <mdb-col md="4">
                  <mdb-card>
                      <mdb-card-header>
                      <mdb-row center>
                      <h2 class="card-title" center>{{ mod_list.length > index+1 ? mod_list[index+1].ModuleCode : '' }}</h2>
                        </mdb-row>
                      </mdb-card-header> 
                    <mdb-card-body center>
                      <mdb-row center>
                      {{ mod_list.length > index+1 ? mod_list[index+1].ModuleTitle : '' }}
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card>
                        </mdb-col>
                        <mdb-row><br/></mdb-row>
                                       <mdb-col md="4">
                  <mdb-card>
                      <mdb-card-header>
                      <mdb-row center>
                      <h2 class="card-title" center>{{ mod_list.length > index+2 ? mod_list[index+2].ModuleCode : '' }}</h2>
                        </mdb-row>
                      </mdb-card-header> 
                    <mdb-card-body center>
                      <mdb-row center>
                      {{ mod_list.length > index+2 ? mod_list[index+2].ModuleTitle : '' }}
                      </mdb-row>
                    </mdb-card-body>
                  </mdb-card>
                        </mdb-col>
                      </mdb-row>
                        </mdb-card-body>

                      </div>
                      </div>
                     </template>
                  </nav-tabs-card>
            </mdb-container>
         </section>
      </section>
   </div>
</template>
<script>
  import { db } from "../main";

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
  mod_list:{},
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
   barChartData: {
     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
     datasets: [
       {
         label: '#1',
         data: [12, 39, 3, 50, 2, 32, 84],
         backgroundColor: 'rgba(245, 74, 85, 0.5)',
         borderWidth: 1
       }, {
         label: '#2',
         data: [56, 24, 5, 16, 45, 24, 8],
         backgroundColor: 'rgba(90, 173, 246, 0.5)',
         borderWidth: 1
       }, {
         label: '#3',
         data: [12, 25, 54, 3, 15, 44, 3],
         backgroundColor: 'rgba(245, 192, 50, 0.5)',
         borderWidth: 1
   
             }
           ]
         },
         barChartOptions: {
           responsive: true,
           maintainAspectRatio: false,
           scales: {
             xAxes: [{
               barPercentage: 1,
               gridLines: {
                 display: true,
                 color: 'rgba(0, 0, 0, 0.1)'
               }
             }],
             yAxes: [{
               gridLines: {
                 display: true,
                 color: 'rgba(0, 0, 0, 0.1)'
               },
               ticks: {
                 beginAtZero: true
               }
             }]
           }
         },
         pieChartData: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
           datasets: [
             {
               data: [300, 50, 100, 40, 120, 24, 52],
               backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
               hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
             }
           ]
         },
         pieChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         },
         lineChartData: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
           datasets: [
             {
               label: '#1',
               backgroundColor: 'rgba(245, 74, 85, 0.5)',
               data: [65, 59, 80, 81, 56, 55, 40]
             },
             {
               label: '#2',
               backgroundColor: 'rgba(90, 173, 246, 0.5)',
               data: [12, 42, 121, 56, 24, 12, 2]
             },
             {
               label: '#3',
               backgroundColor: 'rgba(245, 192, 50, 0.5)',
               data: [2, 123, 154, 76, 54, 23, 5]
             }
           ]
         },
         lineChartOptions: {
           responsive: true,
           maintainAspectRatio: false,
           scales: {
             xAxes: [{
               gridLines: {
                 display: true,
                 color: 'rgba(0, 0, 0, 0.1)'
               }
             }],
             yAxes: [{
               gridLines: {
                 display: true,
                 color: 'rgba(0, 0, 0, 0.1)'
               }
             }]
           }
         },
         radarChartData: {
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
           datasets: [
             {
               label: '#1',
               backgroundColor: 'rgba(245, 74, 85, 0.5)',
               data: [65, 59, 80, 81, 56, 55, 40]
             },
             {
               label: '#2',
               backgroundColor: 'rgba(90, 173, 246, 0.5)',
               data: [12, 42, 121, 56, 24, 12, 2]
             },
             {
               label: '#3',
               backgroundColor: 'rgba(245, 192, 50, 0.5)',
               data: [2, 123, 154, 76, 54, 23, 5]
             }
           ]
         },
         radarChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         },
         doughnutChartData: {
           labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
           datasets: [
             {
               data: [300, 50, 100, 40, 120],
               backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
               hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
             }
           ]
         },
         doughnutChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         },
        category:"cs1",
       search:"test2"
       }
     },
     mounted() {
    db.ref("/modules")
      .once("value") //need smaller dataset to quicken loading
      .then(snapshot => {
        this.mod_list = snapshot.val();
      });
    },
    methods:{
      modFiltering(mod) {
      let catMatch = mod.ModuleCode
        .toLowerCase()
        .includes(this.category.toLowerCase());
      return catMatch;
    }
    }
   }
   
   
   
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  float: left;
  width: 33.3333%;
}
.row {margin: 0 -5px;}
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
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