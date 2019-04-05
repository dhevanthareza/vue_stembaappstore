<template>
  <v-app>
    <v-container pa-0 grid-list-lg>
      <v-layout row wrap align-content-center>
        <v-flex xs12>
          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(i,index) in images" :key="index" :src="i.src"></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs12>
          <v-text-field class="mx-3" flat label="Search" prepend-inner-icon="search" v-model="search" solo-inverted></v-text-field>
        </v-flex>
        
      </v-layout>
      <list :data="filteredData"></list>
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
import list from './list'
import mdata from "./../assets/db/db.json";
import mdialog from "./dialog";
export default {
  components: {
    mdialog, list
  },
  data() {
    return {
      dialog: false,
      data: mdata,
      search: '',
      images: [
        {
          src: require("./../assets/img/car1.png")
        },
        {
          src: require("./../assets/img/car2.png")
        },
        {
          src: require("./../assets/img/car4.png")
        },
        {
          src: require("./../assets/img/car3.png")
        }
      ],
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
  computed:{
    filteredData(){
      return this.data.filter((data) => {
        return data.name.toLowerCase().match(this.search)
      })
    }
  },
  methods: {
    detail(index) {
      console.log(this.data[index].nick);
      this.detailData = this.data[index];
      // this.detailData.gambar.push("./../assets/img/" + this.data[index].nick + '-ss1.png', "./../assets/img/" + this.data[index].nick + '-ss2.png')
      this.detailData.gambar = [
        {
          src: require("./../assets/img/" + this.data[index].nick + "-ss1.png")
        },
        {
          src: require("./../assets/img/" + this.data[index].nick + "-ss2.png")
        }
      ];
      this.dialog = true;
    }
  },
};
</script>
