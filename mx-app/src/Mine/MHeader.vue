<template>
    <div class="user">
			<div class="setting">
				<img src="http://weixin.moximoxi.net/MoxiWap/img/setting.png"
                @click="skips()"/>

			</div>
			<div class="userInfo">
				<img src="http://weixin.moximoxi.net/MoxiWap/img/moxi.png"
                @click="skip()"
                />
				<p class="userName">{{this.phone}}</p>
				<p class="grades">{{this.title}}</p>
			</div>
			<p class="give">签到送摩币</p>
		</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { __values } from 'tslib';
export default Vue.extend({
    data(){
        return{
            name:'login',
            phone:localStorage.getItem('name')?localStorage.getItem('name').split(',')[0]:'',
            title:localStorage.getItem('name')?'注册用户':'',
        }
    },
    methods: {
        //点击切换路由
        skip(){
            if(this.phone){
                this.$router.push('/Mine')
            }else{
                this.$router.push({
                name:this.name
            })
            }  
          
        },
        skips(){
            if(this.phone){
                this.$router.push('/Setting')
            }else{
                this.$router.push('/Login')
            }
        }
    },
    watch: {
        
    },
})
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  padding: 5%;
  background: url(http://weixin.moximoxi.net/MoxiWap/img/bg-tu.png) 0 0
    no-repeat;
  background-size: 100% 100%;
  position: relative;
  .setting {
    width: 100%;
    overflow: hidden;
    img {
      width: 1.6rem;
      float: right;
    }
  }
  .userInfo {
    margin: 10% 0 0;
    text-align: center;
    img {
      width: 7rem;
      height: 7rem;
      border: white solid 0.1rem;
      border-radius: 50%;
      padding: 1%;
    }
    p {
      width: 100%;
      text-align: center;
      color: white;
    }
    .userName {
      font-size: 1.2rem;
      line-height: 2.4rem;
    }
    .grades {
      font-size: 1rem;
    }
  }
  .give {
    color: white;
    padding: 2% 5%;
    display: inline-block;
    background: #ff3333;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    position: absolute;
    left: 0;
    bottom: 3rem;
    font-size: 0.9rem;
  }
}
</style>

