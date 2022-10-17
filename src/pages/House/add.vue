<template>
  <div class="addHouse">
    <NavBar :title="this.title" />
    <!-- 地址 -->
    <van-field v-model="houseInfo.address" label="地址" />
    <!-- 户型 -->
    <van-field v-model="houseInfo.feature" type="text" label="户型" />
    <!-- 房源名 -->
    <van-field v-model="houseInfo.name" type="text" label="房源名称" />
    <!-- 价格 -->
    <van-field v-model="houseInfo.price" type="number" label="价格" />
    <!-- 面积 -->
    <van-field v-model="houseInfo.size" type="number" label="面积" />
    <!-- 风格 -->
    <van-field v-model="houseInfo.style" type="text" label="风格" />
    <!-- 简介 -->
    <van-field v-model="houseInfo.synopsis" type="text" label="简介" />
    <!-- 提交按钮 -->
    <van-button class="confirm" type="info" @click="uploadHouse">确认上传</van-button>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { reqAddHome } from "@/api/index";
export default {
  name: "addHouse",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      houseInfo: {
        address: "",
        feature: "",
        name: "",
        price: "",
        size: "",
        style: "",
        synopsis: ""
      },
      title: "新增房源"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async uploadHouse() {
      let params = this.houseInfo;
      const result = await reqAddHome(params);
      console.log(result);
    }
  }
};
</script>

<style scoped lang="less">
.confirm {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
