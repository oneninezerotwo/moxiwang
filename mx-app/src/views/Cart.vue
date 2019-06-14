<template>
    <div class="cart">
       <Header/>
      <Main/>
       <Count/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from '@/components/CartHeader.vue'
import Main from '@/components/CartMain.vue'
import Count from '@/components/CartCount.vue'
export default Vue.extend({
     created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
  components:{
    Header,
    Main,
    Count
  }
})
</script>
<style lang="scss" scoped>

</style>


