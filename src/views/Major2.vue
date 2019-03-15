      <!-- use popover instead of clickable button -->
      <template>
         <div class="wrapper">
            <section id="major">
               <div><br/></div>
               <section class="mt-lg-5">
               <mdb-row>
                  <mdb-col>
                    <mdb-row class="justify-content-end">
                    <mdb-col col="4">
                     <mdb-row md="4" center>
                        <mdb-modal-title>
                           <h1 class="card-title">Business Analytics 
                           </h1>
                        </mdb-modal-title>
                     </mdb-row>
                     <mdb-row md="4" center>
                        <mdb-modal-footer center>
                           <mdb-col center>
                                                     
                           </mdb-col>
                        </mdb-modal-footer>
                     </mdb-row>
                  </mdb-col>
                  <mdb-col col="4">
                    
                  </mdb-col>
                </mdb-row>
                  <mdb-row center>
                     <div class="w-75 p-3" style="background-color: #eee;">
                        <nav-tabs-card no-label>
                           <template slot="content" >
                              <mdb-row center>
                                 <md-tabs md-sync-route class="md-primary" md-alignment="centered">
                                    <md-tab @click="currentViz='Median Salary'" id="tab-salary" md-label="Median Salary" md-icon="attach_money">
                                    </md-tab>
                                    <md-tab @click="currentViz='Hiring Statistics'" id="tab-hiring" md-label="Hiring Statistics" md-icon="work">
                                    </md-tab>
                                    <md-tab @click="currentViz='Degree Classification'" id="tab-degree" md-label="Degree Classification" md-icon="category">
                                    </md-tab>
                                 </md-tabs>
                                 
                              </mdb-row>
                              <mdb-card-body>
                              <mdb-row>
                              </mdb-row>
                                <mdb-row>
                                  <div>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active><b-card-text>Tab Contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab Contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab Contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
                              <mdb-col>
                                <mdb-row center>
                              
                              </mdb-row>
                               <mdb-row center v-if="currentViz == 'Median Salary'">
                                <mdb-btn-group>
                                <mdb-btn color="pink" @click.native="currentViz='Median Salary'" :active="active">Industry</mdb-btn>
                                <mdb-btn color="pink" @click.native="currentViz='Median Salary'" :active="active2">Job Title</mdb-btn>
                              </mdb-btn-group>
                                 <div style="display: block" justify-content-center>
                                    <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="500" :width="850"/>
                                 </div>
                                 </mdb-row>

                                 <mdb-row center v-if="currentViz == 'Hiring Statistics'">
                                  <mdb-btn-group>
                                <mdb-btn color="pink" @click.native="currentViz='Hiring Statistics'" :active="active">Industry</mdb-btn>
                                <mdb-btn color="pink" @click.native="currentViz='Hiring Statistics'" :active="active2">Job Title</mdb-btn>
                              </mdb-btn-group>
                                <div style="display: block">
                                  <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="500" :width="850"/>
                                </div>

                              </mdb-row>

                              <mdb-row center v-if="currentViz == 'Degree Classification'">
                                <mdb-btn-group>
                                <mdb-btn color="pink" @click.native="currentViz='Degree Classification'" :active="active">Industry</mdb-btn>
                                <mdb-btn color="pink" @click.native="currentViz='Degree Classification'" :active="active2">Job Title</mdb-btn>
                              </mdb-btn-group>
                                <div style="display: block">
                                  <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="500" :width="850"/>
                                </div>
                              </mdb-row>
                              </mdb-col>
                                </mdb-row>

                              </mdb-card-body>

                              
                           </template>
                        </nav-tabs-card>
                     </div>
                  </mdb-row>
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
         currentViz: "Median Salary",

         vizs: [
          'Median Salary',
          'Hiring Statistics',
          'Degree Classification'
         ],

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
             labels: ['Distinction','Highest Distinction','Merit','Honours','Pass'],
             datasets: [
               {
                 data: [50, 30, 40, 200, 50],
                 backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                 hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
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