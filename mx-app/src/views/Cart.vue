<template>
    <div>购物车</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
     created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
})
</script>

