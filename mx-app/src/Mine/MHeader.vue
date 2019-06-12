<template>
    <div class="user">
			<div class="setting">
				<img src="http://weixin.moximoxi.net/MoxiWap/img/setting.png"/>
			</div>
			<div class="userInfo">
				<img src="http://weixin.moximoxi.net/MoxiWap/img/moxi.png"
                @click="skip()"
                />
				<p class="userName"></p>
				<p class="grades"></p>
			</div>
			<p class="give">签到送摩币</p>
		</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            name:'login'
        }
    },
    methods: {
        skip(){
            this.$router.push({
                name:this.name
            })
        }
    },
})
</script>

<style lang="scss" scoped>
    .user {
    width: 90%;
    padding: 5%;
    background: url(http://weixin.moximoxi.net/MoxiWap/img/bg-tu.png) 0 0 no-repeat;
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
    font-size: 1.0rem;
}
}
.give {
    color: white;
    padding: 2% 5%;
    display: inline-block;
    background: #FF3333;
    border-top-right-radius: 2.0rem;
    border-bottom-right-radius: 2.0rem;
    position: absolute;
    left: 0;
    bottom: 3.0rem;
    font-size: 0.9rem;
}
}
</style>

