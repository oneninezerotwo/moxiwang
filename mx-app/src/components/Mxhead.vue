<template>
  <div class="head">
    <div class="search">
      <p>
        <img onclick="location.href='../index.html'" src="../img/logo.png">
      </p>
      <a href style="text-decoration:none"></a>
      <p></p>
    </div>
    <div class="classifyHead">
      <div class="inClassify">
        <span :class="{'inClassifyTitAct':index==0}" @click="index=0">分类</span>
        <em>|</em>
        <span :class="{'inClassifyTitAct':index==1}" @click="index=1">品牌</span>
      </div>
    </div>
    <div class="goodsClassify" v-show="index===0">
      <ul class="inClassifyCon">
        <li class="inClassifyList" v-for="(item,index2) in result" :key="index2">
          <a class="classifyTit">
            <img class="classifyBg" :src="require(`../img/${item.imgpath}`)">
            <div class="classifyTitTxt">
              <p>-{{item.proClassName}}-</p>
            </div>
          </a>
          <div
            class="classifyTxt"
            ref="elememt"
            :class="{'show':isOver ?showHeight===index2: isOver}"
          >
            <a
              href="javascript:;"
              v-for="(goods,gindex) in item.ThirdJsons"
              :key="gindex"
              v-text="goods.proClassName"
              @click="goto(goods.proClassName)"
            ></a>
          </div>
          <div class="classifyMore" @click="showTag(index2,$event)">
            <span>{{ '点击加载更多分类'}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="brand" v-show="index===1">
      <ul class="inClassifyBrand">
        <li class="inClassifyBrandList">
          <div class="classifyBrandTit">
            <img class="classifyBg" src="../img/brand.jpg">
          </div>
          <h2>— 推荐品牌 —</h2>
          <dl v-for="(item,gindex1) in brand" :key="gindex1">
            <dt>
              <a>{{item.titile}}</a>
            </dt>
            <dd v-for="(i,index1) in item.brandcate" :key="index1">
              <a href="javascript:;">
                <img :src="require(`../img/${i.imgpath}`)">
              </a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      index: 0,
      showHeight: true,
      isOver: 0,
      result: [],
      brand: []
    };
  },

  created() {
    this.goodlist();
    this.brand1();
  },
  methods: {
    async goodlist(callback) {
      this.$store.state.loading += 1;
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf47fd78950af7d6e360487/example/category"
      );
      // this.result =[...this.result,...data.data.data.result];
      this.$store.state.loading -= 1;
      this.result = data.data.data.result;
    },
    async brand1(callback) {
      this.$store.state.loading += 1;
      const data1 = await this.$axios(
        "https://www.easy-mock.com/mock/5cf47fd78950af7d6e360487/example/brand"
      );
      this.$store.state.loading -= 1;
      this.brand = data1.data.data.brand;
    },
    showTag(index, ev) {
      //
      let dom = this.$refs.elememt[index];
      // dom.classList.toggle("show");
      let span = ev.target;
      span.innerHTML = (span.isok = !span.isok)
        ? "点击收起"
        : "点击加载更多分类";
      this.isOver = !this.isOver;
      this.showHeight = index;
    },
    goto(keyword) {
      this.$router.push({
        //路由传参
        path: "/goods/",
        query: { keyword }
      });
    },
    searchchange() {
      this.$store.state.searching = true;
    }
  }
  // mounted() {
  // isHide(){
  //     var height = this.$refs.text.maxHeight; //100

  // // console.log(height);
  // if (height < 6.2) {
  //   return true;
  // } else {
  //   return false;
  // }
});
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  .search {
    padding: 0.16rem 0;
    display: flex;
    border-bottom: solid 0.0625rem /* 1/16 */ #ccc;
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 10000;
    p {
      flex: 1;
      height: 2.8rem /* 32/16 */;
      img {
        height: 100%;
        margin: 0.8rem 1.5333rem;
      }
    }
    a {
      flex: 6;
      height: 2.8rem;
      line-height: 2.8rem;
      font-size: 1.6rem;
      padding-left: 3.2rem;
      border: solid 1px #666;
      border-radius: 2rem;
      color: #999;
      background: url(http://weixin.moximoxi.net/MoxiWap/img/search.png)
        no-repeat 0.4rem;
      background-size: 1.3rem;
      margin: 0.8rem 0;
    }
  }

  .classifyHead {
    position: fixed;
    background: #fff;
    width: 100%;
    z-index: 10000;
    top: 57px;

    .inClassify {
      width: 100%;
      height: 2.375rem /* 38/16 */;
      color: #666;
      display: flex;
      align-items: center;
    }
    span {
      width: 46.5%;
      line-height: 2.375rem;
      text-align: center;
      font-size: 1.4rem;
      flex: auto;
    }

    .inClassifyTitAct {
      border-bottom: solid 0.125rem /* 2/16 */ #ff3333;
      color: #ff3333;
      z-index: 10;
    }
  }
  .inClassifyCon {
    overflow-y: auto;
    position: absolute;
    top: 86px;
    .inClassifyList {
      width: 100%;
      border-bottom: solid 1rem #ddd;
      .classifyTit {
        position: relative;
        height: 100%;
        display: block;
        .classifyTitTxt {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          text-align: center;
          color: white;
          background: rgba(0, 0, 0, 0.6);
          line-height: 6.25rem;
          p {
            font-size: 1.6rem;
          }
        }
        .classifyBg {
          height: 6.25rem; /* 100/16 */
        }
      }
      .classifyTxt {
        padding: 0 5%;
        height: 6.2rem;
        overflow: hidden;
        &.show {
          height: auto;
          overflow: visible;
          display: block;
        }

        a {
          display: inline-block;
          text-align: left;
          margin: 0.6rem 1rem 0.2rem 0;
          color: #333333;
          font-size: 1.4rem;
        }
      }
      .classifyMore {
        text-align: center;
        font-size: 1.4rem;
        color: #ff3333;
        padding: 1.2rem;
      }
      &.hide {
        display: none;
      }
    }
  }
  .inClassifyBrandList {
    overflow-y: auto;
    .classifyBrandTit {
      width: 100%;
      height: 8.25rem /* 100/16 */;
      img {
        border-bottom: solid 1rem #ddd;
        width: 100%;
        height: 8.25rem /* 100/16 */;
      }
    }

    h2 {
      height: 3.6rem;
      line-height: 3.6rem;
      font-size: 1.6rem;
      font-weight: normal;
      text-align: center;
    }
    dl {
      width: 90%;
      margin: 0 5%;
      dt {
        a {
          background: #333;
          display: inline-block;
          color: white;
          padding: 1% 3%;
          margin: 3% 1%;
          font-size: 15px;
        }
      }
      dd {
        width: 22.5%;
        margin: 1%;
        display: inline-block;
        img {
          width: 100%;
        }
      }
    }
  }
  .top {
    padding: 10px;
    background: rgba(0, 153, 229, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
}
</style>


