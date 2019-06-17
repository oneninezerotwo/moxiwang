<template>
  <div class="home">
    <Mxhead/>
    <!-- <Mxloading/> -->
    <Totop/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mxhead from "@/components/Mxhead.vue";
// import Mxloading from "@/components/Mxloading.vue";
import Totop from "@/components/Totop.vue";

@Component({
  components: {
    Mxhead,
    // Mxloading,
    Totop
  },
  created() {
    this.$store.state.isShowMfooter = 1;
  }
})
export default class Home extends Vue {}
</script>
