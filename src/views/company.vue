<template>
  <div class="wrapper">
    <section id="company">
      <div style="height: 56px;"></div>
      <section class="mt-lg-1">
        <mdb-row class="justify-content-center">
          <mdb-card class="sticky">
            <mdb-row class="justify-content-start">
          <mdb-col col="3" class="align-self-center">
            <div>
              <p
                @click="showCompany = !showCompany"
                class="text_bg_2"
                text.truncate
                style="font-size:14px;margin-left: 20px;"
              >
                Other Company's Information &nbsp<mdb-icon icon="mouse-pointer" />
              </p>
              <select
                v-show="showCompany"
                class="custom-select custom-select-sm"
                @change="
                  $router.push({ path: '/company/' + companyRef + '/' + major })
                "
                style="margin-left: 20px;"
                v-model="companyRef"
              >
                <option disabled selected
                  >Select Another Company of Interest</option
                >
                <option v-for="comp in this.companyname">{{ comp }}</option>
              </select>
            </div>
          </mdb-col>
          <mdb-col col="6">
            <mdb-row center>
              <mdb-modal-title>
                <p
                  class="card-title"
                  style="font-size:30px;letter-spacing:2px;"
                >
                  {{ this.companyRef }}
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
                v-if="this.major.includes('with')"
              >
              <mdb-icon icon="graduation-cap" /> Major: {{ this.major.split('with')[0] }}
              <mdb-tooltip :options="{placement: 'bottom'}">
                <span slot="tip">With {{ this.major.split('with')[1] }}</span>
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
                <mdb-icon icon="graduation-cap" /> Major: {{ this.major }}
              </p>
            </mdb-row>
          </mdb-col>
          </mdb-row>
          <mdb-row class="justify-content-center">
        <a href="#company_tag" v-smooth-scroll><button class="button button5">Company Info & Programs</button></a>
        <a href="#job_tag" v-smooth-scroll><button class="button button5">Job Roles Statistics</button></a>
        <a href="#chance_tag" v-smooth-scroll><button class="button button5">Rate your Chance</button></a>
        </mdb-row>
          </mdb-card>
        </mdb-row>
        <a name="myanchor">
    <h1 style="padding-top: 95px; margin-top: -40px; opacity:0">My anchor</h1>
