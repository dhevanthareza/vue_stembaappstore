<template>
  <v-app>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer fixed v-model="drawer" app>
          <v-list dense >
            <v-list-tile ripple to="/">
              <v-list-tile-action >
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple to="/develop">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Develop</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple to="/simulate">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Simulator</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple to="/network">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Network</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile ripple to="/design">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Design</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
          <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>Application</v-toolbar-title>
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
      drawer: false
    };
  },
  methods: {
    toHome(){

    },
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
  }
};
</script>
