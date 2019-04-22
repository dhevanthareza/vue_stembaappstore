<template>
  <div>
    <v-layout row wrap>
      <v-flex style="padding:20px" xs3 v-for="(i,index) in data" v-bind:key="index">
        <v-card style="border-radius:20px" min-height="400">
          <img
            :src='"./../assets/img/" + i.nick + ".png"'
            height="100"
            style="margin:20px 0 0 20px"
          >
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{i.name}}</h3>
              <div>{{ i.desc | deskripsi }}....</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn @click="detail(index)" outline round color="white">
              <span>Lihat Detail</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" dark fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark >
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ detailData.name }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <mdialog :detailData="detailData"></mdialog>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import mdialog from "./dialog";
export default {
  components: {
    mdialog
  },
  props: ["data"],
  data() {
    return {
      dialog: false,
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
  }
};
</script>
