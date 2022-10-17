<template>
  <div class="service">
    <div class="service_head">
      <NavBar :title="title" />
    </div>
    <div class="service_main">
      <div class="chat" ref="record">
        <ul class="list">
          <li
            class="main"
            :class="msg.type==='kf'?'kfMain':'userMain'"
            v-for="(msg,index) in messageList"
            :key="index"
          >
            <img :src="kfUrl" v-show="msg.type==='kf'" />
            <p class="message">{{msg.msg}}</p>
            <img :src="userUrl" v-show="msg.type==='user'" />
          </li>
        </ul>
      </div>
      <div class="inputArea">
        <van-field
          v-model.trim="question"
          rows="1"
          :autosize="{maxHeight:200}"
          type="textarea"
          maxlength="200"
          placeholder="按下enter发送 enter+alt换行"
          class="input"
          @keyup.enter.native="br"
        />
        <button class="send" @click="send">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/NavBar.vue";
export default {
  name: "Service",
  components: { NavBar },
  data() {
    return {
      kfUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.OLe5jFm1hBk7YZTmp_TyHAHaKV?pid=ImgDet&rs=1",
      userUrl:
        "https://tupian.qqw21.com/article/UploadPic/2019-4/20194321522744689.jpg",
      question: "",
      messageList: [],
      questionList: [
        "我吃了,您吃了吗?",
        "我要是在线,还会让自动回复回复你？",
        "正在与魔仙堡进行信号连接，有重要事情请留言",
        "没回消息就是在玩羊了个羊,你通关了吗？"
      ]
    };
  },
  methods: {
    // 信息换行
    br(e) {
      if (e.ctrlkey && e.keyCode === 13) this.message = this.message + "&#10;";
      else this.send();
    },
    // 信息发送
    send() {
      const message = this.question;
      this.messageList.push({
        type: "user",
        msg: message
      });
      this.question = "";
      let res = this.questionList.find(item => item.includes(message));
      setTimeout(() => {
        this.messageList.push({
          type: "kf",
          msg: res ? res : "刚才的消息没看到，请您重新再发一遍..."
        });
      }, 1000);
    }
  },
  computed: {
    // 标题设置
    title() {
      switch (this.$route.query.type) {
        case "KF":
          return "黑房客服";

        case "WT":
          return "委托查询客服";

        case "ZF":
          return "租房小助手";

        default:
          return "";
      }
    }
  },
  mounted() {
    this.messageList.push({
      type: "kf",
      msg: "什么风把您吹来了?是TiMi赢了么"
    });
  },
  watch: {
    messageList: {
      deep: true,
      handler(nv, ov) {
        this.$refs.record.scrollIntoView();
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.service {
  height: 100%;
  display: flex;
  flex-direction: column;
  .service_main {
    flex: 1;
    border: 2px solid skyblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .chat {
      flex: 1;
      overflow-y: auto;
      .list {
        padding: 10px;
      }
      .main {
        min-height: 40px;
        margin-bottom: 10px;
        display: flex;
        img {
          width: 40px;
          height: 40px;
          border-radius: 5px;
        }
        .message {
          position: relative;
          background: #4471f3;
          font-size: 12px;
          padding: 0 5px;
          display: flex;
          max-width: 80%;
          align-items: center;
          border-radius: 8px;
          color: #fff;
        }
      }
      .list {
        .kfMain {
          img {
            margin-right: 10px;
          }
          .message {
            &::before {
              content: "";
              width: 0;
              height: 0;
              border: 6px solid transparent;
              border-right: 6px solid #4471f3;
              position: absolute;
              left: -12px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
        .userMain {
          img {
            margin-left: 10px;
          }
          justify-content: flex-end;
          .message {
            position: relative;
            border: 1px solid #cccccc;
            font-size: 14px;
            padding: 0 5px;
            display: flex;
            max-width: 80%;
            align-items: center;
            &::after {
              content: "";
              width: 0;
              height: 0;
              border: 6px solid transparent;
              border-left: 6px solid #4471f3;
              position: absolute;
              right: -12px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .inputArea {
      background: #fff;
      position: sticky;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: flex-end;
      .input {
        float: left;
        width: 80%;
        color: skyblue;
        border-radius: 10px;
      }
      .send {
        width: 20%;
        border: none;
        height: 45px;
        background: skyblue;
        font-size: 16px;
        color: #ffffff;
        border-radius: 15px;
      }
    }
  }
}
</style>