
<template>
    <div>
        <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
                <div class="demo-carousel"><img src="../assets/lunbotu1.jpg" alt=""></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img src="../assets/lunbotu2.jpg" alt=""></div>
            </CarouselItem>

        </Carousel>

        <div class="sign">
            <div class="inSign">
                <p class="check">
                    <a href="###">
                        <img src="../assets/sign.png">
                        <span>每日签到</span>
                    </a>
                </p>
                <p>
                    <a href="###">
                        <img src="../assets/brand.png">
                        <span>品牌一览</span>
                    </a>
                </p>
                <p>
                    <a href="###">
                        <img src="../assets/shequ.png">
                        <span>代购代拍</span>
                    </a>
                </p>
                <p>
                    <a href="###">
                        <img src="../assets/share.png">
                        <span>天天分享</span>
                    </a>
                </p>
            </div>
        </div>
        <div class="middlepic"><img src="../assets/middlepic.jpg" alt=""></div>
        <div class="commodity">
            <ul class="inCommodity">
                <li v-for="(i,index) in moxishop" :key="index" productid="i.id" class="inCommodityList">
                    <a href="###"><img :src = i.ProImg>
                    <p class="CommodityState">
                        <span class="CommodityLabel" v-text="i.ProductFrom"></span>
                        <!-- <span class="CommodityLabelAdd" > </span> -->
                      </p>  
                        <p class="CommodityName" v-text="i.ProName"></p>
                        <p class="iCommodityPrice" >
                              <span class="CommodityPrice" v-text="'￥'+i.ProductOldPic"></span>&nbsp;
                              <s  v-text="'￥'+i.ReferPrice"></s>
                        </p>
                    </a>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
  name: "recommend",
  data() {
    return {
      value2: 0,
      moxishop:[]
    };
  },

  created(){
      this.shopList(()=>{});
  },

  methods:{
      
      async shopList(){
        this.$store.state.loading +=1
          const data = await this.$axios(
              "https://www.easy-mock.com/mock/5cff632478b24c0691f353a6/moxishoplist/moxishop"
          );
    //    console.log(data.data);
       const shoplist = data.data;
        // console.log(shoplist);
       this.moxishop = [...shoplist]
        this.$store.state.loading -=1
      }
  }

  
};
</script>
<style scoped>
.ivu-carousel {
  width: 100%;
  height: 180px;
}
.ivu-carousel img {
  width: 100%;
  height: 100%;
}
.sign {
  width: 100%;
  padding: 1% 5%;
  height: 6rem;
  overflow: hidden;
  /* position: relative; */
}
.sign .inSign p {
  width: 19%;
  margin: 0 2%;
  display: inline-block;
}
.inSign {
  margin: 0 auto;
  width: 90%;
}

a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.sign .inSign p img {
  width: 2.6rem;
  margin-top: 0.5rem;
  margin-left: 0.8rem;
  margin-right: 1rem;
}
img {
  border: none;
}
.sign .inSign p span {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #333;
}
a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
.middlepic img {
  width: 100%;
  height: 10rem;
}
.commodity {
    width: 94%;
    margin: 0 auto;
    color: #333;
}
.commodity .inCommodity {
    width: 100%;
}

ul li {
    list-style: none;
}
.commodity .inCommodity li {
    width: 50%;
    padding: 3% 0;
    float: left;
}
.commodity .inCommodity li a {
    text-decoration: none;
    color: #1f2022;
    font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    cursor: pointer;
}
.commodity .inCommodity li img {
    margin: 0 auto;
    height: 10rem;
    display: block;
}

img {
    border: none;
}
.CommodityState{
    text-align: center;
}
.commodity .inCommodity li .CommodityLabel {
    border-left: solid 0.1rem #333;
    border-right: solid 0.1rem #333;
    padding: 0 6%;
    line-height: 1.0rem;
    font-size: 1.0rem;
    overflow: hidden;
    
}
.commodity .inCommodity li .CommodityLabelAdd {
    /* border-right: solid 0.1rem #333; */
    /* padding: 0 6%; */
    line-height: 1.0rem;
    font-size: 1.0rem;
    overflow: hidden;
}
.commodity .inCommodity li .CommodityName {
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.iCommodityPrice{
    text-align: center;
    font-size: 1.1rem;
}
.commodity .inCommodity li .CommodityPrice {
    color: #ff3333;
    overflow: hidden;
}
.commodity .inCommodity li .CommodityPrice s {
    color: #666;
    padding-left: 5%;
    font-size: 1.0rem;
}
</style>


