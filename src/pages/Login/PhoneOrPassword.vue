<template>
  <div class="PhoneOrPassword">
    <!-- 头部导航 -->
    <div class="PhoneOrPassword_head">
      <NavBar rightText="注册" @rightEvent="goRegister"></NavBar>
    </div>
    <div class="PhoneOrPassword_body">
      <!-- 判断是手机登陆还是密码登陆 -->
      <h4 class="title">账号密码登陆</h4>
      <span class="tips">未注册过的手机号请前往注册页面注册</span>
      <!-- 登录框 -->
      <van-form class="form" @submit="submit" ref="form">
        <!-- 手机号 -->
        <div class="phone">
          <van-field
            :border="false"
            type="number"
            maxlength="11"
            class="input border"
            v-model="userInfo.phone"
            name="phone"
            placeholder="请输入手机号"
            :rules="[
             {
                 //表单验证
                 required: true,
                 trigger: 'onChange',
             },
             {
               
              pattern:/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
              trigger:'onBlur',
              message:'手机号格式不正确!'
             },
           
         ]"
          />
          <span class="remove iconfont" @click="userInfo.phone=''" v-if="userInfo.phone">&#xe658;</span>
        </div>
        <!-- 密码 -->
        <div class="verification">
          <van-field
            :border="false"
            autocomplete
            class="input"
            v-model="userInfo.password"
            maxlength="16"
            name="password"
            placeholder="请输入密码"
            type="password"
          />
          <span
            class="remove iconfont"
            @click="userInfo.password=''"
            v-show="userInfo.password"
          >&#xe658;</span>
        </div>
        <div class="policy">
          <van-checkbox class="checked" v-model="userInfo.checked" icon-size="20px"></van-checkbox>
          <span>
            我已阅读并同意《
            <i>黑房隐私政策</i> 》以及《
            <i>黑房用户服务协议</i> 》
          </span>
        </div>
        <van-button :disabled="isLogin" type="info" block class="login">立即登陆</van-button>
      </van-form>
    </div>
    <div class="PhoneOrPassword_footer">
      <LoginFooter />
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar.vue";
import LoginFooter from "./LoginFooter.vue";
import robutRulesMixin from "../../mixins/robutRules";
import { reqLogin } from "../../api";
export default {
  name: "PhoneOrPassword",
  mixins: [robutRulesMixin],
  components: {
    NavBar,
    LoginFooter
  },
  data() {
    return {
      userInfo: {
        phone: "", //手机号
        password: "", //密码
        checked: false //选择框
      },
      isLogin: true //登陆按钮状态,
    };
  },
  computed: {},
  watch: {
    // 判断登陆按钮是否可用
    userInfo: {
      deep: true,
      handler(nv, ov) {
        if (nv.phone.length === 11 && nv.password.length >= 8 && nv.checked) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      }
    }
  },

  methods: {
    // 登陆成功回调
    okCb() {
      this.$toast.clear();
      this.$toast({
        message: "登陆成功,马上跳转到首页",
        type: "success",
        forbidClick: true,
        duration: 1000,
        onOpened: () => this.$router.replace("/home")
      });
    },
    //登陆失败回调
    noCb(msg) {
      this.$toast({
        type: "fail",
        message: msg + "请重试",
        forbidClick: true,
        duration: 500
      });
    },

    //密码登陆
    async psdLogin(params) {
      console.log(params);
      const result = await reqLogin(params);
      console.log(result);
      if (result.code === 0) {
        this.okCb();
      } else {
        this.noCb(result.data);
      }
    },
    //登陆
    submit(values) {
      //密码登陆
      const { password, phone } = values;
      this.psdLogin({ password, phone });
    },
    // 前往注册页面
    goRegister() {
      this.userInfo = {
        phone: "",
        password: ""
      };
      this.$router.push({
        path: "/register",
        query: {
          show: "register"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./css/phoneOrPassWord.less");
</style> 