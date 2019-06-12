<template>
  <div class="home">
    <div>首页</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


@Component({
  components: {
    // HelloWorld,
  },
   created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
})
export default class Home extends Vue {}
</script>
