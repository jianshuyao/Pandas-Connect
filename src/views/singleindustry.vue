<!--Remove the option in dropdown for the industry the page is currently showing-->
<template>
  <div class="wrapper">
    <section id="module">
      <div style="height: 56px;"></div>
      <section class="mt-lg-1">
        <mdb-row class="justify-content-center">
          <mdb-card class="sticky">
            <mdb-row class="justify-content-start">
          <mdb-col col="3" class="align-self-center">
            <div>
              <p
                @click="showSingleIndustry = !showSingleIndustry"
                class="text_bg_2"
                text.truncate
                style="font-size:14px;margin-left: 20px;"
              >
                Other Industry's Information &nbsp<mdb-icon icon="mouse-pointer" />
              </p>
              <select
                v-show="showSingleIndustry"
                id="newIndustry"
                class="custom-select custom-select-sm"
                style="margin-left: 20px;"
                @change="
                  $router.push({
                    path: '/singleindustry/' + majorname + '/' + currname
                  })
                "
                v-model="currname"
              >
                <option disabled>Select Another Industry of Interest</option>
                <option v-for="ind in this.industryname">{{ ind }}</option>
              </select>
            </div>
          </mdb-col>
          <mdb-col col="6">
            <mdb-row center>
              <mdb-modal-title>
                <p
                  class="card-title"
                  style="font-size:30px;letter-spacing: 2px;"
                >
                  {{ this.currname }}
                </p>
              </mdb-modal-title>
            </mdb-row>
          </mdb-col>
          <mdb-col col="3" class="align-self-center">
            <mdb-row class="justify-content-end">
              <p
                class="text_bg"
                text.truncate
                style="font-size:16px; letter-spacing:2px"
              >
                <mdb-icon icon="graduation-cap" /> Major: {{ this.majorname }}
              </p>
            </mdb-row>
          </mdb-col>
          </mdb-row>
        <mdb-row class="justify-content-center">
        <a href="#hiring_salary_tag" v-smooth-scroll><button class="button button5">Overview Hiring & Salary</button></a>
        <a href="#salary_tag" v-smooth-scroll><button class="button button5">Salary Spread</button></a>
        <a href="#company_tag" v-smooth-scroll><button class="button button5">Compare Companies</button></a>
        <a href="#recommend_tag" v-smooth-scroll><button class="button button5">Recommendations</button></a>
        </mdb-row>
        </mdb-card>
        </mdb-row>
        <a name="myanchor">
    <h1 style="padding-top: 95px; margin-top: -40px;">My anchor</h1>
</a>
<a class = "anchor" id="hiring_salary_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col md="1" lg="6">
            <mdb-card class="cascading-admin-card">
              <mdb-card-header
                class="card-title"
                >Hiring Trend</mdb-card-header
              >
              <mdb-card-body>
                <div
                  v-if="this.loaded"
                  style="display: block"
                  justify-content-center
                >
                  <mdb-line-chart
                    :data="lineChartData"
                    :options="lineChartOptions"
                    :height="300"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="2" lg="6">
            <mdb-card class="cascading-admin-card">
              <mdb-card-header
                class="card-title"
                >Salary Distribution</mdb-card-header
              >
              <mdb-card-body>
                <div
                  v-if="this.loaded"
                  style="display: block"
                  justify-content-center
                >
                  <mdb-bar-chart
                    :data="barChartData"
                    :options="barChartOptions"
                    :height="300"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <a class = "anchor2" id="salary_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col md="2" lg="12">
            <mdb-card class="cascading-admin-card">
              <mdb-card-header
                class="card-title"
                >Salary Range by Company</mdb-card-header
              >
              <mdb-card-body>
                <div v-if="this.loaded">
                  <highcharts
                    class="chart"
                    :options="chartOptions"
                  ></highcharts>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
