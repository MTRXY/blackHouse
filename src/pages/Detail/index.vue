<template>
  <div class="detail">
    <navBar :leftPath="leftPath" />
    <!-- 房屋大图 -->
    <div class="banner">
      <img :src="deatilData.imgurl" />
    </div>
    <main class="content">
      <!-- 房屋名称 -->
      <div class="title">
        <p>{{deatilData.hName}}</p>
      </div>
      <br />
      <!-- 房屋标签 -->
      <div class="info-tag">
        <van-tag class="small-tag" type="primary">{{deatilData.hStyle}}</van-tag>
        <van-tag class="small-tag" type="primary">{{deatilData.hSize}}㎡超大房源</van-tag>
        <van-tag class="small-tag" type="success">{{deatilData.hFeature}}</van-tag>
      </div>
      <br />
      <div class="price">
        <p>￥{{deatilData.hPlace}} 每平方起</p>
      </div>
      <br />
      <div class="location">
        <van-icon name="location-o" color="burlywood" size="20px" />
        <a href="javascript:;">{{deatilData.hAddress}}--{{deatilData.hName}}</a>
      </div>
      <div class="imageList">
        <van-grid :border="false" :column-num="3">
          <br />
          <van-grid-item>
            <van-image :src="deatilData.imgurl" />
            <van-dialog v-model="show" title="标题" show-cancel-button>
              <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
            </van-dialog>
          </van-grid-item>
        </van-grid>
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "../../components/NavBar.vue";
export default {
  data() {
    return {
      show: false,
      deatilData: {},
      leftPath: {} //左侧按钮回退路径
    };
  },
  methods: {},
  mounted() {
    this.leftPath = this.$route.query.leftPath;
    this.$toast({
      message: "数据加载中",
      type: "loading",
      forbidClick: true,
      duration: 800,
      onOpened: () => (this.deatilData = this.$route.query.item)
    });
  },
  beforeRouteEnter(to, from, next) {
    if (from.path === "/click") {
      to.query.leftPath = {
        path: "/click",
        target: "a"
      };
      next();
    } else {
      next();
    }
  },
  components: { navBar }
};
</script>
<style scoped>
.banner img {
  width: 100%;
  height: 200px;
}
.content {
  padding: 5px 20px 73px 20px;
}
.content p {
  font-size: 24px;
}
.content .title p {
  font-weight: bold;
}
.content .price p {
  margin-top: 10px;
  font-size: 18px;
}
.content .location a {
  margin-top: 10px;
  font-size: 12px;
  color: burlywood;
  text-decoration: underline;
}
.content .house-style p {
  margin-top: 10px;
  font-size: 12px;
  color: red;
}
.info-tag {
  display: flex;
}
.info-tag .small-tag {
  margin-top: 5px;
}
.van-tag {
  margin-right: 10px;
}
</style>
