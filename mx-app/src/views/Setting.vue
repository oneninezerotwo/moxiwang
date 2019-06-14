<template>
    <div class="settings">
        <div class="head">
            <a class="return" @click="returns()">
                <img src="http://weixin.moximoxi.net/MoxiWap/img/return.png">
            </a>
            <p class="tit">设置</p>
        </div>
        <div class="setting">
            <a class="headImg">
                <span>头像</span><img src="http://weixin.moximoxi.net/MoxiWap/img/moxi.png"></a>
            <a>
                <span>昵称</span>
                <span class="nickname">13055294468</span>
            </a>
            <a>
                <span>手机号</span>
                <span class="phonenumber">13055294468</span>
            </a>
            <a>
                <span>修改手机号</span>
                <span class="change phonenumber changephone">13055294468</span>
            </a>
            <a class="change changepassword">修改密码</a>
            <!--<a>清除本地缓存</a>-->
            <a class="service">联系客服</a>
            <!--<a>给我好评</a>-->
            <a class="quit" @click="dropOut()">退出登陆</a>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  created() {
    this.$store.state.isShowMfooter = 0;
  },
  methods: {
      returns(){
          this.$router.push('/mine')
      },
      dropOut(){
        localStorage.removeItem('name');
        alert('退出账户');
        this.$router.push('/Mine')
      }
  },
});
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  height: 5.2rem;
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
    width: 90%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #333;
    font-size: 1.4rem;
  }
}
.setting{
    margin-top: 20px;
}
.setting a {
  display: block;
  width: 100%;
  padding: 3% 5%;
  background: white url(http://weixin.moximoxi.net/MoxiWap/img/more.png) 95% center no-repeat;
  background-size: 0.7rem;
  font-size: 1.25rem;
  color: #333;
  overflow: hidden;
}

.setting a span {
  display: inline-block;
}

.setting a:nth-child(1) span:nth-child(1) {
  margin-top: 5%;
}

.setting a span:nth-child(1) {
  float: left;
  font-size: 1.25rem;
  color: #333;
}

.setting a:nth-child(4) span:nth-child(2),
.setting a:nth-child(3) span:nth-child(2),
.setting a:nth-child(2) span:nth-child(2) {
  float: right;
  font-size: 1rem;
  color: #666;
  margin-right: 5%;
}

.setting a:nth-child(1),
.setting a:nth-child(2),
.setting a:nth-child(4),
.setting a:nth-child(7) {
  margin-bottom: 2rem;
}

.setting a:nth-child(1) img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 5%;
  float: right;
}

.setting a:nth-child(3),
.setting a:nth-child(5),
.setting a:nth-child(6) {
  border-bottom: solid 0.1rem #cdcdcd;
}

.setting .quit {
  background: white;
  text-align: center;
  margin-top: 1rem;
}
</style>


