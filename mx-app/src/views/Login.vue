<template>
  <div class="login">
    <header>
      <a class="return" @click="returns()">
        <img src="http://weixin.moximoxi.net/MoxiWap/img/return.png">
        </a>
      <p class="tit">登录</p>
      <a href="../index.html"><img class="backindex" src="http://weixin.moximoxi.net/MoxiWap/img/logo.png"></a>
    </header>
    <img src="img/upload.gif" class="loading">
    <div class="marBott"></div>
    <div class="main">
      <input type="text" class="username" placeholder="请输入手机号码/邮箱" v-model="aaa">
      <div class="eyes">
        <input :type="a" class="input_text_password mima_dd " placeholder="请输入密码" v-model="bb">
        <input type="text" class="input_text_password mima_wz" style="display:none;" placeholder="请输入密码">
        <a class="eyes_box " data-show="1" href="javasctipt:;" @click="aa()">
          <img :src="img">
        </a>
      </div>

      <a class="login" @click="denglu()">登录</a>
      <p>
        <a class="Pwd">忘记密码</a>
        <a href="###" @click="cut()">注册用户</a>
      </p>
      <p class="cooperation">
        <span>———————</span>&nbsp;&nbsp;合作账号登录&nbsp;&nbsp;
        <span>———————</span>
      </p>
      <div class="loginIcon">
        <!--<a href=""><img src="img/sina.png" /></a>-->
        <a class="qqlogin">
          <img src="http://weixin.moximoxi.net/MoxiWap/img/qq.png" style="width:72px;height:72px">
        </a>
        <!--<a class="qqlogin"><img src="img/qq.png" /></a>-->
        <a class="wechatlogin"><img src="http://weixin.moximoxi.net/MoxiWap/img/wechat.png" style="width:72px;height:72px"></a>
        <!--<a><img src="img/alipayIcon.png" /></a>-->
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      a: "password",
      isok: true,
      img: "http://weixin.moximoxi.net/MoxiWap/img/guan.png",
      name: "register",
      aaa:'',
      bb:'',
      qiege:localStorage.getItem('name')
    };
  },
  methods: {
    aa() {
      if (this.isok) {
        this.a = "text";
        this.img = "http://weixin.moximoxi.net/MoxiWap/img/kai.jpg";
      } else {
        this.a = "password";
        this.img = "http://weixin.moximoxi.net/MoxiWap/img/guan.png";
      }
      this.isok = !this.isok;
    },
    cut() {
      this.$router.push({
        name: this.name
      });
    },
    denglu(){
      let dd='';
      if(this.qiege){
             dd = this.qiege.split(',')
      }
     
      console.log(dd)
      if(this.aaa==""||this.bb==""){
        alert('账号或密码不能为空')
      }else{
        if(this.aaa==dd[0]&&this.bb==dd[1]){
            alert('登录成功')
            this.$router.push('/Mine')
      }else{
        alert('登录失败')
      }
      }
 
     
    },
    returns(){
      this.$router.push('/Mine')
    }
  },
  created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 0;
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/css/login.css";
header {
  width: 100%;
  height: 5.2rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background-size: 100%;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
  .return {
    float: left;
    width: 10%;
    height: 4rem;
    text-align: center;
    img {
      width: 0.8rem;
      height: 1.6rem;
      margin: 1.2rem auto;
    }
  }
  p {
    float: left;
    width: 80%;
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
    .backindex {
      position: absolute;
      right: 1rem;
      top: 1rem;
      height: 3rem;
    }
  }
}
</style>


