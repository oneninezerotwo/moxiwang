<template>
  <div id="app">
     <loading/>
    <Search/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading';
import Search from '@/components/Search'
export default Vue.extend({
  components: {
    Footer,
    Loading,
    Search 
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
</style>
