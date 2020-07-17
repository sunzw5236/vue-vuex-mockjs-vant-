<!--  -->
<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item title="标签名1" />
    <van-sidebar-item title="标签名2" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
    <van-sidebar-item title="标签名3" />
  </van-sidebar>
</template>

<script>
import { Notify } from "vant";
import { Sidebar, SidebarItem } from "vant";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },

  components: {
    [Notify.name]: Notify,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },

  computed: {},

  mounted() {

  },

  methods: {
    onChange(index) {
      Notify({ type: "primary", message: index });
    },
  },
};
</script>
<style scoped lang="scss">
.van-sidebar-item--select::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 0.01067rem;
  height: 0.04267rem;
  background-color: #ffe123;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  content: "";
}
</style>
