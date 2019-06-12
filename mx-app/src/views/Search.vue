<template>
  <div class="search">
    <Mxsearch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mxsearch from "@/components/Mxsearch.vue"; 

@Component({
  components: {
    Mxsearch
  }
})
export default class Home extends Vue {}
</script>
