  <template>
     <div class="wrapper">
        <section id="module">
           <div><br/></div>
           <section class="mt-lg-5">
              <mdb-row class="justify-content-end">
              <mdb-col col="4">
                 <mdb-row md="4" center>
                    <mdb-modal-title>
                       <h1 class="card-title">Finance
                       </h1>
                    </mdb-modal-title>
                 </mdb-row>
              </mdb-col>
              <mdb-col col="4">
              </mdb-col>
            </mdb-row>
              <mdb-row center>
                    <nav-tabs-card no-label>
                       <template slot="content" >
                          <mdb-row center>
                             <md-tabs md-sync-route class="md-primary" md-alignment="centered">
                                <md-tab @click="currentViz='HiringTrend'" id="tab-grade" md-label="Hiring Trend" md-icon="work_outline">
                                </md-tab>
                                <md-tab @click="currentViz='SalaryDistribution'" id="tab-faulty" md-label="Salary Distribution" md-icon="monetization_on">
                                </md-tab>
                                <md-tab @click="currentViz='Organisations'" id="tab-student" md-label="Organisations" md-icon="account_balance">
                                </md-tab>
                                <md-tab @click="currentViz='CAPDistribution'" id="tab-teaching" md-label="CAP Distribution" md-icon="assessment">
                                </md-tab>
                             </md-tabs>
                          </mdb-row>
                          <mdb-card-body v-if="currentViz == 'HiringTrend'">
                             <div style="display: block" justify-content-center>
                                <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="300"/>
                             </div>
                          </mdb-card-body>

                          <mdb-card-body v-if="currentViz == 'SalaryDistribution'">
                            <div style="display: block">
                              <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="500"/>
                            </div>

                          </mdb-card-body>

                          <mdb-card-body v-if="currentViz == 'Organisations'">
                            <div style="display: block">
                              <mdb-datatable
                                :data="tableData"
                                striped
                                bordered
                              />
                            </div>
                          </mdb-card-body>

                          <mdb-card-body v-if="currentViz == 'CAPDistribution'">
                            <div style="display: block">
                              <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="300"/>
                            </div>
                          </mdb-card-body>
                       </template>
                    </nav-tabs-card>
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
     mounted(){
      this.industryref
      .once('value')
      .then(snapshot=>{
        this.industry = snapshot.val();
      })
      .then(()=>{
        this.lineChartData['labels'] = this.industry['overallhiringtrend']['Year'];
        this.lineChartData['datasets'][0]['data'] = this.industry['overallhiringtrend']['Number Hired']
      })
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
          rows: [

            {
              organisation: 'Bloomberg',
              cap: 4.79,
              salary: 5600,
              numGrads: 30
            },
            {
              organisation: 'Credit Suisse',
              cap: 4.68,
              salary: 4800,
              numGrads: 45
            },
            {
              organisation: 'DBS Bank',
              cap: 4.48,
              salary: 3800,
              numGrads: 98
            },
            {
              organisation: 'Deutsche Bank',
              cap: 4.59,
              salary: 5200,
              numGrads: 63
            },
            {
              organisation: 'Goldman Sachs',
              cap: 4.64,
              salary: 7200,
              numGrads: 50
            },
            {
              organisation: 'J.P. Morgan',
              cap: 4.89,
              salary: 6000,
              numGrads: 42
            },
            {
              organisation: 'WorldQuant',
              cap: 4.63,
              salary: 4500,
              numGrads: 14
            }
            
        ]
     },

            barChartData: {},
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