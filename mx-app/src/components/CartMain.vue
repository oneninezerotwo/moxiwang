<template>
    <div id="app1">
<div class="cartMain">
        <div class="xianhuo">
            <div class="checkAll">
                <div class="checkAllSty">
                    <span class="titOne" 
                    @click="checkAll" 
                    :class="{'on_check':this.$store.state.istrue == true}">
                        <input class="checkClass" id="inCheckAll_1" type="checkbox" value="">
                    </span>
                    <span class="profrom">中国现货</span>
                </div>
                <div class="btn" 
                @click="cartQh()" 
                v-text="aa==true?'完成':'编辑'"></div>
            </div>
        </div>
        <div>
            <div class="inShoppingCart update" proid="65286" protype="0" from="中国现货" jpstock="0" cnstock="2" allstock="2" isxianhuo="true" style="display: block;" 
            v-for="(item,index) in cartList" 
            :key="index">
                <div class="inShoppingCartList">
                    <div class="open">
                        <div class="listOne" :class="{'on_check':isok == item.actvie}" data-mmp=ture @click="test(index)">
                            <input class="checkClass" name="subBox1" type="checkbox">
                        </div>
                        <a href="###">
                            <div class="inShoppingCartCont">
                                <img :src="item.proImg">
                                <div class="inShoppingCartTxt">
                                    <p class="tit" v-show="!aa">{{item.proName}}</p>
                                    <div class="edit" v-show="aa">
                                        <button class="cut" @click="jian(index)">-</button>
                                        <input class="num" type="text" :value="item.proCount">
                                        <button class="add" @click="jia(index)">+</button>
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
                    <div class="close" v-show="aa"
                   @click="shangchu(index)"
                    >
                        删除
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="total">
			<div class="inTotal">
				<div class="totalCheckAll">
					<span class="checkSty titAll" :class="{'on_check':this.$store.state.istrue == true}">
						<input class="checkClass" id="inTotalCheckAll" type="checkbox" value="" @click="test1()">
					</span>
					<span>全选</span>
				</div>
				<div class="allPrice">
					<p>合计：<span v-text="'￥'+zongji"></span></p>
					<p>(不含运费)</p>
				</div>
				<button>结 算</button>
			</div>
		</div>
    </div>
    
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isok: false,
      cartList: [],
      aa: 0,
      img: "http://weixin.moximoxi.net/MoxiWap/img/input_on.png",
      img2: "http://weixin.moximoxi.net/MoxiWap/img/input.png",
      istrue:this.$store.state.istrue ,
      zongji:'',
    };
  },
   async created() {
    this.$store.state.loading += 1;
    const data = await this.$axios(
      "http://api.moximoxi.net/api/BuyCartCache/SearchMyBuyCart?userID=268362"
    );
    console.log(data);
    this.cartList = data.data.ReturnObjects.result[0].MyBuyCartJsonList;
    // console.log(this.cartList);
    this.$store.state.loading -= 1;
    this.cartList.forEach(e=>this.$set(e,'actvie',true))
    
  },
  methods: {
      jian(index){
          this.cartList[index].proCount--;
      },
      jia(index){
          this.cartList[index].proCount++;
      },
    cartQh() {
      if (this.aa == 0) {
        this.aa++;
      } else {
        this.aa--;
      }
    },
    //内容部分
    test(index){
        this.cartList[index].actvie = !this.cartList[index].actvie;
        this.hanshu()
    },
    hanshu(){
        let arr=[];
        let zj = 0;
        

        for(let item in this.cartList){
            // console.log(this.cartList[item]);
            arr.push(this.cartList[item].actvie);
           if(!this.cartList[item].actvie){
                zj += this.cartList[item].proCount * this.cartList[item].proUnitPrice
                console.log(this.cartList[item].proCount)
            }
            
        };
         
        this.zongji = zj;
        // console.log(arr);
        // console.log(arr.indexOf(false))
       if(arr.indexOf(true)!=-1){
           this.$store.state.istrue   = false;          
       }else{
           this.$store.state.istrue   = true;
       }

    },
    //全选
    checkAll(){
        this.$store.state.istrue   = !this.$store.state.istrue  ;
        for(let i=0;i<this.cartList.length;i++){
            this.cartList[i].actvie = !this.$store.state.istrue  
        };
         this.hanshu()
    },
    test1(){
         this.$store.state.istrue   = !this.$store.state.istrue  ;
        for(let i=0;i<this.cartList.length;i++){
            this.cartList[i].actvie = !this.$store.state.istrue  
        };
         this.hanshu()
    },
    //删除内容
    shangchu(index){
        this.cartList.splice(index,1)
        confirm('你确定要删除这个商品吗')
    }
  },
 
});
</script>

<style lang="scss" scoped>
@import url('../assets/css/cart.css');
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



