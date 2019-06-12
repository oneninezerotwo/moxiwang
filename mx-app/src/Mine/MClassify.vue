<template>
    <ul class="classify">
        <li class="borRight"
        v-for="(item,index) in arr " :key="index"
        >
            <a class="wallet">
                <img :src="item.img">
                <p>{{item.title}}</p>
            </a>
        </li>
        <li class="borTop"></li>
        <li class="borTop"></li>
    </ul>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            arr:[
                {
                    title:'我的钱包',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/wallet.png'
            },
            {
                    title:'优惠券领取',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/%E4%BC%98%E6%83%A0%E5%88%B8.png'
            },
            {
                    title:'我的收藏',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/Collection.png'
            },
            {
                    title:'我的任务',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/task.png'
            },
            {
                    title:'社区管理',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/help.png'
            },
            {
                    title:'收货地址',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/address.png'
            },
            {
                    title:'意见反馈',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/opinion.png'
            },
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
.classify {
    margin-bottom: 70px;
  width: 100%;
  overflow: hidden;
  background: white;
  li {
    width: 33%;
    display: inline-block;
    text-align: center;
    padding: 10% 0;
    /* margin: auto; */
    a {
      text-decoration: none;
      color: #1f2022;
      font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
      cursor: pointer;
      img {
        width: 3.3rem;
        margin: 0 auto 10%;
      }
      p {
        font-size: 1.2rem;
        margin: 0 auto 10%;
        color: #666;
      }
    }
  }
  li:nth-child(4),
  li:nth-child(5),
  li:nth-child(6){
      border-bottom: solid 0.1rem #ddd;
  }
  li:nth-child(7){
      border-top: none;
  }

  .borRight {
    border-right: solid 0.1rem #ddd;
     border-top: solid 0.1rem #ddd;
  }
  
}
</style>

