<template>
   <div class="wrapper">
      <section id="module">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-end">
               <mdb-col col="4">
                  <mdb-row md="4" center>
                     <mdb-modal-title>
                        <h1 class="card-title">{{this.industryname}}
                        </h1>
                     </mdb-modal-title>
                  </mdb-row>
               </mdb-col>
               <mdb-col col="4">
               </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center">
               <mdb-col md="1" lg="6" class="mb-4 d-flex align-items-stretch">
                  <mdb-card class="mb-4">
                     <mdb-card-header> Hiring Trend </mdb-card-header>
                     <mdb-col>
                        <mdb-card-body>
                           <div v-if='this.loaded' style="display: block" justify-content-center>
                              <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
                           </div>
                        </mdb-card-body>
                        <mdb-card-body>
                           <div v-if='this.loaded' style="display: block" justify-content-center>
                              <mdb-line-chart :data="lineChartJob" :options="lineChartOptions" :height="300"/>
                           </div>
                        </mdb-card-body>
                     </mdb-col>
                  </mdb-card>
               </mdb-col>
               <mdb-col md="2" lg="5" class="mb-4">
                  <mdb-card class="mb-4">
                     <mdb-card-header> Salary </mdb-card-header>
                     <div v-if='this.loaded' style="display: block">
                        <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="400"/>
                     </div>
                  </mdb-card>
                  <mdb-card class="mb-4">
                     <mdb-card-header> Organisations </mdb-card-header>
                     <mdb-card-body>
                        <div style="display: block">
                           <mdb-datatable
                              :data="tableData"
                              striped
                              bordered
                              />
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
   import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter } from 'mdbvue'
   
   import {
     NavTabsCard
   } from '@/components'
   
   import { mdbDatatable } from 'mdbvue';
   
   import {db} from '../firebase';
   
   export default {
   name: 'Dashboard',
   bodyClass: "landing-page",
   props: {
   header: {
   type: String,
   default: require("@/assets/img/bg7.jpg")
   }
   },
   mounted: function(){
    db.ref('industry/'+"Accounting and Auditing")
    .once('value')
    .then(snapshot=>{
      this.industry = snapshot.val();
    })
    .then(()=>{
        this.renderChart();
    })
   },
   computed: {
   headerStyle() {
   return {
     backgroundImage: `url(${this.header})`
   };
   }
   },
   created(){
    this.industryref = db.ref('industry/'+this.industryname);
   },
   methods:{
    renderChart(){
      this.lineChartData['labels'] = this.industry['overallhiringtrend']['Year'];
      this.lineChartData['datasets'][0]['data'] = this.industry['overallhiringtrend']['Number Hired'];
      let jobtrend = this.industry['jobtrend']
      console.log(typeof jobtrend);
      this.lineChartJob['labels'] = this.industry['overallhiringtrend']['Year']
      for (let [jobs,value] of Object.entries(jobtrend)){
        var temp = {
          'label': jobs,
          'data':jobtrend[jobs]['Number Hired']
        };
        this.lineChartJob['datasets'].push(temp);
      }
      let salary = this.industry['salary'];
      this.barChartData['labels'] = salary['range'];
      this.barChartData['datasets'][0]['data']=salary['count'];
      let organisation = this.industry['organisation'];
      let cap = organisation['cap'];
      let name = organisation['name'];
      let numgrads = organisation['numgrads'];
      let sal = organisation['salary'];
      for (let i in cap){
          temp = {
            'organisation': name[i],
            'cap': cap[i],
            'sal': sal[i],
            'numGrads': numgrads[i]
          }
          this.tableData['rows'].push(temp);
      };
      this.loaded = true;
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
   mdbModalFooter,
   mdbDatatable
   },
   data () {
   return {
    industryname:'Accounting and Auditing',
    industry : {},
    loaded: false,
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
   currentViz: "HiringTrend",
   
   vizs: [
    'HiringTrend',
    'SalaryDistribution',
    'Organisations',
    'CAPDistribution'
   ],
   
   tableData: {
        columns: [
          {
            label: 'Organisation',
            field: 'organisation',
            sort: 'asc'
          },
          {
            label: 'CAP',
            field: 'cap',
            sort: 'asc'
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'asc'
          },
          {
            label: 'Number of Graduates',
            field: 'numGrads',
            sort: 'asc'
          }
        ],
        rows: []
   },
   
          barChartData: {
          labels:[],
          datasets:[{
            data:[],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
          }]
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
         pieChartData: {},
         pieChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         },
         lineChartData: {
          labels:[],
          datasets:[{
            data:[],
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
          }]
         },
         lineChartJob: {
          labels:[],
          datasets:[]
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
         radarChartData: {},
         radarChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         },
         doughnutChartData: {},
         doughnutChartOptions: {
           responsive: true,
           maintainAspectRatio: false
         }
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