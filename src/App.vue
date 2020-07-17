<template>
  <div id="app">
    <router-view />
    <Tabbar
      v-if="
        [
          '/home',
          '/classification',
          '/community',
          '/self',
          '/shopping_cart',
        ].includes(this.$route.path)
      "
    ></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Tabbar,
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style>
#app,
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
