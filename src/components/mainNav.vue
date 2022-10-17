<template>
  <van-tabbar
    class="tabbar"
    :replace="true"
    :fixed="true"
    safe-area-inset-bottom
    route
    v-model="active"
  >
    <van-tabbar-item class="index" to="/home" icon="home-o"
      >首页</van-tabbar-item
    >
    <van-tabbar-item class="message" to="/message" icon="chat-o"
      >消息</van-tabbar-item
    >
    <!-- <img class="addImg" src alt /> -->
    <div class="add_container">
      <van-cell class="addInner" icon="plus" @click="showPopup"></van-cell>
      <van-popup
        class="popup"
        v-model="show"
        position="bottom"
        :style="{ height: '65%' }"
      >
        <div class="add">
          <div class="introduction">
            <span class="introText"
              >没有人生而向往孤独，我们都渴望向有趣的灵魂靠拢</span
            >
          </div>
          <div class="addOption">
            <div class="addOptionLeft">
              <div class="publishHouse" @click="goAddHouse">
                <div class="title">发布房源</div>
                <span class="content">让世界每个有可能的地方都变成家～</span>
              </div>
            </div>
            <div class="addOptionRight">
              <div class="publishLifestyle" @click="goAddLifestyle">
                <div class="title">Lifestyle</div>
                <span class="content">捕捉周围的故事和瞬间</span>
              </div>
              <div class="publishWarmHeart">
                <div class="title">唯心市集</div>
                <span class="content">置换心爱的物品以物交友</span>
              </div>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <van-tabbar-item class="collect" to="/click" icon="like-o"
      >收藏</van-tabbar-item
    >
    <van-tabbar-item class="mine" to="/mine" icon="user-o"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    goAddHouse() {
      this.$router.push("/addHouse");
    },
    goAddLifestyle() {
      this.$router.push("/addLifestyle");
    },
  },
};
</script>
<style scoped>
.tabbar {
  height: 73px;
  width: 100%;
  background-color: #fff;
  border-radius: 50px 50px 0px 0px;
}
[class*="van-hairline"]::after {
  border: none;
}
.add_container {
  width: 55px;
  height: 50px;
  margin-top: -13.5px;
  border: 10px solid #ffffff;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
.addImg {
  position: absolute;
  bottom: 24px;
  left: 156px;
  width: 62px;
  height: 62px;
  z-index: 1;
  pointer-events: none;
}
.popup {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 98;
}
.popup .add {
  padding: 42px 18px 30px 18px;
}
.popup .add .addOption {
  display: flex;
  margin-top: 60px;
}
.popup .add .addOption .publishHouse {
  width: 132px;
  height: 174px;
  padding: 14px;
  margin-right: 5px;
  border-radius: 5px;
  background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psy2jw6wmgodf57bhgbjzpen3vk7k6wmaut76527cdd-7ecc-403f-be37-921802602599);
}
.popup .add .addOption .publishHouse .title,
.popup .add .addOption .publishLifestyle .title,
.popup .add .addOption .publishWarmHeart .title {
  font-size: 16px;
  color: #ffffff;
}
.popup .add .addOption .publishHouse .content,
.popup .add .addOption .publishLifestyle .content,
.popup .add .addOption .publishWarmHeart .content {
  font-size: 8px;
  color: #fff;
}
.popup .add .addOption .publishLifestyle {
  width: 140px;
  height: 72px;
  padding: 14px;
  margin-bottom: 1px;
  border-radius: 5px;
  background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pspez87yd8xca8knsk26nzngzy8t4lqqk7k5ff09dca-fede-4bd4-8d5e-ee3eb41acbbc);
}
.popup .add .addOption .publishWarmHeart {
  width: 140px;
  height: 72px;
  padding: 14px;
  border-radius: 5px;
  background-image: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psbaaq3yval3dyrw0zmg0ivjgdb47i9t0br82d3e82a-69ff-47ed-b9b0-8acb5035b77c);
}
.popup .introduction .introText {
  font-size: 12px;
  color: #4869ac;
}
.add_btn {
  width: 55px;
  height: 55px;
}
.add_btn p {
  font-weight: bold;
  font-size: 18px;
}
.addInner {
  background-color: #1a65ff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-align: center;
  position: relative;
  top: -5px;
}
.addInner .van-cell__left-icon {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>