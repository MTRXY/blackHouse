<template>
  <div class="reset_password">
    <NavBar :title="showWhatType == 'resetPassWord' ? '找回密码' : '用户注册'" />
    <van-form @submit="submit" class="form" ref="form">
      <!-- 手机号 -->
      <div class="phone">
        <van-field
          type="number"
          maxlength="11"
          :rules="[
             {
                 //表单验证
                 required: true,
                 trigger: 'onBlur',
             },
             {
              pattern:/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
              trigger:'onBlur',
              message:'请输入正确的手机号',
             },
             {
              //自定义函数验证
                 validator: phoneValiDator,
                 trigger: 'onBlur',
             },
           
         ]"
          v-model="userInfo.phone"
          class="input"
          name="phone"
          placeholder="请输入手机号"
        ></van-field>

        <span v-show="userInfo.phone" @click="userInfo.phone = ''" class="remove iconfont">&#xe658;</span>
        <!-- 获取验证码 -->
        <div>
          <span
            v-if="getCode"
            :class="userBoolean.phone? 'yes' : 'no'"
            class="getVerification"
            @click="emulationVerify"
          >获取验证码</span>
          <span v-else class="getVerification no time">{{ times }}秒后重新获取</span>
        </div>
      </div>
      <!-- 验证码 -->
      <div class="verification">
        <van-field
          type="number"
          maxlength="6"
          v-model="userInfo.code"
          class="input"
          name="code"
          placeholder="请输入验证码"
          :rules="[{
            required: true,
            trigger: 'onBlur',
          }]"
        ></van-field>
        <span v-show="userInfo.code" @click="userInfo.code = ''" class="remove iconfont">&#xe658;</span>
      </div>
      <!-- 密码 -->
      <div class="password">
        <van-field
          autocomplete="off"
          type="password"
          v-model="userInfo.password"
          maxlength="16"
          class="input"
          name="password"
          placeholder="请输入密码(最少8位,数字+字母)"
          :rules="[{
            required: true,
            trigger: 'onBlur',
          },
          {
            validator:psdValiDator,

            trigger:'onBlur'
          },
            //正则验证
             {
              pattern:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/,
              trigger:'onBlur',
              message: '密码必须包含数字,字母,且不少于8位',
             }  
          ]"
        ></van-field>
        <span
          v-show="userInfo.password"
          @click="userInfo.password = ''"
          class="remove iconfont"
        >&#xe658;</span>
      </div>
      <!-- 条款 条例 -->
      <div class="terms" v-if="showWhatType !== 'resetPassWord'">
        <van-checkbox class="checked" v-model="userBoolean.checked"></van-checkbox>
        <span>
          为保障您的个人隐私权益,请在点击同意按钮前认真阅读下方协议:《
          <i>黑房隐私政策</i>
          》及《
          <i>黑房用户服务协议</i>
          》
        </span>
      </div>
      <!-- 提交 -->
      <van-button
        :disabled="isDisabled"
        class="submit"
        type="info"
        block
      >{{ showWhatType == 'resetPassWord' ? '提交' : '注册' }}</van-button>
    </van-form>
    <!-- 验证码 -->
    <Random :show="show" @closePopup="closePopup" @sureEvent="sureEvent" />
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Random from "../../components/Random.vue";
import formRulesminxins from "../../mixins/formRules";
import robutRulesmixins from "../../mixins/robutRules.js";
import { reqRegister } from "../../api/index";
export default {
  mixins: [formRulesminxins, robutRulesmixins],
  name: "ResetPassWordOrRegister",
  components: { NavBar, Random },
  data() {
    return {};
  },
  computed: {
    // 根据query传参决定展示的是修改密码还是注册
    showWhatType() {
      return this.$route.query.show;
    }
  },
  methods: {
    // 发送注册或重置密码接口请求
    async sendRegisterOrReset(params) {
      if (this.showWhatType == "resetPassWord") {
        // 修改密码接口
        console.log("修改密码");
      } else {
        // 注册接口
        const result = await reqRegister(params);
        const { code, msg, data } = result;
        if (code === 0) {
          this.$toast({
            message: "注册成功,欢迎您使用黑房",
            type: "success",
            duration: 1000,
            forbidClick: true,
            onOpened: () => this.$router.replace("/home")
          });
        } else {
          this.$toast({
            message: data,
            type: "fail",
            duration: 1000,
            forbidClick: true
          });
        }
      }
    }
  },
  watch: {
    showWhatType(nv, ov) {
      console.log("@@");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
