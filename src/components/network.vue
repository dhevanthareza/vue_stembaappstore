<template>
  <v-app dark>
    <v-container grid-list-md>
      <list :data="data"></list>
    </v-container>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="orange">
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
import list from './list'
export default {
  components: {
    mdialog,list
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
    var m = this
    for(var i = 0; i < mdata.length; i++){
      if(mdata[i].kat.includes("network")){
        m.data.push(mdata[i])
      }
    }
  }
};
</script>
