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
                <div class="btn">编辑</div>
            </div>
        </div>
        <div class="inShoppingCart update" proid="65286" protype="0" key="65286" from="中国现货" jpstock="0" cnstock="2" allstock="2" isxianhuo="true" style="display: block;">
            <div class="inShoppingCartList">
                <div class="open">
                    <div class="listOne">
                        <input class="checkClass" name="subBox1" type="checkbox">
                    </div>
                    <a href="details.html#productid=65286">
                        <div class="inShoppingCartCont">
                            <img src="http://images.moximoxi.com/uploads/image/201803131329131.jpg">
                            <div class="inShoppingCartTxt">
                                <p class="tit" style="display: block;">【包邮】【香港直邮】味之素/AJINOMOTO 火锅汤底 （浓醇豆乳味）8个66g</p>
                                <div class="edit" style="display: none;">
                                    <button class="cut">-</button>
                                    <input class="num" type="text">
                                    <button class="add">+</button>
                                </div>
                                <p>
                                    <span class="free">包邮</span>
                                    <span class="number" style="display: block;">X
                                        <label>2</label>
                                    </span>
                                </p>
                                <span class="price">￥
                                    <label>39</label>
                                    <s>￥159</s>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="close" style="display: none;">
                    删除
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
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



