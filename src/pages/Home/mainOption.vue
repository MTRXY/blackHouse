<template>
  <div class="mainOption">
    <van-grid route>
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/pszx3hmqekhbx42swd0frtwd9mw6pr05hdbaf4907-03fd-4600-aeae-7908a0d84c0b"
        text="合租"
        @click="goShare(1)"
      />
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/psw6srskrknqnf8d5oxq8wj78879qvxwqca00b1524-b68f-4c3b-873a-4a602c463fbf"
        text="主卧独卫"
        @click="goShare(2)"
      />
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/ps4m1ywgfioeib4c3qqjwbmdlii5cj2fc64b72da92-68b2-4aa4-bb96-b0095e83c39d"
        text="热租小区"
        @click="goShare(3)"
      />
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/pss2wtcjok52mch6c97jv6aqxymeyxc5b78c5079b-f29b-4f67-a7e7-d70239d02a12"
        text="公寓"
        @click="goShare(4)"
      />
    </van-grid>
    <div class="swiperBack">
      <div class="swiper-container optionSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pscaa5bwzw7wfgq3o24wmgbg6874fwuww970193fb-4b99-4a77-9ad3-3a5bc7b132de"
              alt
            />
            <span>月付房源</span>
          </div>
          <div class="swiper-slide">
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pssfdgharnmu9rf7s86bl21rw984s4scq4a4becd51-d2b6-4a2d-ba29-37a46f821083"
              alt
            />
            <span>千元好房</span>
          </div>
          <div class="swiper-slide">
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/pseo90gf1s1qwj8ovbs6gk5hgp9e7455cg1d21ee76-bb4b-4fec-a318-c113115b9c42"
              alt
            />
            <span>整租1居</span>
          </div>
          <div class="swiper-slide">
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps91jjqctohiwi1msposafl93lzsziyo8t5f1baaaae-a05c-443f-8b40-ab21c13d4d24"
              alt
            />
            <span>整租2居＋</span>
          </div>
          <div class="swiper-slide">
            <img class="strightR" src="../../assets/img/homePage/icon/strightRental.png" alt />
            <span>业主直租</span>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination" type="block"></div> -->
      </div>
    </div>

    <van-notice-bar
      class="notice_bar"
      left-icon="wap-home"
      background="#f6fafe"
      color="#979a99"
      text="租金月付  海量真实房源"
    />
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      lieStyle: []
    };
  },
  computed: {},
  watch: {},

  methods: {
    goShare(flag) {
      this.$router.push({
        path: "/share",
        query: {
          flag
        }
      });
    }
  },
  created() {},
  mounted() {
    new Swiper(".optionSwiper", {
      slidesPerView: 5,
      centeredSlides: false,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  components: {}
};
</script>
<style scoped>
.mainOption {
  border-radius: 20px;
}
.topOption .perOption {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
}
.optionSwiper {
  width: 100%;
  height: 70px;
}
.optionSwiper .swiper-wrapper {
  height: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
}
.optionSwiper .swiper-slide {
  text-align: center;
  font-size: 12px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.optionSwiper .swiper-slide img {
  width: 28px;
  margin-bottom: 5px;
}
.optionSwiper .swiper-slide .strightR {
  height: 28px;
}
.notice_bar {
  border-radius: 20px;
}
.swiperBack {
  background-color: #fff;
}
</style>