<!--  -->
<template>
  <div class="wellcome">
    <span class="icon chobits chobitschoiceness"></span>
    <div class="skip">  跳过 {{ times }}  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: 5,
    };
  },

  components: {},

  computed: {},

  mounted() {
    let time = setInterval(() => {
      this.times--;
      if (this.times == 0) {
        clearInterval(time);
        this.$router.push("home");
      }
    }, 1000);
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.wellcome {
  width: 100%;
  height: 100%;
  padding-top: 60%;
  .skip {
    position: fixed;
    right: 10px;
    top: 10px;
    background-color: rgba($color: #000000, $alpha: 0.6);
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    padding: 10px;
  }
  .chobitschoiceness{
    font-size: 130px;
  }
}
</style>
