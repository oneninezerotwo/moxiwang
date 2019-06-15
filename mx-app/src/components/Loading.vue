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
.shuaxin{ 
    position: fixed;
    top: 50%;
    left: 60%;
    transform: translateX(-50%)
  }
/* .shuaxin {
  position: absolute;
  top: 50%;
  left: 50%;
<<<<<<< HEAD
  /* transform: translateX(%); */
}
=======
  transform: translate(-50%, -50%);
} */
>>>>>>> 8dbb472d13b97b6570fc083762f5304921ec053f
</style>

