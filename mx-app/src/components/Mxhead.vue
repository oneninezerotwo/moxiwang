<template>
  <div class="head">
    <header>
      <p>
        <img onclick="location.href='../index.html'" src="../img/logo.png">
      </p>
      <a href="###">搜索你感兴趣的内容</a>
      <p></p>
    </header>
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
          <div class="classifyTxt" ref="elememt">
            <!-- :id="nowindex==index2 ?'show':'hide'" -->
            <a
              href="javascript:;"
              v-for="(goods,gindex) in item.ThirdJsons"
              :key="gindex"
              v-text="goods.proClassName"
            ></a>
          </div>
          <div class="classifyMore" @click="showTag(index2, $event)">
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
      let dom = this.$refs.elememt[index];
      dom.classList.toggle("show");
      let span = ev.target;

      span.innerHTML = (span.isok = !span.isok)
        ? "点击收起"
        : "点击加载更多分类";

      // span.isok = !span.isok;
      // if (span.isok) {
      //   span.innerHTML = "点击收起";
      // } else {
      //   span.innerHTML = "点击加载更多分类";
      // }
    }
  }
});
</script>

<style lang="scss" scoped>
.head {
  z-index: 999;
  position: fixed;
  background: white;
  width: 100%;
  header {
    padding: 0.16rem 0;
    display: flex;
    border-bottom: solid 0.0625rem /* 1/16 */ #ccc;
    p {
      flex: 1;
      height: 2rem /* 32/16 */;
      img {
        height: 100%;
        margin: 0.8rem 1.5333rem;
      }
    }
    a {
      flex: 6;
      height: 2rem;
      line-height: 2rem;
      font-size: 1rem;
      padding-left: 3.2rem;
      border: solid 1px #666;
      border-radius: 2rem;
      color: #999;
      background: url(http://weixin.moximoxi.net/MoxiWap/img/search.png)
        no-repeat 0.4rem;
      background-size: 1.3rem;
      margin: 0.6rem 0;
    }
  }

  .classifyHead {
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
      font-size: 1rem;
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
    height: 37.5rem /* 600/16 */;
    position: relative;
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
            font-size: 1rem /* 20/16 */;
          }
        }
        .classifyBg {
          height: 6.25rem; /* 100/16 */
        }
      }
      .classifyTxt {
        padding: 0 5%;
        font-size: 0.24rem;
        height: 4.2rem /* 75/16 */;
        overflow: hidden;
        &.show {
          height: auto;
          // height: 6rem;
          overflow: visible;
        }
        &.hide {
        }
        a {
          display: inline-block;
          text-align: left;
          margin: 0.096rem 1rem 0.096rem 0;
          color: #333;
          font-size: 0.9rem;
        }
      }
      .classifyMore {
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 0.9rem;
        color: #ff3333;
        padding: 0.2rem;
      }
    }
  }
  .inClassifyBrandList {
    overflow-y: auto;
    height: 37.5rem /* 600/16 */;
    .classifyBrandTit {
      width: 100%;
      height: 6.25rem /* 100/16 */;
      img {
        border-bottom: solid 1rem #ddd;
        width: 100%;
        height: 6.25rem /* 100/16 */;
      }
    }

    h2 {
      height: 3.6rem;
      line-height: 3.6rem;
      font-size: 1rem;
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
}
</style>


