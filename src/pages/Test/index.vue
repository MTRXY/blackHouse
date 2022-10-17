<template>
  <div>
    <h1>首页</h1>
    <button @click="sendTest">测试验证码</button>
    {{test}}
    <input type="text" v-model="code" />
    <button @click="sendTest1">测试注册</button>
    {{test1}}
    <button @click="sendTest2">登陆测试</button>
  </div>
</template>

<script>
import { reqGetCode, reqRegister, reqLogin } from "../../api/index";
export default {
  name: "Test",
  data() {
    return {
      test: "",
      test1: "",
      code: 0
    };
  },
  methods: {
    sendTest() {
      reqGetCode(16638906845).then(res => {
        console.log(res);
      });
    },
    sendTest1() {
      reqRegister({
        code: this.code,
        phone: 16638906845,
        password: "QAZplm123.",
        username: 16638906845
      }).then(res => {
        console.log(res);
      });
    },
    sendTest2() {
      reqLogin({
        password: "QAZplm123.",
        username: 16638906845
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>