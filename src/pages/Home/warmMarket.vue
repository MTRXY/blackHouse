<template>
  <div class="warmMarket">
    <header class="header">
      <span class="title">暖心市集</span>
      <span class="more" @click="goCollection()">更多</span>
    </header>
    <div class="swiper-container warmMarketSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure v-for="(item,index) in AllFair" :key="index">
            <img :src="item.url" alt />
            <div class="info">
              <div class="title">
                <span>{{item.overView}}</span>
              </div>
              <div class="price">
                <span>￥{{item.price}}</span>
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
  </div>
</template>

<script>
import Swiper from "swiper";
import { findAllFair } from "@/api/index";
export default {
  data() {
    return {
      AllFair: []
    };
  },
  computed: {},
  watch: {},

  methods: {
    //调取暖心集市房屋列表接口
    async getAllFair() {
      const res = await findAllFair();
      this.AllFair = res.data;
    },
    goCollection() {
      this.$router.push({
        path: "/homeList",
        query: {
          target: "warmHeart"
        }
      });
    }
  },
  created() {
    this.getAllFair();
  },
  mounted() {
    new Swiper(".warmMarketSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  components: {}
};
</script>
<style scoped>
.header {
  height: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  line-height: 32px;
  border-left: 5px solid blue;
  font-size: 18px;
}
.header .title {
  margin-left: 25px;
}
.header .more {
  float: right;
  font-size: 14px;
}

.warmMarketSwiper {
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
}

.warmMarketSwiper .swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide figure {
  width: 158px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #fff;
}
.swiper-slide figure img {
  width: 158px;
  height: 160px;
}
.swiper-slide figure .info {
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
  text-align: left;
}
.swiper-slide figure .price {
  font-size: 10px;
  color: #4869ac;
  text-align: left;
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