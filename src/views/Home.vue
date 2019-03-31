<template>
  <v-app dark>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer fixed v-model="drawer" app>
          <v-list dense>
            <v-list-tile style="padding: 20px 10px 20px 0">
              <v-list-tile-content>
                <v-list-tile-title class="title"><h1>{{username}}</h1></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list dense>
            <v-divider></v-divider>
            <v-list-tile ripple to="/">
              <v-list-tile-content>
                <v-list-tile-title><h3>All</h3></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile ripple to="/develop">
              <v-list-tile-content>
                <v-list-tile-title><h3>Develop</h3></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile ripple to="/simulate">
              <v-list-tile-content>
                <v-list-tile-title><h3>Simulator</h3></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile ripple to="/network">
              <v-list-tile-content>
                <v-list-tile-title><h3>Network</h3></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile ripple to="/design">
              <v-list-tile-content>
                <v-list-tile-title><h3>Design</h3></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar color="transparent" absolute="" flat dark app>
          <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-app>
    </div>
  </v-app>
</template>
<script>
const { exec } = require("child_process");
export default {
  data() {
    return {
      drawer: false,
      username: ""
    };
  },
  methods: {
    toHome() {},
    bash() {
      return new Promise(function(resolve, reject) {
        const { exec } = require("child_process");
        exec("./src/assets/bash/virtualbox.sh", (error, stdout, stderr) => {
          if (error) {
            console.log("error" + error);
            return;
          }
          if (stderr) {
            console.log("stderr" + stderr);
          }

          console.log(stdout);
          resolve("ok");
        });
      });
    },
    install() {
      var online = navigator.onLine;
      if (online) {
        console.log("ini online");
        this.bash().then(() => {
          exec("./src/assets/bash/rm.sh", (error, stdout, stderr) => {
            if (error) {
              console.log("rm error" + error);
              return;
            }
            console.log("rm stdout" + stdout);
          });
        });
      } else {
        console.log("offline");
      }
    }
  },
  created() {
    let os = require("os");
    console.log(os.userInfo())
    this.username = os.userInfo().username;
  }
};
</script>
