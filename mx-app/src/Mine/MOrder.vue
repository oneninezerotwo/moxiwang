<template>
    <div class="order">
			<div class="myOrder">
				<a class="my"><img src="http://weixin.moximoxi.net/MoxiWap/img/order.png"><span>我的<slot></slot>订单</span></a>
				<a class="all">查看全部订单<img src="http://weixin.moximoxi.net/MoxiWap/img/more.png"></a>
			</div>
			<ul class="moreOrder">
				<li v-for="(item,index) in arr" :key="index">
					<a>
						<div class="moreOrderImg">
							<img :src="item.img">
							
						</div>
						<p>{{item.title}}</p>
					</a>
				</li>	
							
				<!--<li>
					<a href="tel:4006606366">
						<div class="moreOrderImg">
							<img src="img/kefu.png"/>
							<img src="img/order5.png"/>
							<i>…</i>
						</div>
						<p>客服</p>
						<p>售后/退货</p>
					</a>
				</li>							-->
			</ul>
		</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            arr:[
                {
                    title:'待付款',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/order1.png'
            },
            {
                    title:'待发货',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/order2.png'
            },
            {
                    title:'待收货',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/order3.png'
            },
            {
                    title:'待评价',
                    img:'http://weixin.moximoxi.net/MoxiWap/img/order4.png'
            },
            ]
        }
    }
})
</script>
<style lang="scss" scoped>
.order {
    width: 100%;
    background: white;
    .myOrder {
    width: 90%;
    padding: 0% 5%;
    overflow: hidden;
    height: 4.0rem;
    line-height: 4.0rem;
    border-bottom: solid 0.1rem #ddd;
    a{
        display: inline-block;
    }
    a.my {
    width: 50%;
    float: left;
    font-size: 1.2rem;
    color: #333;
    img {
    width: 1.0rem;
    margin-right: 5%;
    padding-top: 1%;
}
}
a.all {
    width: 50%;
    float: right;
    font-size: 1.0rem;
    color: #666;
    text-align: right;
    img {
    width: 0.6rem;
    margin-left: 5%;
    padding-top: 1%;
}
}
}
.moreOrder {
    width: 90%;
    padding: 2% 5%;
    margin-bottom: 1.0rem;
    display: -webkit-flex;
    display: flex;
     li {
    width: 18.5%;
    display: inline-block;
    text-align: center;
    background: white;
    flex: auto;
    -webkit-flex: auto;
    a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
     .moreOrderImg {
    position: relative;
     img {
    width: 2.2rem;
    margin: 5% auto;
}
}
}
p {
    font-size: 1.1rem;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
}
}
}
</style>

