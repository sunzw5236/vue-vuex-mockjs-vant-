<!--  -->
<template>
  <div>
    <div ref="imageTest" style="font-size:18px;" class="imageTest">
      <span>锄禾日当午，</span>
      <br />
      <span>汗滴禾下土。</span>
      <br />
      <span>谁知盘中餐，</span>
      <br />
      <span>粒粒皆辛苦。</span>
    </div>

    <div ref="img" class="img"></div>
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import QRCode from "qrcodejs2";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    this.creatQrCode();
    let _this = this;

    setTimeout(() => {
      // 创建 canvas 标签
      const canvas = document.createElement("canvas");
      // 获取要生成图片的 DOM 元素
      let canvasDom = this.$refs.imageTest;
      // 获取指定的宽高
      const width = parseInt(window.getComputedStyle(canvasDom).width);
      const height = parseInt(window.getComputedStyle(canvasDom).height);
      console.log(width);
      console.log(height);
      // 宽高扩大 2 倍 处理图片模糊
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      const context = canvas.getContext("2d");
      context.scale(1, 1);
      const options = {
        width: width,
        height: height,
        logging: true, //日志开关，便于查看html2canvas的内部执行流程
        backgroundColor: "#fff",
        canvas: canvas,
        scrollY: 0,
        scrollX: 0,
        useCORS: true,
        taintTest: true, // 在渲染前测试图片
        timeout: 500, // 加载延时
      };
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      html2canvas(canvasDom, options).then((canvas) => {
        // 生成图片地址
        this.imgUrl = canvas.toDataURL("image/png");
        let img = document.createElement("img");
        img.src = this.imgUrl;
        img.style.width = "100%";
        _this.$refs.img.appendChild(img);
      });
    }, 0);
  },

  methods: {
    creatQrCode() {
     new QRCode(this.$refs.qrCodeUrl, {
        text: "www.baidu.com", // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.H, //容错率，L/M/H
      });


      //  urlQRCode.clear() //清除二维码 
    },
  },
};
</script>
<style scoped lang='scss'>
.imageTest {
  width: 100%;
}
.img {
  width: 100%;
}
</style>