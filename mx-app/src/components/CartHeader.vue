<template>
    <header>
			<a class="return"><img src="http://weixin.moximoxi.net/MoxiWap/img/return.png"></a>
			<p class="tit">购物车</p>
		</header>
</template>
<style lang="scss" scoped>
    header {
    width: 100%;
    height: 4.0rem;
    overflow: hidden;
    padding: 0.5rem 0;
    background: white;
    border-bottom: 0.1rem solid #ccc;
    position: fixed;
    z-index: 20;
    top: 0;
}
header .return {
    float: left;
    width: 10%;
    height: 4.0rem;
    text-align: center;
}
header .return img {
    width: 0.8rem;
    height: 1.6rem;
    margin: 1.2rem auto;
}
header p {
    float: left;
    width: 40%;
    height: 4.0rem;
    line-height: 4.0rem;
    text-align: center;
    color: #333;
    font-size: 1.4rem;
    margin: 0 20%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>