<a class="anchor3" id="company_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col>
            <mdb-card class="cascading-admin-card">
              <mdb-card-header
                class="card-title"
                >Compare Companies</mdb-card-header
              >
              <mdb-card-body>
                <div v-if="this.loaded" style="display: block">
                  <b-row>
                    <b-col md="6" class="my-1">
                      <b-form-group
                        label-cols-sm="3"
                        label="Filter"
                        class="mb-0"
                      >
                        <b-input-group>
                          <b-form-input
                            v-model="filter"
                            placeholder="Type to Search"
                          />
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-1">
                      <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
                        <b-input-group>
                          <b-form-select
                            v-model="sortBy"
                            :options="sortOptions"
                          >
                            <option slot="first" :value="null"
                              >-- None --</option
                            >
                          </b-form-select>
                          <b-form-select
                            :disabled="!sortBy"
                            v-model="sortDesc"
                            slot="append"
                          >
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-1">
                      <b-form-group
                        label-cols-sm="3"
                        label="Per page"
                        class="mb-0"
                      >
                        <b-form-select
                          :options="pageOptions"
                          v-model="perPage"
                        />
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-1">
                      <b-form-group
                        label-cols-sm="3"
                        label="Legend"
                        class="mb-0"
                      >
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
                    :bordered="true"
                    :fixed="true"
                    :hover="true"
                    :small="true"
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

                    <template slot="numGrads" slot-scope="row">
                      {{ row.value }}
                    </template>

                    <template slot="actions" slot-scope="row">
                      <b-button
                        size="sm"
                        @click="
                          $router.push({
                            path:
                              '/company/' +
                              row.item['organisation'] +
                              '/' +
                              majorname
                          })
                        "
                        class="mr-1"
                        variant="test"
                      >
                        Learn More
                      </b-button>
                    </template>

                    <template slot="row-details" slot-scope="row">
                      <b-card>
                        <ul>
                          <li v-for="(value, key) in row.item" :key="key">
                            {{ key }}: {{ value }}
                          </li>
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
                  <b-modal
                    id="modalInfo"
                    @hide="resetModal"
                    :title="modalInfo.title"
                    ok-only
                  >
                    <pre>{{ modalInfo.content }}</pre>
                  </b-modal>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <a class="anchor4" id="recommend_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col md="1" lg="7">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-card-header
                class="card-title"
                >Recommended Modules</mdb-card-header
              >
              <mdb-card-body class="align-items-center justify-content-center">
                <div v-if="this.recommended" style="display: block">
                  <b-row>
                    <b-col md="6" class="my-1">
                      <b-form-group
                        label-cols-sm="3"
                        label="Filter"
                        class="mb-0"
                      >
                        <b-input-group>
                          <b-form-input
                            v-model="filterSuggest"
                            placeholder="Type to Search"
                          />
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-1">
                      <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
                        <b-input-group>
                          <b-form-select
                            v-model="sortBySuggest"
                            :options="sortOptionsSuggest"
                          >
                            <option slot="first" :value="null"
                              >-- None --</option
                            >
                          </b-form-select>
                          <b-form-select
                            :disabled="!sortBySuggest"
                            v-model="sortDescSuggest"
                            slot="append"
                          >
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-1">
                      <b-form-group
                        label-cols-sm="3"
                        label="Per page"
                        class="mb-0"
                      >
                        <b-form-select
                          :options="pageOptionsSuggest"
                          v-model="perPageSuggest"
                        />
                      </b-form-group>
                    </b-col>
                  </b-row>

                  <b-col md="8" class="my-1">
                    <b-form-group
                      label-cols-sm="3"
                      label="Module Level"
                      class="mb-0"
                    >
                      <b-badge variant="success">1000</b-badge>
                      <b-badge variant="info">2000</b-badge>
                      <b-badge variant="primary">3000</b-badge>
                      <b-badge variant="warning">4000</b-badge>
                      <b-badge variant="danger">5000</b-badge>
                      <b-badge variant="secondary">6000</b-badge>
                    </b-form-group>
                  </b-col>

                  <!-- Main table element -->
                  <b-table
                    show-empty
                    stacked="md"
                    :items="tableSuggestedData"
                    :fields="fieldsSuggest"
                    :current-page="currentPageSuggest"
                    :per-page="perPageSuggest"
                    :filter="filterSuggest"
                    :sort-by.sync="sortBySuggest"
                    :sort-desc.sync="sortDescSuggest"
                    :sort-direction="sortDirectionSuggest"
                    :bordered="true"
                    :fixed="true"
                    :hover="true"
                    @filtered="onFilteredSuggest"
                  >
                    <template slot="modcode" slot-scope="row">
                      {{ row.value }}
                    </template>

                    <template slot="modname" slot-scope="row">
                      {{ row.value }}
                    </template>

                    <template slot="numgrad" slot-scope="row">
                      {{ row.value }}
                    </template>

                    <template slot="actions" slot-scope="row">
                      <a
                        v-bind:href="
                          'https://nusmods.com/modules/' +
                            row.item['modcode'] +
                            ''
                        "
                        target="_blank"
                      >
                        <b-button size="sm" class="mr-1" variant="test">
                          Learn More
                        </b-button>
                      </a>
                    </template>

                    <template slot="row-details" slot-scope="row">
                      <b-card>
                        <ul>
                          <li v-for="(value, key) in row.item" :key="key">
                            {{ key }}: {{ value }}
                          </li>
                        </ul>
                      </b-card>
                    </template>
                  </b-table>
                  <div v-if="this.recommended">
                    <b-row>
                      <b-col md="6" class="my-1">
                        <b-pagination
                          :total-rows="totalRowsSuggest"
                          :per-page="perPageSuggest"
                          v-model="currentPageSuggest"
                          class="my-0"
                        />
                      </b-col>
                    </b-row>
                  </div>

                  <!-- Info modal -->
                  <b-modal
                    id="modalInfoSuggest"
                    @hide="resetModal"
                    :title="modalInfoSuggest.title"
                    ok-only
                  >
                    <pre>{{ modalInfo.content }}</pre>
                  </b-modal>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="2" lg="5">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-card-header
                class="card-title"
                >Recommended Skillsets</mdb-card-header
              >
              <mdb-card-body class="align-items-center justify-content-center">
                <div style="display: block">
                  <IEcharts
                    :option="wordcloud"
                    @ready="onReady"
                    style="height:450px"
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
import {
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
  mdbListGroup,
  mdbListGroupItem,
  mdbBadge,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbSelect,
  mdbContainer
} from "mdbvue";

