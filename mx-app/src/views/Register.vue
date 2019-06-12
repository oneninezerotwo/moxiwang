<template>
    <div class="register">
        <div class="header">
            <a class="return">
                <img src="http://weixin.moximoxi.net/MoxiWap/img/return.png">
            </a>
            <p class="tit">注册</p>
        </div>
        <div class="content">
            <input class="num" type="tel" placeholder="请输入手机号码"
            @blur="judgePhone()" v-model="aa"
            >
            <div class="errorinfo" v-text="message" :style="{color:color}"></div>
            <div class="code">
                <input class="validCode validCodePadding" type="tel" placeholder="请输入验证码" style="display: block;"
                v-model="yzm"
                >
                <div class="codeHand after" style="left: 169px;" @click="countDown()" v-text="title"></div>
            </div>
            <div class="errorinfo"></div>
            <input class="pass1" type="password" placeholder="请输入密码"
            @blur="psw()" v-model="pswd"
            >
            <br/>
            <input class="pass2" type="password" placeholder="请再次输入密码"
             @blur="psw()"  v-model="againPsw"
            >
            <div class="errorinfo" v-text="mima" :style="{color:color}"></div>
            <a class="login" :style="{background:isok&&isok2&&isok3?background:background1}"
              @click="jumpTerm()"
            >确认</a>
            <div class="errorinfo"></div>
            <div class="agree">
                <div class="checkSty" :style="{background:img}" @click="input()">
                    <input class="checkClass" name="subBox1" type="checkbox">
                </div>
                <p>我已阅读并接受MOXI用户
                    <a href="registerprotocol.html">《注册协议》</a>
                </p>
            </div>
            <!--<p class="cooperation"><span>———————</span>&nbsp;&nbsp;合作账号登录&nbsp;&nbsp;<span>———————</span></p>-->
            <!--<div class="loginIcon">
				<a><img src="img/sina.png" /></a>
				<a><img class="qqlogin" src="img/qq.png" /></a>
				<a><img src="img/wechat.png" /></a>
				<a><img src="img/alipayIcon.png" /></a>
			</div>-->
            <p class="service">联系客服400-660-6366</p>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    // 通知底部出现
    this.$store.state.isShowMfooter = 0;
  },
  data(){
      return{
          message:'',
          mima:'',
          aa:'',
          yzm:'',
          pswd:'',
          againPsw:'',
          color:'',
          isok:false,
          isok1:false,
          isok2:false,
          isok3:false,
          title:'请填写验证',
          img:"url('http://weixin.moximoxi.net/MoxiWap/img/input.png') 0 0 /100% no-repeat",
          background:'rgb(254, 0, 0)',
          background1:'#999'
      }
  },
  methods: {
    //验证手机号
      judgePhone(){
          if(this.aa==''){
              this.message='手机号不能为空'
              this.color = 'red'
              this.isok =false
          }else{
              if(!/^1[3456789]\d{9}$/.test(this.aa)){
                  this.message = '手机号码输入有误(11位数字且以13~18开头)'
                  this.color = 'red'
                  this.isok =false
              }else{
                  if(!localStorage.getItem(this.aa)){
                      this.message = '该用户可以注册'
                      this.color = '#58bc58'
                      this.isok =true
                  }else{
                      this.message = '号码已存在'
                      this.color = 'red'
                      this.isok =false
                  }
              }
          }
      },
    //验证码验证
      countDown(){
          if(!this.isok1){
             let time = 10;
            let timer = setInterval(()=>{     
              this.title = '倒计时'+time;
              this.isok1 =false;
               time--;
              if(time==0){
                clearInterval(timer);
                this.title = '请填写验证'
                 this.yzm =parseInt(Math.random()*9000+1000);
              }
          },1000)
          
          }
      },
    //密码验证
      psw(){
        if(this.pswd==''){
          this.mima='密码不能为空'
          this.color = 'red'
           this.isok2 =false;
        }else{
          if(!/^[0-9a-zA-Z!@#$^]{6,18}$/.test(this.pswd)){
              this.mima = '密码由数字或者字母组成，长度在6-20'
              this.color = 'red'
               this.isok2 =false;
          }else{
            if(this.pswd==this.againPsw){
            this.mima = '密码正确'
            this.color = '#58bc58'
            this.isok2 =true;
            }else{
            this.mima = '密码不一致'
            this.color = 'red'
            this.isok2 =false;
            }
          
          }
        }
      },
      //协议的状态
      input(){
        if(!this.isok3){
          this.img= "url('http://weixin.moximoxi.net/MoxiWap/img/input_on.png') 0 0 /100% no-repeat"
        }else{
          this.img= "url('http://weixin.moximoxi.net/MoxiWap/img/input.png') 0 0 /100% no-repeat"
        }
        this.isok3 = !this.isok3;
      },
      //点击注册的时候把数据存到本地仓库，跳转登录页2
      jumpTerm(){
        if(this.isok&&this.isok2&&this.isok3){
          alert('注册成功')
          localStorage.setItem(this.aa,this.pswd)
          this.$router.push('/login')
        }else{
          alert('请完善信息')
        }
      }
  },
});
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.register {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 4rem;
    overflow: hidden;
    padding: 0.5rem 0;
    background-size: 100%;
    border-bottom: 0.1rem solid #ccc;
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
  }
  .content {
    width: 90%;
    padding: 5%;
    margin-top: 0.533333rem;
    input.num {
      display: block;
      width: 94%;
      /* margin-bottom: 5%; */
      border: solid 0.1rem #cdcdcd;
      padding: 5% 3%;
      color: #333;
      font-size: 1.2rem;
    }
    .errorinfo {
      width: 100%;
      height: 2.4rem;
      font-size: 1.2rem;
      color: red;
      line-height: 2.4rem;
    }
    .code {
      margin-bottom: 2%;
      overflow: hidden;
      height: 4.3rem;
      box-sizing: border-box;
      position: relative;
      .validCodePadding {
        padding-left: 0 !important;
      }
      .validCode {
        position: absolute;
        height: 3.8rem;
        left: 0;
        color: #999;
        font-size: 1.2rem;
        width: 50%;
        border: solid 0.1rem #cdcdcd;
        display: none;
        padding-left: 3%;
      }
      .codeHand {
        position: absolute;
        right: 0;
        text-align: center;
        color: white;
        font-size: 1.2rem;
        line-height: 4.3rem;
        background: black;
      }
    }
    input[type="password"] {
      display: block;
      width: 94%;
      /* margin-bottom: 5%; */
      border: solid 0.1rem #cdcdcd;
      padding: 5% 3%;
      color: #333;
      font-size: 1.2rem;
    }
    a.login {
      display: block;
      width: 94%;
      background: #999;
      padding: 4.5% 3%;
      color: #fff;
      font-size: 1.2rem;
      text-align: center;
    }
    .agree {
      line-height: 1.4rem;
      .checkSty {
        width: 1.4rem;
        height: 1.4rem;
        float: left;
        cursor: pointer;
        margin: 0rem 0.7rem 0 0;
        text-align: center;
        // background:0 0
        //   no-repeat;
        background-size: 100%;
        .checkClass {
          opacity: 0;
          cursor: pointer;
          filter: alpha(opacity=0);
        }
      }
      p {
        text-align: left;
        margin-bottom: 3rem;
        font-size: 1.2rem;
        color: #999;
      }
    }
    .service {
      font-size: 1.1rem;
      margin-bottom: 3rem;
        text-align: center;
        font-size: 1.2rem;
        color: #999;
      }
  }
}
</style>

