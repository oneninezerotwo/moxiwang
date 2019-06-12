<template>
  <div class="home">
    <Mxhead/>
    <Mxloading/>
    <Totop />
    <Mxsearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mxhead from "@/components/Mxhead.vue"; 
import Mxloading from "@/components/Mxloading.vue"; 
import Totop from "@/components/Totop.vue";
import Mxsearch from "@/components/Mxsearch.vue"; 

@Component({
  components: {
    Mxhead,
    Mxloading,
    Totop,
    Mxsearch
  }
})
export default class Home extends Vue {}
</script>
