<template>
  <div class="lieStyle">
    <header class="header">
      <span class="title">Liestyle</span>
      <span class="more" @click="goCollection()">更多</span>
    </header>
    <main>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <figure v-for="(item,index) in lieStyle" :key="index">
              <div class="collection">
                <img
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/psdnvkvpt17zmloatgrwjptft8nxjui9njg7078a469-d040-4a52-8995-85131ea4a9c6"
                  alt
                />
                <span class="count">100</span>
              </div>
              <img :src="item.url" alt />
              <div class="info">
                <div class="title">
                  <span>{{item.lieStyleShow}}</span>
                </div>
                <div class="publisher_msg">
                  <div class="publish">
                    <img
                      class="avatar"
                      src="../../assets/img/homePage/lifeStyle/401664521715_.pic@2x.png"
                      alt
                    />
                    <span>Joey</span>
                  </div>
                  <div class="msg">
                    <img
                      class="noticeIcon"
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/psq7az5vsc36iomjyraayzyns1t8fo05w88c61b1dfa-073e-4611-ab1c-df688f149e3c"
                      alt
                    />
                    <span class="num">0</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Swiper from "swiper";
import { findAllLieStyle } from "../../api/index";
export default {
  data() {
    return {
      lieStyle: []
    };
  },
  computed: {},
  watch: {},

  methods: {
    //调取liestyle接口
    async getLieStyle() {
      const res = await findAllLieStyle();
      this.lieStyle = res.data;
    },
    goCollection() {
      this.$router.push({
        path: "/homeList",
        query: {
          target: "liestyle"
        }
      });
    }
  },
  created() {
    this.getLieStyle();
  },
  mounted() {
    new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true
    });
  },
  components: {}
};
</script>
<style scoped>
.header {
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 32px;
  border-left: 5px solid blue;
  font-size: 18px;
}
.header .title {
  margin-left: 25px;
}
.header .more {
  float: right;
  font-size: 12px;
}
.mySwiper {
  width: 100%;
  height: 320px;
  overflow: hidden;
}
.mySwiper .swiper-slide {
  display: flex;
  width: 50% !important;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.mySwiper .swiper-slide figure {
  width: 171px;
  height: 311px;
  border-radius: 10px;
  background-color: #fff;
}
.mySwiper .swiper-slide figure .collection {
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: 10px;
}

.mySwiper .swiper-slide figure .collection img {
  width: 15px;
  height: 14px;
  margin-right: 2px;
}
.mySwiper .swiper-slide figure .info {
  padding: 10px 10px 14px 10px;
  color: #333;
  font-size: 12px;
}
.swiper-slide img {
  width: 171px;
  height: 230px;
  border-radius: 5px;
}
.swiper-slide figure .title {
  height: 30px;
  line-height: 15px;
  font-size: 12px;
}
.swiper-slide figure .publish {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.swiper-slide figure .publish .avatar {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}
.swiper-slide figure .publisher_msg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}

.publisher_msg .noticeIcon {
  width: 12px;
  height: 10px;
  margin-right: 6px;
}
</style>