<template>
    <div>
        <header>
            <h1><img  src="../assets/logo.png"></h1>
            <a href="###"
            @click="searchchange()"
            >搜索你感兴趣的内容 </a>
        </header>
    </div>
</template>
<script>
export default {
  methods:{
      searchchange(){
             this.$store.state.searching  = true
         }
  }
}
</script>

<style scoped>
header {
  background: white;
 position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  padding: 0.5rem 0;
  z-index: 100;
  
}
header h1 {
  float: left;
  display: inline-block;
  width: 20%;
  height: 4rem;
  text-align: center;
}
header h1 img {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem auto;
}
img {
  border: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: Microsoft YaHei;
}
header a {
  float: left;
  display: inline-block;
  height: 2.6rem;
  line-height: 2.6rem;
  width: 60%;
  font-size: 1.2rem;
  padding-left: 3.2rem;
  border: solid 1px #666;
  border-radius: 2rem;
  color: #999;
  background: url(../assets/search.png) 0.5rem 0.5rem no-repeat;
  background-size: 1.6rem;
  margin: 0.5rem 0;
}
</style>

