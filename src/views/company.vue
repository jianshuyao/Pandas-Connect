<!-- Shouldnt allow selection of company unless chosen major -->
<!-- Insert position dropdown hardcoded -->
<template>
   <div class="wrapper">
      <section id="company">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-start">
               <mdb-col col="3" class="align-self-center">
                  <select class="custom-select custom-select-sm" style="margin-left: 20px;">
                     <option selected>Select Another Company of Interest</option>
                     <option v-for="comp in this.companyname">{{comp}}</option>
                  </select>
               </mdb-col>
               <mdb-col col="6">
                  <mdb-row center>
                     <mdb-modal-title>
                        <p v-b-popover.hover="'I am popover content!'" class="card-title" style="font-size:30px;letter-spacing:2px;">
                           {{this.companyRef}}
                        </p>
                        <hr align="center" style="width:50%;height:2px;color:white;background-color:black;" />
                     </mdb-modal-title>
                  </mdb-row>
               </mdb-col>
               <mdb-col col="3" class="align-self-center">
                  <mdb-row class="justify-content-end">
                     <p class="text_bg" text.truncate style="font-size:18px; letter-spacing:2px">Current Major: {{this.major}}</p>
                  </mdb-row>
               </mdb-col>
            </mdb-row>
            <mdb-row class="justify-content-center d-flex align-items-stretch">
               <mdb-col>
                  <!--
                     <mdb-carousel class="cascading-admin-card" :interval="8000" showControls showIndicators style="height:400px">
                       <mdb-carousel-item img src="https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/mobile/assets/images/University_students_hero_1920x600.jpg" mask="black-light" alt="First slide" href="www.google.com">
                         <a href="https://www.google.com" target='_blank'>
                         <mdb-carousel-caption title="Summer Internship Program" text="Click here to learn more!" content="Testing"></mdb-carousel-caption>
                         </a>
                       </mdb-carousel-item>
                       <mdb-carousel-item img src="https://www.symrise.com/fileadmin/symrise/corporate/your_career/students/Your-career-students-and-interns-how-to-apply02.jpg" mask="black-light" alt="Second slide">
                         <a href="http://lebonheur.org/our-services/emergency-medicine/" target='_blank'>
                         <mdb-carousel-caption title="Graduate Program" text="Click here to learn more!">
                           <a class="btn btn-large pull-right" href="http://lebonheur.org/our-services/emergency-medicine/">Emergency Medicine</a>
                         </mdb-carousel-caption>
                         </a>
                       </mdb-carousel-item>
                       <mdb-carousel-item img src="http://latestblogs.in/wp-content/uploads/2018/08/busy-modern-office.jpg" mask="black-light" alt="Third slide">
                         <a href="https://www.google.com" target='_blank'>
                         <mdb-carousel-caption title="Our Core Values" text="Click here to learn more!" href="www.google.com"></mdb-carousel-caption>
                        </a> 
                       </mdb-carousel-item>
                     </mdb-carousel>
                     --> 
                  <mdb-card class="cascading-admin-card">
                     <b-carousel
                        id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        indicators
                        background="#eeeeee"
                        :interval="8000"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        >
                        <!-- Text slides with image -->
                        <a href="https://www.google.com" target='_blank'>
                           <b-carousel-slide
                              img-src="https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/mobile/assets/images/University_students_hero_1920x600.jpg" style="height:400px;">
                              <h2>Summer Internship Program</h2>
                              <br>
                              <p class="text_bg3">My name is Joel. I am 23 this year. I love to code websites. I want to be a full stack developer in the future. Thank you guys.</p>
                              <br><br><br>
                           </b-carousel-slide>
                        </a>
                        <!-- Slides with custom text -->
                        <a href="http://lebonheur.org/our-services/emergency-medicine/" target='_blank'>
                           <b-carousel-slide img-src="https://www.symrise.com/fileadmin/symrise/corporate/your_career/students/Your-career-students-and-interns-how-to-apply02.jpg" style="height:400px;">
                              <h2>Graduate Program</h2>
                              <br>
                              <p class="text_bg3">My name is Joel. I am 23 this year. I love to code websites. I want to be a full stack developer in the future. Thank you guys.</p>
                              <br><br><br>
                           </b-carousel-slide>
                        </a>
                        <!-- Slides with image only -->
                        <a href="https://www.google.com" target='_blank'>
                           <b-carousel-slide img-src="http://latestblogs.in/wp-content/uploads/2018/08/busy-modern-office.jpg" style="height:400px;">
                              <h2>Our Core Values</h2>
                              <br>
                              <p class="text_bg3">My name is Joel. I am 23 this year. I love to code websites. I want to be a full stack developer in the future. Thank you guys.</p>
                              <br><br><br>
                           </b-carousel-slide>
                        </a>
                     </b-carousel>
                  </mdb-card>
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
                           <mdb-col>
                              <label for="customRange1">Expected Cap: {{this.value_2}}</label>
                              <vue-slider
                                 ref="slider"
                                 v-model="value_2"
                                 v-bind="options"
                                 min=2.0
                                 max=5.0
                                 interval=0.01
                                 ></vue-slider>
                           </mdb-col>
                           <mdb-col>
                              <label>Interested Position</label>
                              <select class="custom-select custom-select-sm">
                                 <option selected>Select a Position</option>
                                 <option 
                                  v-for="pos in this.company['positions']['name']">{{pos}}
                                </option>
                              </select>
                           </mdb-col>
                        </div>
                        <hr/>
                        <div>
                           <b-progress :value="counter" :max="max" show-progress animated  style="height:35px"/>
                           <h5 style="text-align:center">Your chance for the position is rated at {{counter}}%</h5>
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
    db.ref('major/'+this.major+'/company')
    .once('value')
    .then(snapshot=>{
      this.companylist = snapshot.val();
      this.company = this.companylist[this.companyRef];
    })
    .then(()=>{
        this.updateCompanies();
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
    this.companyRef = this.$route.params.companyName;
    this.major = this.$route.params.majName;
   },
   methods:{
    getSelectValue(value, text) {
        console.log(value);
      },
       onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      updateCompanies(){
      let newref = this.companylist;
      for (let [ind, val] of Object.entries(newref)){
        this.companyname.push(ind);
      }
    },
    renderChart(){
   
      let pos = this.company['positions'];
      console.log('pos'+pos)
      this.barChartData['labels'] = pos['salary_range'];
      this.barChartData['datasets'].push({
        'data':pos['salary_count'],
        'label': 'Salary',
        'backgroundColor':this.backgroundColor.slice(0,pos['salary_count'].length),
        'borderColor':this.borderColor.slice(0,pos['salary_count'].length),
        'borderWidth': this.borderWidth
      });
   
      this.barChartCAP['labels'] = pos['cap'];
      this.barChartCAP['datasets'].push({
        'data':pos['cap_count'],
        'label': 'CAP',
        'backgroundColor':this.backgroundColor.slice(0,pos['cap_count'].length),
        'borderColor':this.borderColor.slice(0,pos['cap_count'].length),
        'borderWidth': this.borderWidth
      })
   
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
    companyname:[],
    backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(153, 102, 255, 0.4)',
              'rgba(225, 25, 179, 0.4)',
              'rgba(225, 170, 128, 0.4)'
   
            ],
    borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(225, 25, 179, 1)',
              'rgba(225, 170, 128, 1)'
            ],
    borderWidth: 1,
    
    slide: 0,
    sliding: null,
    companyRef:null,
    major: '',
    company:{},
    value_2: 3.5,
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
   .carousel-item:after {
   content:"";
   display:block;
   position:absolute;
   top:0;
   bottom:0;
   left:0;
   right:0;
   background:rgba(0,0,0,0.3);
   }
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
   .text_bg2 
   {
   opacity: 0.8;
   background-color: #00135b; 
   width: 500px;
   text-align: center;
   display: inline-block;
   }
   .text_bg3
   {
   opacity: 0.75;
   padding: 20px;
   border-radius: 25px;
   background-color: #757575; 
   width: 300px;
   height: 150px;
   text-align: center;
   display: inline-block;
   }
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