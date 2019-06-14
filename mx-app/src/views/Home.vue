<template>
  <div class="home">
  
      <Xheader/>

      <Xnav/>
        <router-view></router-view>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Xheader from "@/components/Xheader.vue"
import Xnav from "@/components/Xnav.vue"
@Component({
  components: {
    // HelloWorld,
     Xheader,
     Xnav,
  },
   created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
  },
})
export default class Home extends Vue {
  
}

</script>
<style scoped>
.home{
      padding-top: 90px;
  }
</style>



