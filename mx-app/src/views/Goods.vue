<template>
  <div class="listhead">
    <header>
      <a class="return" @click='backBefor()'>
        <img src="../assets/return.png">
      </a>
      <div class="search">
        <form action>
          <input class="searchTxt" type="search">
        </form>
        <a class="deleteBtn"></a>
      </div>
    </header>

    <ul class="sort">
      <li>
        销量
        <img src="../img/bB.png" alt>
      </li>
      <li>价格</li>
      <li>最新</li>
      <li>筛选</li>
    </ul>
    <div class="content">
      <ul class="goodslist">
        <li v-for="(item,index) in SearchProductList" :key="index">
          <img :src="item.ProImg" alt>
          <p>|&nbsp; {{item.ProductFrom}} &nbsp;|</p>
          <p v-text="item.ProName"></p>
          <p>
            <span style="color:red;margin-right:10px">¥{{item.ProUnitPrice}}</span>
            <span>
              <del>¥{{item.ReferPrice}}</del>
            </span>
          </p>
        </li>
      </ul>
    </div>
    <Totop/>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Vue } from "vue-property-decorator";
import Totop from "@/components/Totop.vue";
export default Vue.extend({
  data() {
    return {
      SearchProductList: []
    };
  },
  components: {
    Totop
  },
  created() {
    this.goods();
    this.$store.state.isShowMfooter = 0;
  },
  methods: {
    async goods(callback) {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cf47fd78950af7d6e360487/example/goodscategory"
      );
      this.SearchProductList = data.data.data.SearchProductList;
      console.log(data);
    }
  }
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.listhead {
  position: fixed;
  z-index: 999;
  background: white;
  width: 100%;
  height: 200px;
  position: relative;
  header {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    padding: 0.5rem 0;
    background: white;
    border-bottom: 0.1rem solid #ccc;
    .return {
      float: left;
      display: inline-block;
      width: 10%;
      height: 4rem;
      text-align: center;
      img {
        width: 0.8rem;
        height: 1.6rem;
        border: none;
        margin: 1rem auto;
      }
    }
    .search {
      float: left;
      display: inline-block;
      width: 80%;
      padding-left: 3.2rem;
      border: solid 1px #666;
      border-radius: 2rem;
      color: #999;
      background: url(../assets/search.png) 0.5rem 0.5rem no-repeat;
      background-size: 1.6rem;
      margin: 0.5rem;
      height: 3rem;
      .searchTxt {
        float: left;
        width: 80%;
        height: 2.6rem;
        line-height: normal;
        font-size: 1rem;
        outline: none;
        border: none;
      }
      a {
        text-decoration: none;
        color: #1f2022;
        font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
        cursor: pointer;
      }
    }
    .deleteBtn {
      width: 2.6rem;
      height: 2.6rem;
      float: right;
      background: url(../assets/close.png) center center no-repeat;
      background-size: 70%;
    }
  }

  .sort {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    background: #fff;
    top: 60px;
    height: 48px;
    line-height: 38px;
    width: 100%;
    padding: 0.5rem 0;
    text-align: center;
    box-sizing: border-box;
    border-bottom: solid 2px #ccc;
    li {
      flex: 1;
      font-size: 14px;
      height: 100%;
      img {
        height: 12px;
      }
    }
  }
}
.content {
  font-size: 12px;
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 100px;
    z-index: 10;
    li {
      width: 50%;
      padding: 5% 0;
      text-align: center;

      img {
        height: 144px;
        width: 144px;
      }
      p {
        height: 14px;
        line-height: 14px;
        width: 183px;
        margin: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>




