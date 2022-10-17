<template>
  <div class="login">
    <!-- 导航 -->
    <div class="login_head">
      <NavBar :leftIcon="{ color: '#000', name: 'cross' }"></NavBar>
    </div>
    <!-- 内容区域 -->
    <div class="login_body">
      <div class="login_body_head">
        <div class="icon"></div>
        <h4 class="phone">166****6845</h4>
        <span class="tips">认证服务由联通统一认证提供</span>
      </div>
      <div class="login_body_btn">
        <van-button type="info" block class="btn" @click="login" :disabled="!isDisabled">本机号码一键登陆</van-button>
        <van-button
          :to="{
            path: '/PhoneOrPassword',
            query: {
              show: 'password',
            },
          }"
          block
          class="btn btn1"
        >其他手机号码登陆</van-button>
        <div class="login_body_agreement">
          <van-checkbox class="checked" icon-size="20px" v-model="isDisabled"></van-checkbox>
          <span>
            为保障您的个人隐私权益，请在登陆前仔细阅读
            <i class="terms">联通统一认证服务条款</i>和
            <i class="terms">黑房认证服务条款</i>以及
            <i class="terms">黑房隐私政策</i>
          </span>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="login_footer">
      <LoginFooter />
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import LoginFooter from "./LoginFooter.vue";
export default {
  name: "Login",
  data() {
    return {
      isDisabled: false
    };
  },
  methods: {
    login() {
      this.$toast({
        message: "未获取到手机号信息,请使用密码登陆",
        type: "fail"
      });
    }
  },
  components: {
    NavBar,
    LoginFooter
  }
};
</script>

<style lang="less" scoped>
@import url("./css/index.less");
</style>
>
