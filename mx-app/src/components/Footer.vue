<template>
    <footer v-if="isShowMfooter">
        <ul>
            <li v-for="(item,index) in footerNav" 
            :key="index"
            @click="cut(index)">
                <img :src="index==NavIndex?item.url2:item.url" alt="" />
                <span v-text="item.title"  :class="{active:index==NavIndex}"></span>
            </li>
        </ul>
    </footer>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      footerNav: [
        {
          title: "首页",
          name: "home",
          url: "http://weixin.moximoxi.net/MoxiWap/img/index.png",
          url2:"http://weixin.moximoxi.net/MoxiWap/img/indexAct.png"
        },
        {
          title: "分类",
          name: "classify",
          url: "http://weixin.moximoxi.net/MoxiWap/img/classify.png",
          url2:"http://weixin.moximoxi.net/MoxiWap/img/classifyAct.png",
        },
        {
          title: "活动",
          name: "activity",
          url: "http://weixin.moximoxi.net/MoxiWap/img/activity.png",
          url2:"http://weixin.moximoxi.net/MoxiWap/img/activityAct.png",
        },
        {
          title: "购物车",
          name: "cart",
          url: "http://weixin.moximoxi.net/MoxiWap/img/shoppingCart.png",
          url2:"http://weixin.moximoxi.net/MoxiWap/img/shoppingCartAct.png",
        },
        {
          title: "我的",
          name: "mine",
          url: "http://weixin.moximoxi.net/MoxiWap/img/userCenter.png",
          url2:"http://weixin.moximoxi.net/MoxiWap/img/userCenterAct.png",
        }
      ],
      NavIndex: 0
    };
  },
  methods:{
      cut(index){
          this.NavIndex=index;
          this.$router.push({
              name:this.footerNav[index].name
          })
      }
  },
  computed:{
    //从仓库获取值
    isShowMfooter(){
      return this.$store.state.isShowMfooter;
    }
  },
});
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  ul {
    width:100%;
    padding: 0% 5%;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: solid 0.1rem #d1d1d1;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1% 0 1% 0;
      img {
        height: 2.5rem;
        margin: 0 auto;
      }
      span {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 0.9rem;
        color: #666;
        line-height: 1.8rem;
      }
    }
  }
  .active {
    color: red;
  }
}
</style>


