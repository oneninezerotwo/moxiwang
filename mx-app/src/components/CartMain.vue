<template>
    <div class="cartMain">
        <div class="xianhuo">
            <div class="checkAll">
                <div class="checkAllSty">
                    <span class="titOne">
                        <input class="checkClass" id="inCheckAll_1" type="checkbox" value="">
                    </span>
                    <span class="profrom">中国现货</span>
                </div>
                <div class="btn"
                @click="cartQh()" v-text="aa==true?'完成':'编辑'"
                ></div>
            </div>
        </div>
        <div>
            <div class="inShoppingCart update" proid="65286" protype="0" from="中国现货" jpstock="0" cnstock="2" allstock="2" isxianhuo="true" style="display: block;" 
            v-for="(item,index) in cartList" :key="index"
            >
                <div class="inShoppingCartList">
                    <div class="open">
                        <div class="listOne">
                            <input class="checkClass" name="subBox1" type="checkbox">
                        </div>
                        <a href="###">
                            <div class="inShoppingCartCont">
                                <img :src="item.proImg">
                                <div class="inShoppingCartTxt">
                                    <p class="tit" v-show="!aa">{{item.proName}}</p>
                                    <div class="edit" v-show="aa">
                                        <button class="cut">-</button>
                                        <input class="num" type="text">
                                        <button class="add">+</button>
                                    </div>
                                    <p>
                                        <span class="free">包邮</span>
                                        <span class="number" v-show="!aa">X
                                            <label>{{item.proCount}}</label>
                                        </span>
                                    </p>
                                    <span class="price">￥
                                        <label>{{item.proUnitPrice}}</label>
                                        <s>￥{{item.referPrice}}</s>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="close" v-show="aa">
                        删除
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      cartList: [],
      aa:0,
      img:'http://weixin.moximoxi.net/MoxiWap/img/input_on.png',
      img2:'http://weixin.moximoxi.net/MoxiWap/img/input.png'
    };
  },
  methods: {
      cartQh(){
          if(this.aa==0){
              this.aa++;
          }else{
              this.aa--;
          }
      }
  },
  async created() {
    this.$store.state.loading += 1;
    const data = await this.$axios(
      "http://api.moximoxi.net/api/BuyCartCache/SearchMyBuyCart?userID=268362"
    );
    console.log(data);
    this.cartList = data.data.ReturnObjects.result[0].MyBuyCartJsonList;
    console.log(this.cartList);
    this.$store.state.loading -= 1;
  }
});
</script>

<style lang="scss" scoped>
.cartMain {
  margin-top: 5.2rem;
  width: 100%;
  overflow: auto;
  .xianhuo {
    border-bottom: 1rem;
    .checkAll {
      width: 100%;
      padding: 0 5%;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.1rem;
      color: #333;
      border-bottom: 0.1rem solid #ccc;
      .checkAllSty {
        float: left;
        .titOne,
        .listOne,
        .titAll {
          width: 1.6rem;
          height: 1.6rem;
          float: left;
          cursor: pointer;
          margin: 0.7rem 0.7rem 0 0;
          text-align: center;
          background: url(http://weixin.moximoxi.net/MoxiWap/img/input.png) 0 0
            no-repeat;
          background-size: 100%;
          .checkClass {
            opacity: 0;
            cursor: pointer;
            filter: alpha(opacity=0);
          }
        }
      }

      .btn {
        float: right;
        background: transparent;
        font-size: 1.1rem;
        height: 3rem;
        line-height: 3rem;
        color: #333;
        width: 5rem;
      }
    }
  }
}
</style>



