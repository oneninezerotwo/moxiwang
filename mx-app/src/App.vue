<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Footer,
  },
})
</script>

<style lang="scss">
html{
  font-size: 62.5% !important;
  width: 100%;
  height: 100%;
  background:#f3f3f3;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
