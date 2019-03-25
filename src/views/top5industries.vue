<template>
   <div class="wrapper">
      <section id="module">
         <div><br/></div>
         <section class="mt-lg-5">
            <mdb-row class="justify-content-start">
               <mdb-col col="3" class="align-self-center">
                  <div>
                  <p @click="showSingleIndustry = !showSingleIndustry"class="text_bg_2" text.truncate style="font-size:14px;margin-left: 20px;">Want to learn more about an industry? Click here!</p>  
                  <select v-show="showSingleIndustry" class="custom-select custom-select-sm" style="margin-left: 20px;" @change="$router.push({ path: '/singleindustry/' + currentMajor + '/' +singleInd });" v-model="singleInd">
                     <option selected>Select Particular Industry of Interest</option>
                     <option v-for="ind in this.industyname">{{ind}}</option>
                  </select>
                  </div>
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
                     <p class="text_bg" text.truncate style="font-size:16px; letter-spacing:2px">Major: {{this.currentMajor}}</p>
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
                     <mdb-card-header> Salary Distribution </mdb-card-header>
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
                           <b-row>
                              <b-col md="6" class="my-1">
                                 <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
                                    <b-input-group>
                                       <b-form-input v-model="filter" placeholder="Type to Search" />
                                    </b-input-group>
                                 </b-form-group>
                              </b-col>
                              <b-col md="6" class="my-1">
                                 <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
                                    <b-input-group>
                                       <b-form-select v-model="sortBy" :options="sortOptions">
                                          <option slot="first" :value="null">-- None --</option>
                                       </b-form-select>
                                       <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                                          <option :value="false">Asc</option>
                                          <option :value="true">Desc</option>
                                       </b-form-select>
                                    </b-input-group>
                                 </b-form-group>
                              </b-col>
                              <b-col md="6" class="my-1">
                                 <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
                                    <b-form-select :options="pageOptions" v-model="perPage" />
                                 </b-form-group>
                              </b-col>
                              <b-col md="6" class="my-1">

                              <b-form-group label-cols-sm="3" label="Legend" class="mb-0">
                                <b-badge variant="success">Cap < 3.75</b-badge>
                                <b-badge variant="warning">3.75 < Cap < 4.5</b-badge>
                                <b-badge variant="danger">Cap > 4.5 </b-badge>
                              </b-form-group>

                            </b-col>
                           </b-row>
                           <!-- Main table element -->
                           <b-table
                              show-empty
                              stacked="md"
                              :items="tableData"
                              :fields="fields"
                              :current-page="currentPage"
                              :per-page="perPage"
                              :filter="filter"
                              :sort-by.sync="sortBy"
                              :sort-desc.sync="sortDesc"
                              :sort-direction="sortDirection"
                              :bordered=true
                              :fixed=true
                              :hover=true
                              @filtered="onFiltered"
                              >
                              <template slot="organisation" slot-scope="row">
                                 {{ row.value }}
                              </template>
                              <template slot="cap" slot-scope="row">
                                 {{ row.value }}
                              </template>
                              <template slot="sal" slot-scope="row">
                                 {{ row.value }}
                              </template>
                              <template slot="industry" slot-scope="row">
                                 {{ row.value }}
                              </template>
                              <template slot="numGrads" slot-scope="row">
                                 {{ row.value }}
                              </template>
                              <template slot="actions" slot-scope="row">
                                 <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="test">
                                    Learn More
                                 </b-button>
                              </template>
                              <template slot="row-details" slot-scope="row">
                                 <b-card>
                                    <ul>
                                       <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                                    </ul>
                                 </b-card>
                              </template>
                           </b-table>
                           <b-row>
                              <b-col md="6" class="my-1">
                                 <b-pagination
                                    :total-rows="totalRows"
                                    :per-page="perPage"
                                    v-model="currentPage"
                                    class="my-0"
                                    />
                              </b-col>
                           </b-row>
                           <!-- Info modal -->
                           <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
                              <pre>{{ modalInfo.content }}</pre>
                           </b-modal>
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
   
   const items = [];
   
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
      },
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      sortOptionsSuggest() {
        // Create an options list from our fields
        return this.fieldsSuggest
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
   },
   created(){
    this.currentMajor = this.$route.params.majorName;
    this.tableData = [];
   },
   methods:{
   
    info(item, index, button) {
        this.modalInfo.title = `Row index: ${index}`
        this.modalInfo.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
   
    resetModal() {
        this.modalInfo.title = ''
        this.modalInfo.content = ''
    },
   
    onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
    },
   
    genCapCol(cap){
      return cap<3.75?'success':(cap<4.5?'warning':'danger');
    },
   
   
   
    getSelectValue(value, text) {
        console.log(value);
      },
   
    updateindustry(){
      let newref = this.major['industries']
      for (let [ind, val] of Object.entries(newref)){
        this.industyname.push(ind);
      }
    },
    genCapCol(cap){
      return cap<3.75?'success':(cap<4.5?'warning':'danger');
    },
    renderChart(){
   
      let top_5 = this.major['top5'];
      let top5 = top_5['top_5']
      let count = 0;
      for (let [ind, val] of Object.entries(top5)){
        console.log(ind)
        this.lineChartData['labels'] = top5[ind]['overallhiringtrend']['year'];
        this.lineChartData['datasets'].push({
          'label': ind,
          'data': top5[ind]['overallhiringtrend']['numhired'],
          'backgroundColor': this.backgroundColor[count],
          'borderColor': this.borderColor[count],
          'borderWidth': this.borderWidth
        })
        count++;
        console.log(this.lineChartData)
      };
   
      count = 0;
      for (let [ind, val] of Object.entries(top5)){
        console.log(ind)
        this.barChartData['labels'] = top5[ind]['overallsalarydist']['salary'];
        this.barChartData['datasets'].push({
          'label': ind,
          'data': top5[ind]['overallsalarydist']['count'],
          'backgroundColor': this.backgroundColor[count],
          'borderColor': this.borderColor[count],
          'borderWidth': this.borderWidth
        })
        count++;
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
            '_rowVariant':this.genCapCol(cap[i])
            
          }
          this.tableData.push(temp);
      };
      this.totalRows = this.tableData.length;
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
    showSingleIndustry: false,
    singleInd:null,
   
    backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(153, 102, 255, 0.4)'
            ],
    borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
    borderWidth: 1,
   
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
   
   //TableData
    tableData: items,
     fields: [
      { key: 'organisation', label: 'Organisation', sortable: true, sortDirection: 'desc' },
      { key: 'cap', label: 'Median CAP', sortable: true },
      { key: 'sal', label: 'Median Salary', sortable: true, sortDirection: 'desc'},
      { key: 'industry', label: 'Industry',sortable: true, sortDirection: 'desc' },
      { key: 'numGrads', label: 'Number of Graduates',sortable: true, sortDirection: 'desc' },
      { key: 'actions', label: 'Actions', class: 'text-center' }
    ],
    currentPage: 1,
    perPage: 5,
    totalRows: items.length,
    pageOptions: [5, 10, 15],
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc',
    filter: null,
    modalInfo: { title: '', content: '' },
   
   
   vizs: [
    'HiringTrend',
    'SalaryDistribution',
    'Organisations',
    'CAPDistribution'
   ],
   
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
   .btn-test {
      background-color: #607d8b;
      border-color: white;
      color: white;
      border-radius: 10px;
   }
   .text_bg_2
   {
   opacity: 0.7;
   background-color: #81c784; 
   border: 3px solid green;
   color: black;
   padding: 7px 10px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   margin: 5px 5px;
   border-radius: 12px;
   cursor: pointer;
   }
   .text_bg_2:hover {
  background-color: #1b5e20;
  color: white;
  border-radius: 12px;
    }

   .text_bg 
   {
   opacity: 0.7;
   background-color: #00135b; 
   border: 2px solid grey;
   color: white;
   padding: 10px 12px;
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