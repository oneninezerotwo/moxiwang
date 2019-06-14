<template>
    <div class="search" v-if="searching">
        <header>
            <a class="return"><img src="../assets/return.png" @click="searchchange()"></a>
            <div class="search">
                <form action="">
                    <input class="searchTxt" type="search" v-model="aa">
                </form>
                <a class="deleteBtn" @click="empty()"></a>
            </div>

        </header>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Search",
      aa:""
    };
  },
  computed: {
    searching() {
      return this.$store.state.searching;
    }
  },
  methods: {
    searchchange() {
      this.$store.state.searching = false;
    },
    empty() {
      this.aa = ""
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.search {
  position: fixed;
  z-index: 999;
  background: white;
  width: 100%;
  height: 100%;
}
header {
  width: 100%;
  height: 5rem;
  overflow: hidden;
  padding: 0.5rem 0;
  background: white;
  border-bottom: 0.1rem solid #ccc;
  position: fixed;
  z-index: 999;
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
  margin: 1rem auto;
}
img {
  border: none;
}
header .search {
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
  /* margin-bottom: 5rem; */
}
header .search .searchTxt {
  float: left;
  width: 80%;
  height: 2.6rem;
  line-height: normal;
  font-size: 1rem;
  outline: none;
  border: none;
}
header .search .deleteBtn {
  width: 2.6rem;
  height: 2.6rem;
  float: right;
  background: url(../assets/close.png) center center no-repeat;
  background-size: 70%;
}

a {
  text-decoration: none;
  color: #1f2022;
  font-family: Microsoft YaHei, Tahoma, Arial, sans-serif;
  cursor: pointer;
}
</style>


