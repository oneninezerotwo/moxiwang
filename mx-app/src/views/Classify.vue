<template>
  <div class="home">
    <Mxhead/>
    <Mxloading/>
    <Totop/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mxhead from "@/components/Mxhead.vue";
import Mxloading from "@/components/Mxloading.vue";
import Totop from "@/components/Totop.vue";

@Component({
  components: {
    Mxhead,
    Mxloading,
    Totop
  }
})
export default class Home extends Vue {}
</script>
