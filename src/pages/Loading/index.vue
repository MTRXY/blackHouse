<template>
  <div class="loading">
    <div class="loading_img">
      <van-button @click="pass" class="passBtn" round type="info" size="small">跳过 {{countDown}} 秒</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      countDown: 3, //倒计时
      timer: null
    };
  },
  methods: {
    pass() {
      this.countDown = 0;
    },
    setCoutDown() {
      if (this.timer) {
        clearInterval(this.timer);
        return;
      } else {
        this.timer = setInterval(() => {
          this.countDown--;
        }, 1000);
      }
    }
  },
  mounted() {
    this.setCoutDown();
  },
  watch: {
    countDown(newValue) {
      newValue === 0 ? this.$router.push("/home") : null;
    }
  }
};
</script>

<style scoped>
.loading {
  height: 100%;
  position: relative;
}
.loading_img {
  height: 100%;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ntimg.cn%2Ffile%2F20181212%2F8095094_183922773087_2.jpg&refer=http%3A%2F%2Fpic.ntimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668300478&t=49d4bccab14cc3393e7602b051a6ae5f");
  background-repeat: no-repeat;
  background-size: cover;
}
.loading .passBtn {
  position: absolute;
  top: 2%;
  right: 5%;
}
</style>