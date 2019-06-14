<template>
    <div class="total">
			<div class="inTotal">
				<div class="totalCheckAll">
					<span class="checkSty titAll">
						<input class="checkClass" id="inTotalCheckAll" type="checkbox" value="">
					</span>
					<span>全选</span>
				</div>
				<div class="allPrice">
					<p>合计：<span></span></p>
					<p>(不含运费)</p>
				</div>
				<button>结 算</button>
			</div>
		</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>

@import url('../assets/css/cart.css');
// 	.total{
//     width: 100%;
//     padding: 3% 5%;
//     position: fixed;
//     bottom: 4.8rem;
//     border-top: solid 0.1rem #ccc;
//     color: #666;
//     z-index: 99;
//     opacity: 0.8;
//     background: #f3f3f3;
//     }
//     .titOne, .listOne, .titAll {
//     width: 1.6rem;
//     height: 1.6rem;
//     float: left;
//     cursor: pointer;
//     margin: 0.7rem 0.7rem 0 0;
//     text-align: center;
//     background: url(http://weixin.moximoxi.net/MoxiWap/img/input.png) 0 0 no-repeat;
//     background-size: 100%;
// }
// 	.total .totalCheckAll {
//     width: 20%;
//     float: left;
//     font-size: 1.2rem;
// }
// .total .totalCheckAll span:nth-child(2) {
//     margin: 0.7rem 0.7rem 0 0;
//     display: inline-block;
// }
// .total .allPrice {
//     width: 50%;
//     float: left;
// }
// .total .allPrice p {
//     width: 70%;
//     text-align: right;
//     font-size: 1.1rem;
// }
// .total .allPrice p:nth-child(1) span {
//     font-size: 2rem;
//     color: #333;
// }
// .total .allPrice p {
//     width: 70%;
//     text-align: right;
//     font-size: 1.1rem;
// }
// .total button {
//     width: 30%;
//     height: 3.5rem;
//     background: #ff3333;
//     color: white;
//     font-size: 1.5rem;
//     font-family: "微软雅黑";
// 	float: right;
// 	border: none;
// }
</style>