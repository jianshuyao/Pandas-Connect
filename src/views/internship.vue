<!--TODO: Chance meter DB-->
<template>
  <div class="wrapper">
      <section id="industry">
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
                Other Internship's Information &nbsp<mdb-icon icon="mouse-pointer" />
              </p>
              <select
                v-show="showSingleIndustry"
                id="newIndustry"
                class="custom-select custom-select-sm"
                style="margin-left: 20px;"
                @change="
                  $router.push({
                    path: '/internship/' + majorname + '/' + currRole
                  })
                "
                v-model="currRole"
              >
                <option disabled>Select Another Internship of Interest</option>
                <option v-for="ind in this.internshipname">{{ ind }}</option>
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
                  {{ this.currRole }}
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
                v-if="this.majorname.includes('with')"
              >
              <mdb-icon icon="graduation-cap" /> Major: {{ this.majorname.split('with')[0] }}
              <mdb-tooltip :options="{placement: 'bottom'}">
                <span slot="tip">With {{ this.majorname.split('with')[1] }}</span>
                <mdb-icon 
                  icon="plus"
                  slot="reference"
                />
              </mdb-tooltip>
              </p>
              <p
                class="text_bg"
                text.truncate
                style="font-size:16px; letter-spacing:2px"
                v-else
              >
                <mdb-icon icon="graduation-cap" /> Major: {{ this.majorname }}
              </p>
            </mdb-row>
          </mdb-col>
          </mdb-row>
          <mdb-row class="justify-content-center">
        <a href="#trajectory" v-smooth-scroll><button class="button button5">Future Trajectory</button></a>
        <a href="#company_tag" v-smooth-scroll><button class="button button5">Company Info & Programs</button></a>
        <a href="#chance_tag" v-smooth-scroll><button class="button button5">Rate your Chance</button></a>
        <a href="#recommend_tag" v-smooth-scroll><button class="button button5">Recommendations</button></a>
        </mdb-row>
          </mdb-card>
        </mdb-row>
        <a name="myanchor">
    <h1 style="padding-top: 95px; margin-top: -40px; opacity:0">My anchor</h1>
</a>

<a class = "anchor" id="trajectory"></a>

        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col>
            <mdb-card class="cascading-admin-card">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">
                  See the future paths taken by your senior after embarking on this internship! 
                </span>
              <mdb-card-header
                class="card-title"
                slot="reference"
                >Future Trajectory</mdb-card-header
              >
            </mdb-tooltip>
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



<a class = "anchor" id="company_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col>
            <mdb-card class="cascading-admin-card">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">
                  This table allows you to compare companies in the same industry '{{this.currname}}' by Median Cap, Median Salary and Graduates. Table is colored by CAP intervals to give you a better sensing of the suitability of the company by cap intake! Want to know more about a company? Simply click 'learn more'!
                </span>
              <mdb-card-header
                class="card-title"
                slot="reference"
                >Compare Companies</mdb-card-header
              >
            </mdb-tooltip>
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

                    <template slot="ind" slot-scope="row">
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
<a class = "anchor" id="chance_tag"></a>
        <mdb-row class="justify-content-center">
          <mdb-col>
            <mdb-card class="cascading-admin-card">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">Enter your CAP and desired job position to rate your chances of getting your dream job!</span>
                <mdb-card-header
                  style="background-color: #b3e5fc;"
                  class="card-title"
                  slot="reference"
                  >Rate Your Chances</mdb-card-header
                >
              </mdb-tooltip>
              <mdb-card-body>
                <div class="justify-content-center d-flex align-items-stretch" v-if='this.loaded'>
                  <mdb-col>
                    <label for="customRange1"
                      >Expected Cap: {{ this.value_2 }}</label
                    >
                    <vue-slider
                      ref="slider"
                      v-model="value_2"
                      v-bind="options"
                      min="2.0"
                      max="5.0"
                      interval="0.01"
                    ></vue-slider>
                  </mdb-col>
                  <mdb-col>
                    <label>Desired Company</label>
                    <select
                      class="custom-select custom-select-sm"
                      v-model="jobTit"
                    >
                      <option disabled value="">Select a Position</option>
                      <option v-for="pos in this.company"
                        >{{ pos }}
                      </option>
                    </select>
                  </mdb-col>
                  <mdb-col>
                  <label class="typo__label">Past Internship Roles</label>
                  <multiselect class="mscol" v-model="value" tag-placeholder="Add this as new tag" placeholder="Select Past Role" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" :style="" @tag="addTag"></multiselect>
                </mdb-col>
                </div>
                <hr />
                <div>
                  <div v-if="this.jobTit.length == 0">
                    <h4 style="text-align:center">
                      Please select your CAP and desired company!
                    </h4>
                  </div>

                  <div v-else>
                    <div v-if="counter <= 33">
                      <b-progress
                        :value="counter"
                        variant="danger"
                        max="100"
                        show-progress
                        animated
                        style="height:35px"
                      />
                    </div>
                    <div v-else-if="counter > 33 && counter <= 66">
                      <b-progress
                        :value="counter"
                        variant="warning"
                        max="100"
                        show-progress
                        animated
                        style="height:35px"
                      />
                    </div>
                    <div v-else>
                      <b-progress
                        :value="counter"
                        variant="success"
                        max="100"
                        show-progress
                        animated
                        style="height:35px"
                      />
                    </div>
                    <h5 style="text-align:center">
                      Based on past Employment Statistics of NUS students in
                      this company,<br />
                      your chance for the position is rated at:
                    </h5>
                    <h2 style="text-align:center">
                      <strong>{{ counter }}%</strong>
                    </h2>
                  </div>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
