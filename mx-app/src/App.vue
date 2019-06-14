<template>
  <div id="app">
    <loading/>
    <Search/>
    <Footer/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Loading from "@/components/Loading.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
export default Vue.extend({
  components: {
    Loading,
    Search,
    Footer
  }
});
</script>

<style lang="scss">
html {
  font-size: 62.5% !important;
  width: 100%;
  height: 100%;
  background: #fff !important;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
