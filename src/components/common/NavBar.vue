<!--  -->
<template>
  <van-nav-bar
    title="标题"
    left-text=""
    right-text=""
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
import { NavBar } from "vant";
export default {
  data() {
    return {};
  },

  components: {
    [NavBar.name]: NavBar,
  },

  computed: {},

  mounted() {
    
  },

  methods: {
    onClickLeft(){
      this.$router.go(-1)
    }
  },
};
</script>
<style scoped lang="scss"></style>
