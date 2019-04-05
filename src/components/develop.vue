<template>
  <v-app dark>
    <v-container grid-list-md>
     <list :data="data"></list>
    </v-container>
  </v-app>
</template>
<script>
import mdata from "./../assets/db/db.json";
import mdialog from "./dialog"
import list from "./list"
export default {
  components: {
    mdialog, list
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
      if(mdata[i].kat.includes("develop")){
        m.data.push(mdata[i])
      }
    }
  }
};
</script>
