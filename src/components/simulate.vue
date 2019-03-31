<template>
  <v-app>
    <v-container grid-list-md>
      <v-layout row wrap align-content-center justify-center>
        <v-flex xs4 v-for="(i,index) in data" v-bind:key="index">
          <v-card>
            <img :src='"./../assets/img/" + i.nick + ".png"' height="200">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{i.name}}</h3>
                <div>{{ i.desc | deskripsi }}....</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn @click="detail(index)" flat color="orange">Lihat Detail</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ detailData.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <mdialog :detailData="detailData"></mdialog>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import mdata from "./../assets/db/db.json";
import mdialog from "./dialog"
export default {
  components: {
    mdialog
  },
  data() {
    return {
      dialog: false,
      data: [],
      detailData: {
        id: 0,
        name: "",
        desc: "",
        nick: "putty",
        kat: "",
        gambar: []
      }
    };
  },
  methods: {
    findByKey(object, key, value) {
      var result = [];
      for (var i = 0; i < object.length; i++) {
          var element = object[i];

          if (element[key] === value) {
          result.push(element);

          }
      }
      return result;
      },
    detail(index) {
      console.log(this.data[index].nick)
      this.detailData = this.data[index]
      // this.detailData.gambar.push("./../assets/img/" + this.data[index].nick + '-ss1.png', "./../assets/img/" + this.data[index].nick + '-ss2.png')
      this.detailData.gambar = [
        {
          src: require("./../assets/img/" + this.data[index].nick + "-ss1.png")
        },
        {
          src: require("./../assets/img/" + this.data[index].nick + "-ss2.png")
        }
      ]
      this.dialog = true
    }
  },
  created() {
    console.log(mdata);
    this.data = this.findByKey(mdata, 'kat', 'simulate');
  }
};
</script>