</a>
<a class = "anchor" id="company_tag"></a>
        <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col>
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
                <!-- Slides with image only -->
                <a
                  v-bind:href="
                    'https://www.google.com/search?q=' + this.companyRef + ''
                  "
                  target="_blank"
                >
                  <b-carousel-slide
                    img-src="http://latestblogs.in/wp-content/uploads/2018/08/busy-modern-office.jpg"
                    style="height:400px;"
                  >
                    <h2>Company Information</h2>
                    <br />
                    <p class="text_bg3">{{ info["information"] }}</p>
                    <br /><br /><br />
                  </b-carousel-slide>
                </a>
                <!-- Text slides with image -->
                <a href="https://nus-csm.symplicity.com/" target="_blank">
                  <b-carousel-slide
                    img-src="https://prodcmscdn.azureedge.net/careerconnectresources/p/MICRUS/en_us/mobile/assets/images/University_students_hero_1920x600.jpg"
                    style="height:400px;"
                  >
                    <h2>Summer Internship Program</h2>
                    <br /><br />
                    <mdb-row
                      class="justify-content-center d-flex align-items-stretch"
                    >
                      <div v-for="item in info['positions']['intern']">
                        <p class="text_bg4">
                          {{ item["name"] }}<br />NUS TalentConnect Job ID:
                          {{ item["code"] }}
                        </p>
                        &nbsp;&nbsp;
                      </div>
                    </mdb-row>
                    <br /><br /><br />
                  </b-carousel-slide>
                </a>
                <!-- Slides with custom text -->
                <a href="https://nus-csm.symplicity.com/" target="_blank">
                  <b-carousel-slide
                    img-src="https://www.symrise.com/fileadmin/symrise/corporate/your_career/students/Your-career-students-and-interns-how-to-apply02.jpg"
                    style="height:400px;"
                  >
                    <h2>Graduate Program</h2>
                    <br /><br />
                    <mdb-row
                      class="justify-content-center d-flex align-items-stretch"
                    >
                      <div v-for="item in info['positions']['graduate']">
                        <p class="text_bg4">
                          {{ item["name"] }}<br />NUS TalentConnect Job ID:
                          {{ item["code"] }}
                        </p>
                        &nbsp;&nbsp;
                      </div>
                    </mdb-row>
                    <br /><br /><br />
                  </b-carousel-slide>
                </a>
              </b-carousel>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <a class = "anchor2" id="job_tag"></a>
                <mdb-row class="justify-content-center d-flex align-items-stretch">
          <mdb-col md="1" lg="4">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">Hover over each segment of the pie chart to see how many seniors were hired for each role!</span>
                <mdb-card-header
                  class="card-title"
                  slot="reference"
                  >Job Breakdown</mdb-card-header
                >
              </mdb-tooltip>
              <mdb-card-body>
                <div v-if="this.loaded" style="display: block">
                  <mdb-pie-chart
                    :data="pieChartData"
                    :options="pieChartOptions"
                    :height="300"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="2" lg="4">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">View the CAP distribution of graduates working in {{this.companyRef}}</span>
                <mdb-card-header
                  class="card-title"
                  slot="reference"
                  >CAP Distribution</mdb-card-header
                >
              </mdb-tooltip>
              <mdb-card-body>
                <div v-if="this.loaded" style="display: block">
                  <mdb-bar-chart
                    :data="barChartCAP"
                    :options="barChartOptions"
                    :height="400"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" lg="4">
            <mdb-card class="cascading-admin-card" style="height:100%">
              <mdb-tooltip :options="{placement: 'top'}">
                <span slot="tip">View the salary distribution of graduates working in {{this.companyRef}}</span>
                <mdb-card-header
                  class="card-title"
                  slot="reference"
                  >Salary Distribution</mdb-card-header
                >
              </mdb-tooltip>
              <mdb-card-body>
                <div v-if="this.loaded" style="display: block">
                  <mdb-bar-chart
                    :data="barChartData"
                    :options="barChartOptions"
                    :height="400"
                  />
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <a class="anchor3" id="chance_tag"></a>
        <div style="height:40px"></div>
        <mdb-row class="justify-content-center">
          <mdb-col md="2" lg="12">
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
                <div class="justify-content-center d-flex align-items-stretch">
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
                    <label>Desired Job Position</label>
                    <select
                      class="custom-select custom-select-sm"
                      v-model="jobTit"
                    >
                      <option disabled value="">Select a Position</option>
                      <option v-for="pos in this.company['positions']['name']"
                        >{{ pos }}
                      </option>
                    </select>
                  </mdb-col>
                  <mdb-col>
                  <label class="typo__label">Past Internship Roles</label>
                  <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Select Past Role" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                </mdb-col>
                </div>
                <hr />
                <div>
                  <div v-if="this.jobTit.length == 0">
                    <h4 style="text-align:center">
                      Please select your CAP and desired job position!
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
      </section>
    </section>
  </div>
</template>
<script>
import {
  mdbTooltip,
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
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption,
  mdbPopover
} from "mdbvue";

import "echarts-wordcloud";
import IEcharts from "vue-echarts-v3/src/lite.js";

import { mdbDatatable } from "mdbvue";

import { db } from "../firebase";

import Multiselect from 'vue-multiselect';