<a class = "anchor" id="recommend_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col md="1" lg="7">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">
                  This section allows you to know what modules to take that are highly relevant for the industry '{{this.currname}}' that you're interested in! Each module is colored by their level code, and can be sorted by the number of graduates who took the module. More information can be learnt from NUSmods!
                </span>
              <mdb-card-header
                class="card-title"
                slot="reference"
                >Recommended Modules</mdb-card-header
              >
            </mdb-tooltip>
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
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">
                  Equipped with sophisticated Natural Language Processing, we identify skillsets that are more tailored for the '{{this.currname}}' industry!
                </span>
              <mdb-card-header
                class="card-title"
                slot="reference"
                >Recommended Skillsets</mdb-card-header
              >
            </mdb-tooltip>
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
  mdbContainer,
  mdbTooltip
} from "mdbvue";

import "echarts-wordcloud";
import IEcharts from "vue-echarts-v3/src/lite.js";

import { mdbDatatable } from "mdbvue";

import { db } from "../firebase";

import Multiselect from 'vue-multiselect';

const items = [];
const items2 = [];

export default {
  name: "Internship",
  bodyClass: "internship-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  mounted: function() {
    db.ref("internship/" + this.majorname)
      .once("value")
      .then(snapshot => {
        this.internship = snapshot.val();
        this.modules = this.internship['modules'];
        this.companies = this.internship['roles'][this.currRole];
      })
      .then(() => {
        this.updateinternship();
        this.renderChart();
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
    },
    counter() {
      return Math.round(this.value_2 * 15 + (this.jobTit.length % 20));
    }
  },
  created() {
    this.tableSuggestedData = [];
    this.tableData = [];
    this.majorname = 'Accountacy'//this.$route.params.currMaj;
  },
  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
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
    updateinternship() {
      let newref = this.internship['roles'];
      for (let [intern, val] of Object.entries(newref)) {
        this.internshipname.push(intern);
      }
      console.log(this.internshipname);
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
      for (let [name, val] of Object.entries(this.companies)) {
        let temp = {
          'organisation':name,
          'cap':val["cap"],
          'numGrads':val["numseniors"],
          'sal':val["allowance"],
          'ind':val['industry'],
          '_rowVariant': this.genCapCol(val["cap"])
        }
        this.tableData.push(temp);
        this.company.push(name);
      }
      this.totalRows = this.tableData.length;
      

      let wordcloudtext = this.internship["skills"];
      let wordvalues = wordcloudtext["values"];
      let words = wordcloudtext["words"];
      for (let i in words) {
        this.wordclouddata.push({
          name: words[i],
          value: wordvalues[i]
        });
      }

      let prev = this.internship['previntern']
      for (let i of prev){
        this.options.push({name:i, code:i});
      }



      let trajectory = this.internship['trajectory'];
      this.barChartData["labels"] = trajectory['job'];
      this.barChartData["datasets"].push({
        data: trajectory['num'],
        label: 'Number Hired',
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: this.borderWidth
      });
      this.loaded = true;
      console.log(this.barChartData['labels'])

    },
    recommendmods() {
      let mods = this.modules;
      console.log(this.modules);
      let code = mods["modcode"];
      let mname = mods["modname"];
      let nGrads = mods["numseniors"];
      for (let i in code) {
        console.log(code[i]);
        let modlevel = code[i].split(/([0-9]+)/)[1];
        let temp = {
          'modcode': code[i],
          'modname': mname[i],
          'numgrad': nGrads[i],
          '_rowVariant': this.renderlevel(modlevel)
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
    mdbTooltip,
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
    mdbDatatable,
    Multiselect
  },
  data() {
    return {
      value: [
      ],
      options: [],
      value_2: 3.5,
      jobTit: "",
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
            fillColor: '#87CEFA',
            lineWidth: 2,
          }
        }
      },

      showSingleIndustry: false,
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)",
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
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
      newInternship: null,
      internshipname: [],
      loaded: false,
      recommended: false,
      modal: false,
      currRole:'Assessor Intern',
      company:[],

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
          label: "Median Allowance",
          sortable: true,
          sortDirection: "desc"
        },{
          key: "ind",
          label: "Industry",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "numGrads",
          label: "Number of Seniors",
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
              },
              ticks: {
                    display: false //this will remove only the label
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
  background-color: #b0bec5;
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
  opacity: 0.88;
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
.mscol{ 
  background: #b3e5fc;
}
.multiselect.multiselect__tag {
  background: #b3e5fc;
}
</style>
