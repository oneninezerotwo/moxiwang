<template>
    <div>
        <header>
            <a class="return"  href="javascript:history.go(-2)"><img src="../assets/return.png"></a>
            <p class="tit" v-text="Products[0].proName"></p>
            <a href="###" class="shoppingCart"
            @click = "shoppingCart()"
            ><img src="../assets/gouwuche.png"></a>
        </header>
        <div class="swiper-slide">
            <img :src="img">
        </div>
        <div class="main" protype="0" jpstock="0" cnstock="1" allstock="979" profrom="香港直邮">
            <h2 v-text="Products[0].proName"></h2>
            <div class="ProductSimple" style="display: none;">
                <div class="ProductSimpleName">测试：</div>
            </div>
            <div class="price">
                <p>
                    <span class="brand">品牌：
                        <label v-text="Products[0].Brand"></label>
                    </span>
                    <span class="sales">销量：
                        <label v-text="Products[0].saleCount"></label>
                    </span>
                </p>
                <p>
                    <span class="place">产地：
                        <label v-text="Products[0].ProductFrom"></label>
                    </span>
                    <span class="allnum">库存：
                        <label v-text="Products[0].proJpUnitPrice"></label>
                    </span>
                </p>
                <p id="price">￥
                    <label v-text="Products[0].proUnitPrice"></label> &nbsp;
                    <s v-text="'￥'+Products[0].referPrice"></s>
                </p>
            </div>
            <div class="comment">
                <div class="commentImg">
                    <img src="../assets/niu.png">
                </div>
                <div class="commentCont">
                    <h3>么么酱点评</h3>
                    <p v-text="Products[0].Tips"></p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "details",

  data() {
    return {
      Products: [],
      img:''
    };
  },

  async created() {
    this.$store.state.isShowMfooter = false;
    this.$store.state.loading += 1;
    let massage = this.$route.params;
    let id = massage.id;
    console.log(id);
   this.img = massage.img; 
    let product = await this.$axios(
      "http://api.moximoxi.net/API/Product/ProductDetail?proId="+id
    );
    // console.log(product);
    // console.log(product.data.ReturnObjects.result[0].ProductJsons);
    let products = product.data.ReturnObjects.result[0].ProductJsons;
    this.Products = [...products];
    console.log(this.Products);
    this.$store.state.loading -= 1;
  },

  methods: {
    shoppingCart(){
        this.$store.state.footerchange = true;
        this.$router.push('/cart');
    }
  }
};
</script>
<style scoped>
html {
  background: #f3f3f3;
}

body,
html {
  overflow-x: hidden;
  /* height: 100%; */
  background: #f3f3f3 !important;
}
html {
  font-size: 62.5% !important;
}
* {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  height: 5rem !important;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  z-index: 10;
  top: 0;
}
header .return {
  float: left;
  display: inline-block;
  width: 10%;
  height: 4rem;
  text-align: center;
}
header .return img {
  width: 0.8rem;
  height: 1.6rem;
  margin: 1.2rem auto;
}
header p {
  float: left;
  display: inline-block;
  width: 55%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  color: #333;
  font-size: 1.4rem;
  margin: 0 10%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
header .shoppingCart {
  float: left;
  display: inline-block;
  width: 15%;
  height: 4rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
header .shoppingCart img {
  width: 2rem;
  height: 1.6rem;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  top: 5rem;
  height: 30rem !important;
  background: #f3f3f3;
}
.swiper-slide img {
  /* display: block; */
  margin: 0 auto;
  height: 30rem;
  width: 100%;
}

img {
  border: none;
}
.main {
  width: 100%;
  /* margin: 2% 5%; */
  background: #f3f3f3;
  margin-top: 5rem;
}
.main h2 {
  color: #333;
  font-weight: normal;
  font-size: 1.4rem;
  border-bottom: solid 0.1rem #ccc;
  padding-bottom: 1%;
  line-height: 2rem;
}

h2 {
  font-size: 100%;
  font-family: Microsoft YaHei;
}
.main .price {
  width: 100%;
  padding: 2% 0;
  border-bottom: solid #ccc 0.1rem;
  overflow: hidden;
}
.main .price p {
  width: 49%;
  display: inline-block;
  color: #666;
  font-size: 1rem;
  float: left;
  margin-bottom: 2rem !important;
}
.main .price p span {
  width: 80%;
  display: inline-block;
  overflow: hidden;
  line-height: 2rem;
}
label {
  cursor: default;
}
.main .price p {
  width: 49%;
  display: inline-block;
  color: #666;
  font-size: 1rem;
  float: left;
}
.main .price p span {
  width: 80%;
  display: inline-block;
  overflow: hidden;
}

.main .price p {
  width: 49%;
  display: inline-block;
  color: #666;
  font-size: 1rem;
  float: left;
}

label {
  cursor: default;
}
.main .price p span {
  width: 80%;
  display: inline-block;
  overflow: hidden;
}
.main .price p span {
  width: 80%;
  display: inline-block;
  overflow: hidden;
}
.main .price p:nth-child(3) {
  color: #ff3333;
  font-size: 1.2rem;
}
.main .price p:nth-child(3) s {
  color: #666;
  font-size: 0.9rem;
}
.main .comment {
    width: 100%;
    padding: 5% 0;
    border-bottom: solid #ccc 0.1rem;
    overflow: hidden;
}
.main .comment .commentImg {
    width: 20%;
    float: left;
}
.main .comment .commentImg img {
    width: 100%;
    /* border-radius: 50%; */
}
.main .comment .commentCont {
    width: 77%;
    float: right;
}
.main .comment .commentCont h3 {
    color: #333;
    font-weight: normal;
    font-size: 1.2rem;
    padding-left: 3.5rem;
    line-height: 2.5rem;
}
.main .comment .commentCont p {
    color: #666;
    font-size: 1.0rem;
}
</style>


