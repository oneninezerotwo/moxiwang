<template>
    <div class="mine">
        <MHeader/>
        <MOrder/>
        <MOrder>代购</MOrder>
        <m-classify/>
    </div>
</template>
<script lang="ts">
import Vue from "vue"
import MHeader from "@/Mine/MHeader.vue"
import MOrder from "@/Mine/MOrder.vue"
import MClassify from "@/Mine/MClassify.vue"
export default Vue.extend({
  components: {
    MHeader,
    MOrder,
    MClassify,
  },
   created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
});
</script>