import "echarts-wordcloud";
import IEcharts from "vue-echarts-v3/src/lite.js";

import { mdbDatatable } from "mdbvue";

import { db } from "../firebase";

const items = [];
const items2 = [];

export default {
  name: "Single Industry",
  bodyClass: "singleIndustry-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  mounted: function() {
    db.ref("major/" + this.majorname + "/industries")
      .once("value")
      .then(snapshot => {
        this.industry = snapshot.val();
        this.major = this.industry[this.currname];
      })
      .then(() => {
        this.updateindustry();
        this.renderChart();
      });
    db.ref("industrymod/" + this.currname)
      .once("value")
      .then(snapshot => {
        this.suggestedmods = snapshot.val();
      })
      .then(() => {
        this.recommendmods();
      });
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
          return { text: f.label, value: f.key };
        });
    },
    sortOptionsSuggest() {
      // Create an options list from our fields
      return this.fieldsSuggest
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  created() {
    this.industryref = db.ref("industry/" + this.industryname);
    this.suggestref = db.ref("industrymod/" + this.currname);
    this.tableSuggestedData = [];
    this.tableData = [];
    this.currname = this.$route.params.indName;
    this.majorname = this.$route.params.currMaj;
  },
  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    infoSuggest(item, index, button) {
      this.modalInfoSuggest.title = `Row index: ${index}`;
      this.modalInfoSuggest.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    resetModalSuggest() {
      this.modalInfoSuggest.title = "";
      this.modalInfoSuggest.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onFilteredSuggest(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRowsSuggest = filteredItems.length;
      this.currentPageSuggest = 1;
    },
    genCapCol(cap) {
      return cap < 3.75 ? "success" : cap < 4.5 ? "warning" : "danger";
    },
    updateindustry() {
      let newref = this.industry;
      for (let [ind, val] of Object.entries(newref)) {
        this.industryname.push(ind);
      }
      console.log(this.industryname);
    },
    onReady(instance, echarts) {
      const that = this;
      that.ins = instance;
      that.echarts = echarts;

      that.wordcloud = {
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 2,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            shape: "pentagon",
            width: 600,
            height: 400,
            drawOutOfBound: true,
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: this.wordclouddata
          }
        ]
      };
    },
    getSelectValue(value, text) {
      console.log(value);
    },
    renderlevel(level) {
      let col = ["success", "info", "primary", "warning", "danger", "active"];
      let res = col[Math.floor(level / 1000 - 1)];
      return res;
    },
    renderChart() {
      let top5h = this.major["top5hiringtrend"];
      let top5s = this.major["top5salarytrend"];
      let top5c = this.major["top5companies"];

      let wordcloudtext = this.major["wordcloud"];
      let wordvalues = wordcloudtext["values"];
      let words = wordcloudtext["words"];
      for (let i in words) {
        this.wordclouddata.push({
          name: words[i],
          value: wordvalues[i]
        });
      }
      let count = 0;
      for (let [ind, val] of Object.entries(top5h)) {
        this.lineChartData["labels"] = top5h[ind]["year"];
        this.lineChartData["datasets"].push({
          label: ind,
          data: top5h[ind]["numhired"],
          backgroundColor: 'rgba(0,0,0,0)',//this.backgroundColor[count],
          borderColor: this.borderColor[count],
          borderWidth: 2,//this.borderWidth
          lineTension:0 //makes the line straight
        });
        count++;
      }

      count = 0;
      for (let [ind, val] of Object.entries(top5s)) {
        this.barChartData["labels"] = top5s[ind]["salary"];
        this.barChartData["datasets"].push({
          label: ind,
          data: top5s[ind]["count"],
          backgroundColor: this.backgroundColor[count],
          borderColor: this.borderColor[count],
          borderWidth: this.borderWidth
        });
        count++;
      }

      for (let [ind, val] of Object.entries(top5s)) {
        let salarynode = top5s[ind]["actual_sal"].sort();
        salarynode.unshift(ind);
        this.chartOptions["xAxis"]["categories"].push(ind);
        this.chartOptions["series"][0]["data"].push(salarynode);
      }

      let organisation = top5c;
      let cap = organisation["cap"];
      let name = organisation["name"];
      let numgrads = organisation["numgrad"];
      let sal = organisation["salary"];
      for (let i in cap) {
        let temp = {
          organisation: name[i],
          cap: cap[i],
          sal: sal[i],
          numGrads: numgrads[i],
          _rowVariant: this.genCapCol(cap[i])
        };
        this.tableData.push(temp);
      }
      this.totalRows = this.tableData.length;
      this.loaded = true;
    },
    recommendmods() {
      let mods = this.suggestedmods;
      console.log(this.suggestedmods);
      let code = mods["modcode"];
      let mname = mods["modname"];
      let nGrads = mods["numgrad"];
      for (let i in code) {
        let modlevel = code[i].split(/([0-9]+)/)[1];
        let temp = {
          modcode: code[i],
          modname: mname[i],
          numgrad: nGrads[i],
          _rowVariant: this.renderlevel(modlevel)
        };
        this.tableSuggestedData.push(temp);
      }
      this.totalRowsSuggest = this.tableSuggestedData.length;
      this.recommended = true;
    }
  },
  components: {
    IEcharts,
    mdbSelect,
    mdbContainer,
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
  data() {
    return {
      chartOptions: {
        chart: {
          type: "boxplot",
          inverted: true
        },

        title: {
          text: null
        },

        legend: {
          enabled: false
        },

        xAxis: {
          type: "category",
          categories: [],
          title: {
            text: "Company"
          }
        },

        yAxis: {
          title: {
            text: "Salary"
          }
        },

        series: [
          {
            name: "Observations",
            data: [],
            tooltip: {
              headerFormat: "<em>{point.key}</em><br/>"
            }
          }
        ],

        plotOptions: {
          series: {
            fillColor: '#81D4FA', //box color
            lineColor: '#81D4FA',
            lineWidth: 3,
            upperQuartileColor: '#81D4FA', 
            lowerQuartileColor: '#81D4FA',
            medianColor: '#FFFFFF',
            medianWidth: 3, //thickness of median line
            stemColor: '#81D4FA',
            stemDashStyle: 'solid',
            stemWidth: 3,
            whiskerColor: '#ffffff00',
            whiskerWidth: 3
          }
        }
      },

      showSingleIndustry: false,
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)"
      ],
      borderWidth: 1,

      wordclouddata: [],
      wordcloud: {},
      majorname: null,
      major: {},
      suggestedmods: {},
      newInd: null,
      currname: null,
      industryname: [],
      loaded: false,
      recommended: false,
      modal: false,

      //TableData
      tableData: items,
      fields: [
        {
          key: "organisation",
          label: "Organisation",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "cap", label: "Median CAP", sortable: true },
        {
          key: "sal",
          label: "Median Salary",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "numGrads",
          label: "Number of Graduates",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "actions", label: "Actions", class: "text-center" }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: { title: "", content: "" },

      //TableSuggestedData
      tableSuggestedData: items2,
      fieldsSuggest: [
        {
          key: "modcode",
          label: "Module Code",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "modname", label: "Module Name", sortable: true },
        {
          key: "numgrad",
          label: "Number of Graduates",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "actions", label: "Actions", class: "text-center" }
      ],
      currentPageSuggest: 1,
      perPageSuggest: 5,
      totalRowsSuggest: items2.length,
      pageOptionsSuggest: [5, 10, 15],
      sortBySuggest: null,
      sortDescSuggest: false,
      sortDirectionSuggest: "asc",
      filterSuggest: null,
      modalInfoSuggest: { title: "", content: "" },

      barChartData: {
        labels: [],
        datasets: []
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
      pieChartData: {},
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: [],
        datasets: []
      },
      lineChartJob: {
        labels: [],
        datasets: []
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ]
        }
      }
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text_bg_2 {
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
.btn-test {
  background-color: #607d8b;
  border-color: white;
  color: white;
  border-radius: 10px;
}
.text_bg {
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
.button {
  a {
    text-decoration: none;
  }
  a:link, a:visited {
    color: white;
  }
  a:hover {
    color: black;
  }
  opacity: 0.8;
  background-color: #4CAF50; 
  border: 2px solid white;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin-top: 0px;
  margin-right:10px;
  margin-left:10px;
  margin-bottom: 5px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.button5 {
  background-color: #555555;
  border-radius: 12px;
}
.button5:hover {
  background-color: white;
  color: black;
  border-radius: 12px;
}
.sticky {
  background-color: #cfd8dc;
  position: fixed;
  overflow: visible;
  z-index: 999;
  top: 20;
  width: 100%;
  margin-bottom:20px;
  padding: 5px;
  border-color: #90a4ae;
  border-width: 2px;
  box-shadow: 20px 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
}
.fillColor {
  background-color: #cfd8dc;
}

.anchor{
  display: block;
  position: relative;
  top: -190px;
  visibility: hidden;
}

.anchor2{
  display: block;
  position: relative;
  top: -190px;
  visibility: hidden;
}

.anchor3{
  display: block;
  position: relative;
  top: -180px;
  visibility: hidden;
}

.anchor4{
  display: block;
  position: relative;
  top: -180px;
  visibility: hidden;
}
</style>
