<!--  -->
<template>
  <div>
    <div class="class_title">
      <van-sticky>
        <van-tabs v-model="active" color="#FFE123">
          <van-tab v-for="index in 2" :key="index">
            <template #title>
              <span
                v-show="index == 1"
                class="icon chobits chobitsgoodsnew"
              ></span>
              <span
                v-show="index == 2"
                class="icon chobits chobitsglobal"
              ></span>
              {{ index == 1 ? "新国货" : "海外淘" }}
            </template>
          </van-tab>
        </van-tabs>
      </van-sticky>
    </div>

    <div class="content">
      <div ref="left">
        <Sidebar></Sidebar>
      </div>
      <div ref="right">
        <Classcontent></Classcontent>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import Sidebar from "@/components/common/Sidebar.vue";
import Classcontent from "@/components/Classcontent.vue";
import { Sticky } from "vant";
export default {
  data() {
    return {
      active: 0,
    };
  },

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Sidebar,
    [Sticky.name]: Sticky,
    Classcontent,
  },

  computed: {},

  mounted() {
    let scrollHeight =
      document.documentElement.clientHeight -
      document.getElementsByClassName("tabbar_class")[0].offsetHeight -
      document.getElementsByClassName("class_title")[0].offsetHeight;
    console.log(scrollHeight);
    this.$refs.left.style.height = scrollHeight + "px";
    this.$refs.right.style.height = scrollHeight + "px";
  },
  methods: {
    scrollfixed(scrollTop, isFixed) {
      console.log(scrollTop);
      console.log(isFixed);
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  display: flex;
  div {
    overflow-y: scroll;
  }
}
</style>
