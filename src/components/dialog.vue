<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs6>
            <v-layout row wrap align-center>
              <v-flex xs3>
                <img :src='"./../assets/img/" + detailData.nick + ".png"' width="100%">
              </v-flex>
              <v-flex style="padding-left: 20px" xs9>
                <h1>{{ detailData.name }}</h1>
              </v-flex>
              <v-flex xs12 style="padding:30px; padding-left:10px">
                <v-progress-linear v-if="progress" :indeterminate="true"></v-progress-linear>
                <p>{{ detailData.desc }}</p>
              </v-flex>
              <v-flex xs12 style="padding:30px; padding-left:10px">
                <v-btn color="orange" block :loading="progress" @click="install">Install</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-carousel>
              <v-carousel-item v-for="(i,index) in detailData.gambar" :key="index" :src="i.src"></v-carousel-item>
            </v-carousel>
          </v-flex>
          <v-flex xs12>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.process {
  height: 500px;
  overflow-y: scroll;
  width: 100%;
  margin-top: 25px;
  background-color: #c9c9c9;
}
</style>

<script>
var sudo = require("sudo-prompt");
export default {
  props: ["detailData"],
  data() {
    return {
      progress: false,
      progressDetail: ""
    };
  },
  methods: {
    bash() {
      let app = this.detailData.nick;
      let m = this;
      return new Promise(function(resolve, reject) {
        const { exec } = require("child_process");
        console.log(app)
        console.log("mausk promis");
        var options = {
          name: "Stemba App Store"
        };
        sudo.exec("/opt/stemba/" + app + ".sh", options, function(
          error,
          stdout,
          stderr
        ) {
          if (error) {
            m.progress = false;
            m.progressDetail = error;
            console.log("bash error : " + error);
            return;
          }
          if (stderr) {
            m.progress = false;
            m.progressDetail = error;
            console.log("stderror : " + stderr);
            return;
          }
          resolve("ok");
          m.progressDetail = m.progressDetail + stdout;
          console.log(stdout);
        });
        // exec(
        //   "/opt/stemba/" + app + ".sh",
        //   (error, stdout, stderr) => {
        //     if (error) {
        //       m.progress = false;
        //       m.progressDetail = error
        //       console.log("bash error : " + error);
        //       return;
        //     }
        //     if (stderr) {
        //       m.progress = false;
        //       m.progressDetail = error
        //       console.log("stderror : " + stderr);
        //       return
        //     }
        //     resolve('ok')
        //     m.progressDetail = m.progressDetail + stdout;
        //     console.log(stdout);
        //   }
        // );
      });
    },
    install() {
      this.progress = true;
      const { exec } = require("child_process");
      var online = navigator.onLine;
      if (online) {
        console.log("online");
        this.bash().then(() => {
          console.log("ini sampe fixing");
          sudo.exec("/opt/stemba/rm.sh", (error, stdout, stderr) => {
            if (error) {
              alert("terjadi kesalahan")
              this.progress = false
              return;
            }
            if (stderr) {
              alert("aplikasi berhasil diinstall");
              this.progress = false
              return;
            }
            this.progressDetail = this.progressDetail + stdout;
            let m = this;
            setTimeout(function() {
              alert("aplikasi berhasil diinstall");
              m.progress = false;
            }, 3000);
            console.log(stdout);
          });
        });
      } else {
        console.log("offline");
      }
    }
  }
};
</script>
