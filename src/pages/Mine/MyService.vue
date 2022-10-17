<template>
  <div class="myService">
    <div class="head">
      <div class="head_left">
        <img class="head_active" src="../../assets/img/mine/kefu.png" />
        <div class="head_message">
          <p class="title">我的客服服务</p>
          <p class="txt">7*24小时为您守候</p>
        </div>
      </div>
      <!-- 更多 -->
      <div class="more" @click="goChat">
        <span>
          咨询更多问题
          <i style="font-size:6px" class="iconfont">&#xe667;</i>
        </span>
      </div>
    </div>
    <ul class="question" v-if="questionList.length>1">
      <li
        class="quest"
        v-for="quest in questionList"
        :key="quest.id"
        @click="seeAnswer(quest.id,quest.name)"
      >{{quest.name}}</li>
    </ul>
    <div v-else>还没有问题呢</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "MyService",
  methods: {
    ...mapActions("module_question", { getQuestion: "getQuestion" }),
    seeAnswer(id, name) {
      this.$router.push({
        path: "/answer",
        query: {
          id,
          name: name
        }
      });
    },
    goChat() {
      this.$router.push("/service");
    }
  },
  computed: {
    ...mapState("module_question", ["questionList"])
  },
  created() {
    // this.initData = this.questionList.filter((item, index) => index <= 4);
    // 如果列表没有长度则表示没有数据
    if (this.questionList.length < 1) {
      // 没有数据则调取数据
      this.getQuestion();
    } else {
      // 如果列表有长度则表示已经调取过接口了
      // 有数据则直接使用 不调取接口
      return;
    }
  }
};
</script>

<style lang="less" spoced>
.myService {
  background: #ffffff;
  height: 147px;
  box-sizing: border-box;

  .head {
    height: 35px;
    margin-bottom: 15px;

    .head_left {
      float: left;
      display: flex;

      .head_active {
        width: 35px;
        height: 35px;
        margin-right: 7.5px;
      }

      .head_message {
        .title {
          color: #222222;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .txt {
          color: #888888;
          font-size: 11px;
        }
      }
    }

    .more {
      line-height: 35px;
      float: right;
      color: #888888;
      font-size: 11px;
    }
  }

  .question {
    display: flex;
    flex-wrap: wrap;
    .quest {
      padding: 0 12px;
      height: 28px;
      margin: 5px;
      line-height: 28px;
      text-align: center;
      background: #f4f4f4;
      border-radius: 5px;
      color: #666666;
      font-size: 11px;
      overflow: hidden;
    }
  }
}
</style>