<!--  -->
<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="shop-o">首页</van-tabbar-item>
    <van-tabbar-item icon="description">分类</van-tabbar-item>
    <van-tabbar-item icon="fire-o">社区</van-tabbar-item>
    <van-tabbar-item badge="3">
      <span>购物车</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item badge="3">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  watch: {},
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  computed: {},
  mounted() {},
  methods: {
    onChange(index) {
      let r_url = "";
      switch (index) {
        case 0:
          r_url = "home";
          break;
        case 1:
          r_url = "classification";
          break;
        case 2:
          r_url = "community";
          break;
        case 3:
          r_url = "shopping_cart";
          break;
        case 4:
          r_url = "self";
          break;
        default:
          break;
      }

      this.$router.push(r_url);
    },
  },
};
</script>
<style scoped></style>
