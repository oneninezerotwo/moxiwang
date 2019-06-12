<template>
  <div class="main">
    <header>
      <p>
        <img
          onclick="location.href='../index.html'"
          src="http://weixin.moximoxi.net/MoxiWap/img/return.png"
        >
      </p>

      <input type="text">
      <div class="box">
        <img src="http://weixin.moximoxi.net/MoxiWap/img/close.png">
      </div>
      <p></p>
    </header>

    <div class="lastSearch">
      <div class="lastSearchTit">
        <h2>最近搜索</h2>
        <a class="delete" style="display: none;">
          <img src="../img/del.png">
        </a>
      </div>
      <div class="lastSearchList">无搜索历史</div>
    </div>
    <div class="hotSearch">
      <h2 class="hotSearchTit">热门搜索</h2>
      <div class="hotSearchList"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
template {
  background: #f3f3f3;
}
header {
  padding: 0.16rem 0;
  display: flex;
  position: relative;
  border-bottom: solid 0.0625rem /* 1/16 */ #ccc;
  p {
    flex: 1;
    width: 10%;

    img {
      margin: 0.8rem 1.5333rem;
    }
  }
  .box {
    position: absolute;
    right: 3.8rem;
    top: 1rem;
    img {
      height: 1.4rem;
    }
  }
  input {
    flex: 6;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    border: solid 1px #666;
    border-radius: 2rem;
    color: #999;
    background: url(http://weixin.moximoxi.net/MoxiWap/img/search.png) no-repeat
      0.4rem;
    background-size: 1.3rem;
    margin: 0.6rem 1rem;
    padding: 0 2.5rem;
    // &::after {
    //   content: "";
    //   background: url(http://weixin.moximoxi.net/MoxiWap/img/close.png)
    //     no-repeat right center;
    //   height: 1.4rem;
    //   display: inline-block;
    //   background-size: contain;
    //   margin: 0.2rem;
    //   input {
    //     height: 60%;
    //   }
    // }
  }
}
.lastSearch {
  width: 94%;
  padding: 3% 3% 0;
  .lastSearchTit {
    width: 100%;
    height: 3rem;
    h2 {
      width: 50%;
      height: 3rem;
      line-height: 3rem;
      color: #333;
      font-weight: normal;
      font-size: 1rem;
    }
    .lastSearchList {
      width: 100%;
      font-size: 0.6px;
      color: #999999;
    }
  }
}
.hotSearch {
  width: 94%;
  padding: 3% 3% 0;
  h2 {
    font-size: 1rem;
    width: 50%;
    height: 3rem;
    color: #333;
    line-height: 3rem;
  }
}
</style>
