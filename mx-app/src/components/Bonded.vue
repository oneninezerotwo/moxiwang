<template>
    <div>
        <div class="img"><img src="../assets/bonded.jpg" alt=""></div>
   
         <div class="secondNav">
					<ul><li class="SecActive">保税区闪送</li></ul>
		</div>

       <div class="commodity">
            <ul class="inCommodity">
                <li v-for="(i,index) in bondedshop" :key="index" productid="i.id" class="inCommodityList"
                    @click="details(i.ProductId,i.ProImg)"
                >
                    <a href="###"><img :src = i.ProImg>
                    <p class="CommodityState">
                        <span class="CommodityLabel" v-text="i.ProductFrom"></span>&nbsp;
                        <span class="CommodityLabelAdd" v-text="i.ProductNice"> </span>
                      </p>  
                        <p class="CommodityName" v-text="i.ProName"></p>
                        <p class="iCommodityPrice" >
                              <span class="CommodityPrice" v-text="'￥'+i.ProUnitPrice"></span>&nbsp;
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
  name: "bonded",
  data(){
      return{
          bondedshop:[]
      };
  },
  created(){
      this.shopList(()=>{});

  },

  methods:{
      async shopList(){
           this.$store.state.loading +=1
          const data = await this.$axios(
              "https://www.easy-mock.com/mock/5cff632478b24c0691f353a6/moxishoplist/moxibonded"
          );
          const bondedshoplist = data.data;
          console.log(data.data);
          this.bondedshop = [...bondedshoplist];
           this.$store.state.loading -=1
      },
        details(goodId,ProImg){
        //   alert(123)
          let id = goodId;
          let img = ProImg
          this.$router.push({name:'details',params:{id,img}})
      }
  }

};
</script>


<style scoped>
.img {
  width: 100%;
  height: 100px;
}
.img img {
  width: 100%;
  height: 100%;
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
.secondNav ul {
    display: flex;
    border-bottom: 1px solid #CCCCCC;
}
ul li {
    list-style: none;
}
.secondNav ul li {
    flex: auto;
    font-size: 1.10rem;
    padding: 1.1rem 0;
    text-align: center;
    /* margin: 0 4rem; */
}
.SecActive {
    background: url(../assets/show.png) no-repeat bottom;
    color: red;
}
</style>


