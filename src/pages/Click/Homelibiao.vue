<template>
  <!-- 房源列表展示 -->
  <ul class="homeList">
    <li
      v-show="dataList.length>0"
      class="homeItem"
      v-for="(item,index) in dataList"
      :key="item.house[0].hId+index"
      @click="goDeatil(item.house[0])"
    >
      <img :src="item.house[0].imgurl" />
      <div class="homeItem_r">
        <h6 class="title">
          <span>{{item.hType}}-</span>
          <span>{{item.house[0].hName}}{{item.house[0].hFeature}}-{{item.house[0].hOrientantion}}卧</span>
        </h6>
        <p class="homeMsg">
          <span>{{item.house[0].hSize}}㎡</span>|
          <span>{{item.house[0].floor}}/{{item.house[0].hId}}层</span>|
          <span>朝{{item.house[0].hOrientantion}}</span>
        </p>
        <p class="address">{{"房源距市桥站步行约485米"}}</p>
        <div class="tag">
          <van-tag style="margin-right:3px" type="primary">保障</van-tag>
          <van-tag style="margin-right:3px" type="success ">押一付一</van-tag>
          <van-tag style="margin-right:3px" type="success ">{{item.house[0].hStyle}}</van-tag>
          <van-tag style="margin-right:3px" type="success ">{{item.house[0].hFeature}}</van-tag>
        </div>
        <p class="price">¥{{item.house[0].hPrice}}/月</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { findWulist } from "../../api";
export default {
  data() {
    return {
      dataList: [],
      show: true
    };
  },
  methods: {
    getList() {
      let flag1 = new Promise((resolve, reject) => {
        findWulist(1).then(result => {
          resolve(result.data);
        });
      });
      let flag2 = new Promise((resolve, reject) => {
        findWulist(2).then(result => {
          resolve(result.data);
        });
      });
      let flag3 = new Promise((resolve, reject) => {
        findWulist(3).then(result => {
          resolve(result.data);
        });
      });
      let flag4 = new Promise((resolve, reject) => {
        findWulist(4).then(result => {
          resolve(result.data);
        });
      });
      Promise.all([flag1, flag2, flag3, flag3]).then(result => {
        result.forEach(item => {
          if (item.length > 1) {
            item.forEach(children => {
              this.dataList.push(children);
            });
          } else {
            this.dataList.push(item[0]);
          }
        });
      });
    },
    goDeatil(item) {
      this.$router.push({
        path: "/detail",
        query: {
          item
        }
      });
    }
  },
  mounted() {
    this.$toast({
      message: "数据加载中...",
      type: "loading",
      duration: 1000,
      forbidClick: true,
      onOpened: () => this.getList()
    });
  }
};
</script>
<style scoped lang="less">
.homeList {
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 12px;
  padding-bottom: 78px;
}
.homeList .homeItem {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid #999999;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.homeList .homeItem img {
  width: 103px;
  height: 103px;
  margin-right: 10px;
}
.homeList .homeItem .homeItem_r {
  flex: 1;

  .title {
    white-space: nowrap;
    span {
      font-weight: 700;
      font-size: 14px;
    }
  }
  .homeMsg {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: #333333;
  }
  .address {
    font-size: 14px;
    line-height: 28px;
    font-weight: 400;
    color: #333333;
  }
  .price {
    color: #fd5b54;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
  }
}
</style>