export default {
  name: "Company",
  bodyClass: "company-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  mounted: function() {
    db.ref("major/" + this.major + "/company")
      .once("value")
      .then(snapshot => {
        this.companylist = snapshot.val();
        this.company = this.companylist[this.companyRef];
      })
      .then(() => {
        this.updateCompanies();
        this.renderChart();
      });
    db.ref("companyinfo/" + this.companyRef)
      .once("value")
      .then(snapshot => {
        this.info = snapshot.val();
      });
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    counter() {
      var temp = this.value.map(this.nameTag).join('').length/10;
      var internship = (temp>15) ? 15 : temp;
      return Math.round(this.value_2 * 14 + (this.jobTit.length % 10) + internship);
    },
  },
  created() {
    this.companyRef = this.$route.params.companyName;
    this.major = this.$route.params.majName;
  },
  watch: {
    $route(to, from) {
      this.$router.go();
    }
  },
  methods: {
    nameTag (tag){
      return tag.name
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    getSelectValue(value, text) {
      console.log(value);
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    updateCompanies() {
      let newref = this.companylist;
      for (let [ind, val] of Object.entries(newref)) {
        this.companyname.push(ind);
      }
    },
    renderChart() {
      let pos = this.company["positions"];
      this.barChartData["labels"] = pos["salary_range"];
      this.barChartData["datasets"].push({
        data: pos["salary_count"],
        label: "Salary",
        backgroundColor: this.backgroundColor.slice(
          0,
          pos["salary_count"].length
        ),
        borderColor: this.borderColor.slice(0, pos["salary_count"].length),
        borderWidth: this.borderWidth
      });

      this.barChartCAP["labels"] = pos["cap"];
      this.barChartCAP["datasets"].push({
        data: pos["cap_count"],
        label: "CAP",
        backgroundColor: this.backgroundColor.slice(0, pos["cap_count"].length),
        borderColor: this.borderColor.slice(0, pos["cap_count"].length),
        borderWidth: this.borderWidth
      });

      this.pieChartData["labels"] = pos["name"];
      this.pieChartData["datasets"].push({
        data: pos["count"],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#ac64ad"
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#da92db"
        ]
      });
      let prev = pos['pastintern']
      for (let i of prev){
        this.options.push({name:i, code:i});
      }
      this.loaded = true;
    }
  },
  components: {
    Multiselect,
    mdbTooltip,
    mdbPopover,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
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
      value: [],
      options: [],
      showCompany: false,
      companyname: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.4)",
        "rgba(54, 162, 235, 0.4)",
        "rgba(255, 206, 86, 0.4)",
        "rgba(75, 192, 192, 0.4)",
        "rgba(153, 102, 255, 0.4)",
        "rgba(225, 25, 179, 0.4)",
        "rgba(225, 170, 128, 0.4)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(225, 25, 179, 1)",
        "rgba(225, 170, 128, 1)"
      ],
      borderWidth: 1,
      jobTit: "",
      slide: 0,
      sliding: null,
      companyRef: null,
      major: "",
      company: {},
      value_2: 3.5,
      wordcloud: {},
      industry: {},
      loaded: false,
      info: {},
      modal: false,
      tableData: {
        columns: [
          {
            label: "Organisation",
            field: "organisation",
            sort: "asc"
          },
          {
            label: "CAP",
            field: "cap",
            sort: "asc"
          },
          {
            label: "Salary",
            field: "salary",
            sort: "asc"
          },
          {
            label: "Number of Graduates",
            field: "numGrads",
            sort: "asc"
          }
        ],
        rows: []
      },

      barChartData: {
        labels: [],
        datasets: []
      },
      barChartCAP: {
        labels: [],
        datasets: []
      },
      barChartOptions: {
        responsive: true,
        legend: {
		    display: false,
		      labels: {
		        display: false
		      }
		  },
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
      pieChartData: {
        labels: [],
        datasets: []
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: "rgba(245, 74, 85, 0.5)"
          }
        ]
      },
      lineChartJob: {
        labels: [],
        datasets: []
      },
      lineChartOptions: {
        responsive: true,
        legend: {
		    display: false,
		      labels: {
		        display: false
		      }
		  },
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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
.carousel-item:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
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
.text_bg2 {
  opacity: 0.8;
  background-color: #00135b;
  width: 500px;
  text-align: center;
  display: inline-block;
}
.text_bg3 {
  opacity: 0.75;
  padding: 20px;
  border-radius: 25px;
  background-color: #757575;
  width: 300px;
  height: 150px;
  text-align: center;
  display: inline-block;
}
.text_bg4 {
  opacity: 0.75;
  padding: 20px;
  border-radius: 25px;
  background-color: #757575;
  width: 300px;
  height: 100px;
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
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption {
  font-size: 20px;
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
</style>
