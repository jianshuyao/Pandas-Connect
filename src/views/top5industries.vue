<template>
   <div class="wrapper">
      <section id="module">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-start">
               <mdb-col col="3" class="align-self-center">
               <select class="custom-select custom-select-sm" style="margin-left: 20px;">
                  <option selected>Select Particular Industry of Interest</option>
                  <option v-for="ind in this.industyname">{{ind}}</option>
               </select>
             </mdb-col>
             <mdb-col col="6">
              <mdb-row center>
                  <mdb-modal-title>
                    <p class="card-title" style="font-size:30px;letter-spacing: 2px;">Top 5 Industries Overview</p>
                    <hr align="center" style="width:50%;height:2px;color:white;background-color:black;" />
                  </mdb-modal-title>
                </mdb-row>
             </mdb-col>
<mdb-col col="3" class="align-self-center">
                  <mdb-row class="justify-content-end">
                    <p class="text_bg" text.truncate style="font-size:18px; letter-spacing:2px">Current Major: {{this.currentMajor}}</p>
                  </mdb-row>
             </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center d-flex align-items-stretch">
               <mdb-col md="1" lg="6">
                  <mdb-card class="cascading-admin-card">
                     <mdb-card-header> Hiring Trend </mdb-card-header>
                     <mdb-card-body>
                        <div v-if='this.loaded' style="display: block" justify-content-center>
                           <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
                        </div>
                     </mdb-card-body>
                  </mdb-card>
               </mdb-col>
               <mdb-col md="2" lg="6">
                <mdb-card class="cascading-admin-card">
                     <mdb-card-header> Salary Trend </mdb-card-header>
                     <mdb-card-body>
                        <div v-if='this.loaded' style="display: block" justify-content-center>
                              <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="300"/>
                           </div>
                     </mdb-card-body>
                  </mdb-card>
               </mdb-col>
             </mdb-row>
            <mdb-row class="justify-content-center d-flex align-items-stretch">
                <mdb-col>
                  <mdb-card class="cascading-admin-card">
                     <mdb-card-header> Companies </mdb-card-header>
                     <mdb-card-body>
                        <div v-if='this.loaded' style="display: block">
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
   import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbSelect, mdbContainer } from 'mdbvue'
   
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
    db.ref('major/'+this.currentMajor)
    .once('value')
    .then(snapshot=>{
      this.major = snapshot.val()
    })
    .then(()=>{
        this.updateindustry();
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
    this.currentMajor = this.$route.params.majorName;
   },
   methods:{
    getSelectValue(value, text) {
        console.log(value);
      },

    updateindustry(){
      let newref = this.major['industries']
      for (let [ind, val] of Object.entries(newref)){
        this.industyname.push(ind);
      }
    },

    renderChart(){

      let top_5 = this.major['top5'];
      let top5 = top_5['top_5']
      for (let [ind, val] of Object.entries(top5)){
        console.log(ind)
        this.lineChartData['labels'] = top5[ind]['overallhiringtrend']['year'];
        this.lineChartData['datasets'].push({
          'label': ind,
          'data': top5[ind]['overallhiringtrend']['numhired']
        })
        console.log(this.lineChartData)
      };

      for (let [ind, val] of Object.entries(top5)){
        console.log(ind)
        this.barChartData['labels'] = top5[ind]['overallsalarydist']['salary'];
        this.barChartData['datasets'].push({
          'label': ind,
          'data': top5[ind]['overallsalarydist']['count']
        })
      };

      let organisation = top_5['organisations'];
      let cap = organisation['cap'];
      let name = organisation['name'];
      let numgrads = organisation['numgrad'];
      let sal = organisation['salary'];
      let ind = organisation['industry']
      for (let i in cap){
          let temp = {
            'organisation': name[i],
            'cap': cap[i],
            'sal': sal[i],
            'industry':ind[i],
            'numGrads': numgrads[i],
            
          }
          this.tableData['rows'].push(temp);
      };
      this.loaded = true;
    }
   },
   components: {
     mdbSelect,
      mdbContainer,
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
    currentMajor:null,
    searchOptions: [
          { text: 'Choose your option', value: null, disabled: true, selected: true },
          { text: 'Option nr 1', value: 'Option 1' },
          { text: 'Option nr 2', value: 'Option 2' },
          { text: 'Option nr 3', value: 'Option 3' },
          { text: 'Option nr 4', value: 'Option 4' },
          { text: 'Option nr 5', value: 'Option 5' }
        ],
    major : {},
    industyname : [],
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
            field: 'sal',
            sort: 'asc'
          },
          {
            label: 'Industry',
            field: 'ind',
            sort: 'asc'
          },
          {
            label: 'Number of Graduates',
            field: 'numgrads',
            sort: 'asc'
          }
        ],
        rows: []
   },
   
          barChartData: {
          labels:[],
          datasets:[]
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
          datasets:[]
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
.text_bg 
      {
      opacity: 0.7;
        background-color: #00135b; 
        border: 2px solid grey;
        color: white;
        padding: 15px 22px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        margin: 5px 5px;
        margin-right: 8%;
        border-radius: 12px;
      }
   .cascading-admin-card {
   margin: 20px;
   margin-top: 10px;
   padding: 5px;
   border-color: #90a4ae;
   border-width: 2px;
   box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
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
   border-color: #546e7a;
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