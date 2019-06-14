<template>
  <div class="shuaxin1" :style="{opacity:loading?1:0,display:loading?'block':'none'}">
    <img src="../img/shuaxin.gif">
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    loading() {
      // console.log(this);
      return this.$store.state.loading;
    }
  }
});
</script>

<style lang="scss" scoped>
.shuaxin1 {
  width: 10rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: none;
}
</style>

