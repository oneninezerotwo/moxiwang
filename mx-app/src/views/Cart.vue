<template>
    <div class="cart">
       <Header/>
      <Main/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/CartHeader.vue'
import Main from '@/components/CartMain.vue'
export default Vue.extend({
     created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
  components:{
    Header,
    Main,
  }
})
</script>
<style lang="scss" scoped>

</style>


