<template>
   <div class="wrapper">
      <section id="company">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-start">
              <mdb-col col="3" class="align-self-center">
                <select class="custom-select custom-select-sm" style="margin-left: 20px;">
                  <option selected>Select Another Company of Interest</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
             </mdb-col>
             <mdb-col col="6">
              <mdb-row center>
                  <mdb-modal-title>
                      <p v-b-popover.hover="'I am popover content!'" class="card-title" style="font-size:30px;letter-spacing: 2px;">
                        {{this.companyname}}
                      </p>
                    <hr align="center" style="width:50%;height:2px;color:white;background-color:black;" />
                  </mdb-modal-title>
                </mdb-row>
             </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center d-flex align-items-stretch">
              <mdb-col>
              <mdb-carousel class="cascading-admin-card" :interval="8000" showControls showIndicators style="height:400px">
                <mdb-carousel-item img src="https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/mobile/assets/images/University_students_hero_1920x600.jpg" mask="black-light" alt="First slide" href="www.google.com">
                  <mdb-carousel-caption title="Summer Internship Program" text="Click here to learn more!" content="Testing"></mdb-carousel-caption>
                </mdb-carousel-item>
                <mdb-carousel-item img src="https://www.symrise.com/fileadmin/symrise/corporate/your_career/students/Your-career-students-and-interns-how-to-apply02.jpg" mask="black-light" alt="Second slide">
                  <mdb-carousel-caption title="Graduate Program" text="Click here to learn more!">
                    <a class="btn btn-large pull-right" href="http://lebonheur.org/our-services/emergency-medicine/">Emergency Medicine</a>
                  </mdb-carousel-caption>
                </mdb-carousel-item>
                <mdb-carousel-item img src="http://latestblogs.in/wp-content/uploads/2018/08/busy-modern-office.jpg" mask="black-light" alt="Third slide">
                  <mdb-carousel-caption title="Our Core Values" text="Click here to learn more!" href="www.google.com"></mdb-carousel-caption>
                </mdb-carousel-item>
              </mdb-carousel>
            </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center d-flex align-items-stretch">
               <mdb-col md="1" lg="6">
                  <mdb-card class="cascading-admin-card">
                     <mdb-card-header> Pie chart </mdb-card-header>
                      <mdb-card-body>
                          <div v-if='this.loaded' style="display: block">
                            <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="300"/>
                          </div>
                      </mdb-card-body>
                  </mdb-card>
               </mdb-col>
               <mdb-col md="2" lg="6">
                <mdb-card class="cascading-admin-card">
                     <mdb-card-header> Chance Meter </mdb-card-header>
                  <mdb-card-body>
                      <div class="justify-content-center d-flex align-items-stretch">
                          <mdb-col class="align-self-center">
                            <label for="customRange1">Expected Cap</label>
                            <vue-slider
                              ref="slider"
                              v-model="value_2"
                              v-bind="options"
                            ></vue-slider>
                          </mdb-col>
                          <mdb-col class="align-self-center">
                            <label></label>
                            <select class="custom-select custom-select-sm" style="margin-left: 20px;">
                              <option selected>Select Interested Position</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                          </mdb-col>

                      </div>
                      <br/>
                      <div>
                        <b-progress :value="counter" :max="max" show-progress animated  style="height:35px"/>
                        <h5 style="text-align:center">Your chance for the position is rated at {{counter}}</h5>
                      </div>
                  </mdb-card-body>
                </mdb-card>
               </mdb-col>
             </mdb-row>
             <mdb-row class="justify-content-center d-flex align-items-stretch">
                  <mdb-col md="1" lg="6">
                    <mdb-card class="cascading-admin-card" style="height:100%">
                     <mdb-card-header> CAP Distribution </mdb-card-header>
                     <mdb-card-body>
                        <div v-if='this.loaded' style="display: block">
                          <mdb-bar-chart :data="barChartCAP" :options="barChartOptions" :height="400"/>
                        </div>
                     </mdb-card-body>
                  </mdb-card>
                  </mdb-col>
                  <mdb-col md="2" lg="6">
                    <mdb-card class="cascading-admin-card" style="height:100%">
                     <mdb-card-header> Salary Distribution </mdb-card-header>
                     <mdb-card-body>
                        <div v-if='this.loaded' style="display: block">
                          <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="400"/>
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
   import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbTbl, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbBadge, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbSelect, mdbContainer, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbPopover  } from 'mdbvue'
   
   import "echarts-wordcloud"
   import IEcharts from "vue-echarts-v3/src/lite.js"
   
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
    db.ref('major/'+this.major+'/company/'+this.companyname)
    .once('value')
    .then(snapshot=>{
      this.company = snapshot.val();
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
    this.companyref = db.ref('major/'+this.major+'/company/'+this.companyname);
   },
   methods:{
    getSelectValue(value, text) {
        console.log(value);
      },
    renderChart(){

      let pos = this.company['positions'];
      console.log('pos'+pos)
      this.barChartData['labels'] = pos['salary_range'];
      this.barChartData['datasets'].push({'data':pos['salary_count']});

      this.barChartCAP['labels'] = pos['cap'];
      this.barChartCAP['datasets'].push({'data':pos['cap_count']})

      this.pieChartData['labels'] = pos['name'];
      this.pieChartData['datasets'].push({
        'data':pos['count'],
        'backgroundColor': ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
        'hoverBackgroundColor': ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
      });

      this.loaded = true;
    }
   },
   components: {
    mdbPopover,
     mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption,
    IEcharts,
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
    major: 'Accountacy',
    companyname:'ANZ',
    company:{},
    value_2: [0, 50],
    counter: 45,
    max: 100,
    wordcloud: {},
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
          datasets:[]
         },
         barChartCAP: {
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
      pieChartData: {
        labels: [],
        datasets: []
      },
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
    .carousel-content {
      position: absolute;
      bottom: 10%;
      left: 5%;
      z-index: 20;
      color: white;
      font-size: 100px;
      text-shadow: 0 1px 2px rgba(0,0,0,.6);
    }
    .carousel-caption {
        font-size:20px;
        top: 0;
        bottom: auto;
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