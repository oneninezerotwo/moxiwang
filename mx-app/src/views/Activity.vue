<template>
  <div>
    <header>
      <p class="tit">活动</p>
      <a href="../index.html"><img class="backindex" src="../../public/img/logo.png"></a>
    </header>
    <div class="activity">
      <ul class="activitylist">
        <li v-for="(i,index) in activelist" :key="index">
          <div class="activityMain">
            <a href="###"><img class="banner" :src="i.AcitvityImageUrl"></a>
            <div class="activityTxt">
              <div class="activityTxtLeft">
                <p v-text="i.ActivityName"></p>
                <p>活动时间：03.16 - 05.29</p>
              </div>
              <div activityid="255" class="activityTxtRight"><img src="../../public/img/ShareIcon.png">
                <span>分享</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
       <BackTop :height="100" :bottom="200">
        <div class="top"><img src="../../public/img/goTop.png" alt=""></div>
      </BackTop>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top{
        padding: 10px;
        /* background: rgba(0, 153, 229, .7); */
        color: #fff;
        text-align: center;
        border-radius: 2px;
        width: 6rem !important;
        height: 6rem !important;
}
.top img{
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  top: 0;
  z-index: 999;
}
header p {
  float: left;
  display: inline-block;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.activity {
  margin-top: 5.1rem;
}
ul li {
  list-style: none;
}
.activityList li {
  width: 100%;
  text-align: center;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.activityMain .banner {
  width: 100%;
}

.banner {
  height: 11rem;
}
img {
  border: none;
}
.activityList li .activityTxt {
  width: 100%;
  background: white;
  text-align: left;
  overflow: hidden;
}
.activityTxtLeft {
  width: 80%;
  float: left;
  color: #333;
}
.activityTxtLeft p:nth-child(1) {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  float: left;
  font-size: 1.6rem;
  border-bottom: solid 0.1rem #ccc;
}
.activityTxtLeft p {
  padding-left: 5%;
}
.activityTxtLeft p:nth-child(2) {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  float: left;
  font-size: 1.2rem;
}
.activityTxtRight {
  width: 15%;
  height: 6.5rem;
  display: inline-block;
  float: right;
  text-align: center;
  font-size: 0.9rem;
}
.activityTxtRight img {
  margin: 0.4rem auto 0.2rem;
  width: 1.5rem;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
}
.activityTxtRight span {
  position: relative;
  top: 1rem;
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 1;
    this.activeList(() => {});
  },
  data() {
    return {
      activelist: []
    };
  },

  methods: {
    async activeList() {
      const data = await this.$axios(
        "http://api.moximoxi.net/api/ActivityList/ActivityList?startIndex=1&endIndex=20"
      );
      console.log(data.data.ReturnObjects.result);
      console.log(data.data.ReturnObjects.result[0].AcitvityBegin);
      let acchange = data.data.ReturnObjects.result;
      let accchange = acchange[0];
      console.log(accchange);

      const activeshoplist = data.data.ReturnObjects.result;
      this.activelist = [...activeshoplist];
    }
  }
});
</script>