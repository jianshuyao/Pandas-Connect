<template>
   <div class="wrapper">
      <section id="major">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row center>
               <mdb-modal-title>
                  <h1 class="card-title"> {{ this.comp }} </h1>
               </mdb-modal-title>
            </mdb-row>
         </section>
         <section>
          <mdb-row class="mt-5">
            <mdb-col md="9" class="mb-4">
              <mdb-card class="mb-4">
                  <mdb-card-header class="text-center"> Pie chart </mdb-card-header>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="200"/>
                      </div>
                  </mdb-card-body>
              </mdb-card>
            </mdb-col>

            <mdb-col md="3" class="mb-4">
              <mdb-card class="mb-4">
                  <mdb-card-header class="text-center"> Chance Meter </mdb-card-header>
                  <mdb-card-body>
                      <div class="d-flex justify-content-center my-4">
                          <mdb-col>
                            <label for="customRange1">Expected Cap</label>
                            <vue-slider
                              ref="slider"
                              v-model="value"
                              v-bind="options"
                            ></vue-slider>
                            <h1>{{ value }}</h1>
                          </mdb-col>
                      </div>
                  </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>


        </section>
      </section>
   </div>
</template>
<script>
   import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtnGroup, mdbRangeInput } from 'mdbvue'
   
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
   methods:{
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
     mdbRangeInput,
     mdbBadge,
     mdbModal,
     mdbModalHeader,
     mdbModalTitle,
     mdbModalBody,
     mdbModalFooter,
   },
   data () {
     return {
      comp:"Nera",
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
   .slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;   
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #4CAF50;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
</style>