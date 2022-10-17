<template>
  <div class="Home">
    <div class="heared">
      <span class="biao">
        <van-icon class="icon" name="arrow-left" @click="goToUrl('/home')" />
      </span>

      <van-cell class="selectla" title="日期" :value="text" @click="show = true" />
      <van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
      <van-search class="ss" v-model="hName" placeholder="想住哪里?搜一搜"></van-search>
      <span class="xiaoxi" @click="goToUrl('/message')">
        <van-icon class="icon" name="comment-o" />
      </span>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" active-color="#87CEFA" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>

    <!-- 房源列表展示 -->
    <ul class="homeList">
      <li
        v-show="homeList.length>0"
        class="homeItem"
        v-for="item in homeList"
        :key="item.house[0].hId"
        @click="goDeatil(item.house[0])"
      >
        <img :src="item.house[0].imgurl" />
        <div class="homeItem_r">
          <h6 class="title">
            <!-- 通过flag判断是什么 -->
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
            <van-tag style="margin-right:5px" type="primary">保障</van-tag>
            <van-tag style="margin-right:5px" type="success ">押一付一</van-tag>
            <van-tag style="margin-right:5px" type="success ">近地铁</van-tag>
            <van-tag style="margin-right:5px" type="success ">有电梯</van-tag>
          </div>
          <p class="price">¥{{item.house[0].hPrice}}/月</p>
        </div>
      </li>
      <li v-show="homeList.length<1">暂时还没有房源,看看别的吧</li>
    </ul>
  </div>
</template>

<script>
import { reqSearchHome, findWulist, reqHomeDetaile } from "../../api";
export default {
  data() {
    return {
      //合租
      homeList: [],
      //搜索框
      // hAddress: "",
      hName: "",
      text: "",
      show: false,
      value: "",
      //下拉框
      value1: 0,
      value2: "a",
      value3: "d",
      option1: [
        { text: "位置", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "户型", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "租金", value: "d" },
        { text: "1000-2000", value: "e" },
        { text: "2000-5000", value: "f" }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
    add() {
      this.$router.push("/home");
    },

    //合租,公寓等
    async getfalist(flag) {
      const result = await findWulist(flag);
      if (result.code === 0) {
        this.homeList = result.data;
      }
    },
    // 跳转详情页
    goDeatil(item) {
      this.$router.push({
        path: "/detail",
        query: {
          item
        }
      });
    },
    // 页面跳转
    goToUrl(path) {
      this.$router.push(path);
    }
  },
  created() {
    if (this.homeList) {
      this.$toast({
        type: "loading",
        message: "数据加载中...",
        duration: 1000,
        forbidClick: true
      });
    } else {
      return;
    }
  },
  mounted() {
    const flag = this.$route.query.flag;
    flag ? this.getfalist(flag) : null;
  },
  components: {}
};
</script>
<style scoped lang="less">
.icon {
  font-size: 20px;
}
.heared {
  width: 370px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
}
.selectla {
  width: 100px;
  align-items: center;
}
.ss {
  margin-top: 3px;
  width: 200px;
  flex: 3;
}

.homeList {
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 12px;
  height: 123px;
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
  width: 109px;
  height: 109px;
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
