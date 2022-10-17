<template>
  <div class="special">
    <van-tabs class="tabs" v-model="activeName">
      <van-tab
        class="tab_1"
        title-active-color="black"
        title-inactive-color="#868686"
        title="毕业生专享"
        lazy-render="true"
        name="a"
      >
        <div class="contain">
          <span>月付</span>
          <span class="border_span">0押金</span>
          <span>0元起搬家</span>
          <van-button class="complete_info" round type="info" size="small" text="完善信息"></van-button>
        </div>
      </van-tab>
      <van-tab
        class="tab_2"
        title-active-color="black"
        title-inactive-color="#868686"
        title="职场人专区"
        lazy-render="true"
        name="b"
      >
        <div class="contain">
          <span>职场人专区</span>
          <van-button class="complete_info" round type="info" size="small" text="完善信息"></van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {}
};
</script>
<style scoped>
.tabs {
  background-color: #fff;
}
.contain {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-left: 30px;
  vertical-align: middle;
}
span {
  display: block;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
}
.border_span {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding-left: 10px;
  padding-right: 10px;
}
.tab_1,
.tab_2 {
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;
}
.complete_info {
  border-radius: 10px;
}
</style>