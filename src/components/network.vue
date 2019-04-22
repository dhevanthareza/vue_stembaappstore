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
import list from './list'
export default {
  components: {
    mdialog,list
  },
  data() {
    return {
      dialog: false,
      data: [],
    };
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
