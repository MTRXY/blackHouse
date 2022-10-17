<template>
  <div class="click">
    <h1>收藏</h1>
    <van-tabs v-model="activeName">
      <van-tab title="房源列表" name="a">
        <Homelibiao />
      </van-tab>
      <van-tab title="唯心市集" name="b">
        <Nuanxin />
      </van-tab>
      <van-tab title="Lifestyle" name="c">
        <Life />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Homelibiao from "./Homelibiao";
import Nuanxin from "./Nuanxin.vue";
import Life from "./Life.vue";
export default {
  data() {
    return {
      activeName: "b"
    };
  },
  computed: {},
  mounted() {
    const activeName = this.$route.query.target;
    console.log(activeName);
    if (activeName) {
      this.activeName = activeName;
    } else {
      this.activeName = "b";
    }
  },
  components: {
    Nuanxin,
    Homelibiao,
    Life
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  padding-top: 15px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  color: #111111;
}
span {
  font-size: 26px;
  font-weight: 400;
  color: #222222;
}
</style>