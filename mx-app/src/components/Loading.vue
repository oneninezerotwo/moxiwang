<template>
  <div>
    <img src="../assets/shuaxin.gif" alt class="shuaxin" v-show="loading">
  </div>
</template>
<script>
export default {
  name: "Loading",
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style scoped>
.shuaxin {
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translateX(%); */
}
</style>

