<template>
  <!-- 弹出层 获取验证码验证 -->
  <van-popup :value="show" class="popup" @open="open" @close="close">
    <div class="calculate">
      <span class="num">{{oneNum}}</span>
      <span class="add">+</span>
      <span class="num">{{twoNum}}</span>
      <span class="sum">=</span>
      <input type="number" autofocus v-model="sum" />
      <span class="refresh iconfont" @click="refresh">&#xe610;</span>
    </div>
    <div class="btns">
      <van-button class="btn" type="info" @click="sureSend">确定</van-button>
      <van-button class="btn" type="danger" @click="noSend">取消</van-button>
    </div>
  </van-popup>
</template>

<script>
import random from "../utils/random";
export default {
  name: "Random",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      oneNum: "", //验证第一个值
      twoNum: "", //验证第二个值
      sum: "" //验证的结果
    };
  },
  computed: {
    oneAndTwoSum() {
      return this.oneNum * 1 + this.twoNum * 1;
    }
  },
  mounted() {},
  methods: {
    // 打开模态框获取人机验证数字
    open() {
      this.oneNum = random(2) * 1;
      this.twoNum = random(2) * 1;
    },
    // 关闭模态框清空 input内容
    close() {
      this.sum = "";
    },
    // 验证码重置
    refresh() {
      this.oneNum = random(2) * 1;
      this.twoNum = random(2) * 1;
      this.sum = "";
    },
    noSend() {
      this.$emit("closePopup", false);
    },
    // 确定发送验证码
    sureSend() {
      if (this.sum == this.oneAndTwoSum) {
        // 成功自定义函数
        this.$toast({
          type: "success",
          message: "验证通过",
          duration: 700,
          onClose: () => {
            this.$emit("closePopup", false); //关闭模态框
            this.$emit("sureEvent"); //
          }
        });
      } else {
        this.$toast({
          type: "fail",
          message: "验证失败,请重试!",
          duration: 700,
          onClose: () => {
            // 刷新验证码
            this.refresh();
            // 失败自定义函数
            this.$emit("noSureEvent");
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scpond>
.popup {
  width: 72%;
  height: 30%;
  font-size: 20px;
  text-align: center;

  .calculate {
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    .num {
      width: 20%;
    }
    .add,
    .sum {
      width: 10%;
    }
    input {
      width: 15%;
      border: none;
      padding: 5px;
      border: 1px solid #b3aeae;
    }
    .refresh {
      margin: 0 10px;
    }
  }
  .btns {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 10px;
    .btn {
      margin: 0 20px;
    }
  }
}
</style>
