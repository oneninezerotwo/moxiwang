<template>
  <div>
    <nav class="nav swiper-container-horizontal">
      <ul class="swiper-wrapper nav-header">
        <!-- <li class="swiper-slide tabNavActive swiper-slide-active" style="margin-right: 20px;" :class="{active:state}" v-on:click="firstchange()">推荐</li> -->
        <li v-for="(i,index) in navlist" :key="index" id="i.id" class="swiper-slide swiper-slide-next" style="margin-right: 20px;">
          <a href="###" v-text="i.actName" v-on:click="change(i,index)" :class="{active:num===index}"></a>
        </li>
        <!-- <li id="246" class="swiper-slide" style="margin-right: 20px;">
                    <a href="###">中国现货</a>
                </li>
                <li id="247" class="swiper-slide" style="margin-right: 20px;">
                    <a href="###">日本现货</a>
                </li>
                <li id="257" class="swiper-slide" style="margin-right: 20px;">
                    <a href="###">香港直邮</a>
                </li> -->
      </ul>
    </nav>
    <!-- <router-view></router-view> -->
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      navlist: [],
      num: 0
    };
  },
  created() {
    this.NavList(() => {});
  },
  name: "Xnav",
  methods: {
    async NavList() {
      this.$store.state.loading += 1;
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cff5b0447c99604b6b18565/example/moxi123"
      );
      const navlist = data.data;
      console.log(navlist);
      //  console.log(navlist.name);
      this.navlist = [...navlist];
      this.$store.state.loading -= 1;
    },
    change(i, index) {
      this.num = index;
      this.$router.push({ path: i.name });
      console.log(i.name);
    }
  }
};
</script>
<style scoped>
nav {
  background: white;
  position: fixed;
  top: 48px;
  z-index: 100;
  width: 100%;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
}

.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}
ul li {
  list-style: none;
}
.nav-header li:nth-child(1) {
  margin-left: 6%;
}
.nav-header .swiper-slide {
  background: #fff;
  text-align: center;
  color: #666;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  font-size: 1.25rem;
  line-height: 3rem;
  position: relative;
}
.nav-header .swiper-slide {
  background: #fff;
  text-align: center;
  color: #666;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  font-size: 1.25rem;
  line-height: 3rem;
  position: relative;
}
.active {
  border-bottom: 2px solid black;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
</style>

