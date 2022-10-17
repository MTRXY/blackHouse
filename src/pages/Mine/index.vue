<template>
  <div class="mine">
    <div class="mine_head">
      <div class="head_set"></div>
      <div class="head_info">
        <div class="info_active" @click="goRegister">
          <img width="100%" height="100%" src="../../assets/img/mine/active.png" alt />
        </div>
        <div class="info_text">
          <p class="info_name">黑房欢迎您</p>
          <p class="info_msg">签名:今天也是元气慢慢的一天</p>
        </div>
      </div>
    </div>
    <div class="mine_body">
      <!-- 我的家服 -->
      <MyHome />
      <!-- 其他 -->
      <MyOhter />
      <!-- 邀请 -->
      <MyInvite />
      <!-- 我的客服 -->
      <MyService />
    </div>
  </div>
</template>

<script>
import MyHome from "./MyHome.vue";
import MyOhter from "./MyOhter.vue";
import MyInvite from "./MyInvite.vue";
import MyService from "./MyService.vue";
export default {
  name: "Mine",
  components: { MyHome, MyOhter, MyInvite, MyService },
  methods: {
    goRegister() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>