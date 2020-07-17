<!--  -->
<template>
  <div class="Classcontent">

    <div class="content">
      <h1>户外</h1>
      <div>
        <img src="" alt="">
        <span>商品名称</span>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: {},
    };
  },
  mounted() {
   
  },
  created() {
    // 为给定 ID 的 user 创建请求
    this.$axios
      .get(this.$api.Classcontent)
      .then((res) => {
        console.log(res)
        this.datalist = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  components: {},

  computed: {},

  watch: {},

  methods: {},
};
</script>
<style scoped lang="scss">


</style>
