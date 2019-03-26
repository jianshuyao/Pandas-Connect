<template>
  <div class="wrapper">
    <div id="landing">
    <parallax class="mask flex-center rgba-black-light section page-header header-filter" :style="headerStyle">
      <div class="container">
            <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:300|Megrim|Monoton">
        <div class="md-layout">
          <div
            class="md-layout-item md-small-size-70 md-xsmall-size-100 text-center"
          >
            <h1 style ="font-size:60px;color:white;font-family: 'Monoton', cursive; letter-spacing: 10px;">PANDAS CONNECT</h1>
            <hr align="center" style="width:30%;height:2px;color:white;background-color:white;" />
            <h2 class="text_bg" style="font-size:30px;font-family: 'Nunito'; font-weight:bold;color:white">
              <i>Professional Careers Advisory</i>
            </h2>
            <a href="#/Search"><button class="button button5"><i class="fas fa-industry"></i> Industries</button></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#/search_careers"><button class="button button5"><i class="far fa-building"></i> Companies</button></a>
          </div>
        </div>
      </div>
    </parallax>
  </div>
    <div class="main main-raised">
      <div id="about_tag">
      <div class="about2">
      <div class="section">
        <div class="container">
          <div class="features">
            <div class="md-layout">
              <div class="md-layout-item md-large-size-50 md-medium-size-100">
                <div class="info mw-100">
                  <hr align="left" style="width:10%;height:2px;color:#333;background-color:#333;" />
                  <h2 class="info-title" style="line-height:25px;font-size:30px;">Our Advisor</h2>
                      <img 
                        :src="profImg"
                        alt="Thumbnail Image"
                      />
                      <div><br></div>
                  <p align="justify"> 
                    <b>Professor Chris Boesch</b> is an Associate Professor at the NUS School of Computing and Deputy Director of the Translational Research Unit at ALSET. With over twenty years of experience in engineering and management roles at leading global technology firms, he oversees the ALSET Educational Data Lake and various translational research initiatives.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-50 md-medium-size-100">
                <div class="info mw-90">
                  <hr align="left" style="width:15%;height:2px;color:#333;background-color:#333;" />
                  <h2 class="info-title" style="line-height:25px;font-size:30px">What is Pandas Connect?</h2>
                  <p align="justify">
                    Pandas Connect is a joint project by the NUS Institution for Application of Learning Science and Educational Technology(ALSET) and Pandas. It is a career guidance application designed <strong>BY</strong> students <strong>FOR</strong> students. Utilizing the ALSET Educational Data Lake, key analytics insights are shared with students to help them make more informed decisions in their career choices.
                  </p>
                  <div><br></div>
                  <h2 class="info-title" style="line-height:25px;font-size:30px">Our Mission</h2>
                  <p align="justify">
                  To empower students of NUS by providing them with more career information for them to make better decisions to realise their full potential.
                  </p>
                    <div><br></div>
                    <h2 class="info-title" style="line-height:25px;font-size:30px">Our Vision</h2>
                  <p align="justify">
                  To organize the University’s data, process it, and make it more accessible and useful for students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div class="about4">
        <div id="why_us_tag">
      <div class="section text-center">
        <div class="container">
          <hr align="center" style="width:10%;height:2px;color:#333;background-color:#333;" />
          <h2 class="title" style="line-height:15px;">Why Pandas Connect?</h2>
          <div class="row">
            <div class="sigle-service col-lg-6 col-md-6">
              <i class="far fa-frown mr-2 fa-3x"></i> <br />
              <h4 class="card-title">Limited Access to Reliable Career Information</h4>
              <p style='font-size:15px;'>
                <ul style="list-style-type:circle; text-align: left;">
                  <li>Few students are aware of the available platforms to consult a CFG mentor</li>
                  <li>No existing online resource that provides students with the necessary knowledge on careers</li>
                  <li>Information from seniors and external networking sessions may be unreliable and not representative</li>
                </ul>

            </p>
            </div>
            <div class="sigle-service col-lg-6 col-md-6">
              <i class="fas fa-laptop mr-2 fa-3x"></i> <br />
              <h4 class="card-title">Lack of Proper Modules Planning</h4>
              <p style='font-size:15px; text-align: left;'>
                <ul style="list-style-type:circle;">
                  <li>Clueless about what modules to take to meet their career requirements</li>
                  <li>Unsure of what skills are needed in the industry that they wish to enter</li>
                </ul>

            </p>
            </div>
          </div>
          </div>
      </div>
    </div>
      </div>
      <div id = "team_tag">
      <div class="about">
      <div class="section text-center">
        <div class="container">
          <hr align="center" style="width:10%;height:2px;color:#333;background-color:#333;" />
          <h2 class="title" style="line-height:15px;">Team Pandas</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-85 mx-auto">
                      <img
                        :src="teamImg4"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                        style="border:2px solid white"
                      />
                    </div>
                    <h4 class="card-title">
                      Joel Sim
                      <br />
                      <small class="card-description text-muted">Web Developer</small>
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/halfeatenorange" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-85 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                        style="border:2px solid white"
                      />
                    </div>
                    <h4 class="card-title">
                      Jeremy Denzel Lim 
                      <br />
                      <small class="card-description text-muted">Front End Developer</small>
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/JeremyDenzelLim" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                      <md-button
                        href="https://www.linkedin.com/in/jeremy-denzel-lim-63616816b/" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-85 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                        style="border:2px solid white"
                      />
                    </div>
                    <h4 class="card-title">
                      Sung Zheng Jie
                      <br />
                      <small class="card-description text-muted"
                        >Front End Developer</small
                      >
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                      href="https://github.com/zhengjiesung" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                      <md-button
                        href="https://www.linkedin.com/in/zheng-jie-sung/" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-25 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-85 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                        style="border:2px solid white"
                      />
                    </div>
                    <h4 class="card-title">
                      Andrew Tham
                      <br />
                      <small class="card-description text-muted">Web Developer</small>
                    </h4>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://github.com/movingcastle888" 
                        target="_blank"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-github"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div id="contact_tag">
      <div class="about3">
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <div class="md-layout-item md-size-25 mx-auto">
                      <img
                        :src="panda"
                        alt="Thumbnail Image"
                      />
                    </div>
              <h2 class="text-center title" style="line-height:20px;">Contact Us!</h2>
              <h4 class="text-center description" >
                Feel free to drop any feedback or suggestions to improve our site!
              </h4>
              <h4 class="text-center description" >
                You can also drop us a message for collaboration work :)
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <button class="button6">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/main.jpg")
    },
    profImg: {
      type: String,
      default: require("@/assets/img/faces/prof.png")
    }
    ,
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/jeremy.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/zhengjie.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/Andrew.png")
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/faces/joel.png")
    },
    panda: {
      type: String,
      default: require("@/assets/img/dabpanda2.png")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.about3{
background-image: linear-gradient(to right, #E0EAFC,#CFDEF3); 
}
.about4{
background-image: linear-gradient(to right, #E0EAFC,#CFDEF3); 
}
.about2{
}
.about{
  background-image: linear-gradient(to right, #e8eaf6,#e1f5fe,#e8eaf6); 
  padding: 40px;
}
.text_bg 
{
  opacity: 0.8;
  text-align: center;
  margin: auto;
  border-radius: 10px;
  float:center;
  width:775px;
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
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 20px 10px;
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
.button6{
  background-color: #555555;
  border: none;
  color: white;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 12px 2px;
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
</style>
