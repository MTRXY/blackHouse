<template>
  <div class="search">
    <van-search
      class="model"
      v-model="value"
      @click="goShare(3)"
      placeholder="请输入搜索关键词"
      label="郑州∨"
    />
    <button class="map_btn" @click="toMap()">
      <van-icon color="black" name="map-marked" size="20px" />
      <span class="map">地图</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSearch(val) {},
    onCancel() {},
    goShare(flag) {
      this.$router.push({
        path: "/share",
        query: {
          flag
        }
      });
    },
    toMap() {
      this.$router.push("/ditu");
    }
  },
  created() {},
  mounted() {},
  components: {}
};
</script>
<style scoped>
.search {
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 190px;
  z-index: 1;
}
.model {
  border-radius: 20px;
  background-color: #fff;
}
.map_btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  margin-left: 16px;
  border: 0px;
  border-radius: 30px;
  background-color: #fff;
  color: black;
}
.map_btn .map {
  font-size: 12px;
  color: black;
}
</style>