<template>
  <div class="hello">
    <van-loading />
    <van-loading type="spinner" />
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { Loading } from "vant";
import Tabbar from "@/components/common/Tabbar";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    [Loading.name]: Loading,
    Tabbar,
  },
  mounted() {
    this.$axios
      .get("/api/login", {})
      .then((res) => {
        console.log("数据是:", res);
      })
      .catch(() => {
        console.log("获取数据失败");
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
