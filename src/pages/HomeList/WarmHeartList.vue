<template>
  <div class="warmHeartList">
    <ul class="main">
      <!-- 死数据  -->
      <li class="item" v-for="item in 5" :key="item+'!'">
        <div
          class="bg"
          :style="{'background':`url(${testUrl}) 100% no-repeat`, 'background-size': '100% 100%'}"
        ></div>
        <div class="bottom">
          <div class="text">
            <p class="message">测试数据,假数据</p>
            <p class="newMoney">
              ￥12
              <i class="oldMoney">￥10</i>
            </p>
          </div>
          <div class="footer">
            <div class="footer_left">
              <img src="../../assets/img/mine/active.png" />
              <span class="name">假的网名</span>
            </div>
            <div class="msgIco">
              <img src="../../assets/img/mine/信息.png" alt />
              <span>111</span>
            </div>
          </div>
        </div>
      </li>
      <!-- 真实数据 -->
      <li class="item" v-for="item in dataList" :key="item.id">
        <div
          class="bg"
          :style="{'background':`url(${item.url}) 100% no-repeat`, 'background-size': '100% 100%'}"
        ></div>
        <div class="bottom">
          <div class="text">
            <p class="message">{{item.overView+"真是数据奥"}}</p>
            <p class="newMoney">
              ￥{{item.id+10}}
              <i class="oldMoney">￥{{item.id+5}}</i>
            </p>
          </div>
          <div class="footer">
            <div class="footer_left">
              <img src="../../assets/img/mine/active.png" />
              <span class="name">{{item.userPhone}}</span>
            </div>
            <div class="msgIco">
              <img src="../../assets/img/mine/信息.png" alt />
              <span>{{item.id*5}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reqGetWarmHeartList } from "../../api";
import loading from "../../mixins/loading"; //获取数据中...
export default {
  name: "warmHeartList",
  mixins: [loading],
  data() {
    return {
      dataList: [],
      testUrl:
        "https://ts1.cn.mm.bing.net/th/id/R-C.bc385e68d9687c1cdcf97b1f5f774e65?rik=6eUo%2fhoHO3gA%2fw&riu=http%3a%2f%2ftouxiangkong.com%2fuploads%2fallimg%2f20203301255%2f2020%2f3%2fRZbAzq.jpg&ehk=DK3j9ukdmijwxZw5kjYMWFPju9QDFdTO6FZEftNxXxI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
    };
  },
  methods: {
    // 列表数据初始化
    async dataInit() {
      this.loading(); //执行加载提示
      const result = await reqGetWarmHeartList();
      if (result.code === 0) {
        this.$toast.clear(); //获取到数据后 关闭提示
        this.dataList = result.data;
      }
    },
    goDetaile(item) {
      this.$router.push({
        path: "/liestyleDeatil",
        query: {
          data: item
        }
      });
    }
  },
  mounted() {
    this.dataInit();
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
  padding: 0;
}
img {
  border: none;
  display: block;
}
.warmHeartList {
  margin-top: 16px;
  height: 100%;
  overflow-y: scroll;
  .main {
    height: 100%;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      position: relative;
      margin-bottom: 14px;
      border: 1px solid #ccc;
      width: 166px;
      height: 367px;
      border-radius: 5px;
      .bg {
        width: 100%;
        height: calc(100% - 87px);
      }
      .bottom {
        width: 100%;
        height: 87px;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .text {
          padding-left: 8px;
          font-size: 12px;
          color: #111111;
          .message {
            padding-top: 12px;
            width: 150px;
            height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-shadow: #cccccc 1.5px 1.5px 2px;
            // line-height: 15px;
          }
          .newMoney {
            color: #4869ac;
            font-size: 10px;
            .oldMoney {
              text-decoration: line-through;
            }
          }
        }
        .footer {
          width: 100%;
          display: flex;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          justify-content: space-between;
          align-items: center;
          .footer_left {
            img {
              width: 17px;
              height: 17px;
              margin-right: 8px;
            }
            .name {
              width: 70px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 11.11px;
            }
          }
          .msgIco {
            img {
              width: 15px;
              height: 15px;
              margin-right: 8px;
            }
            span {
              font-size: 10px;
            }
          }
          .footer_left,
          .msgIco {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>