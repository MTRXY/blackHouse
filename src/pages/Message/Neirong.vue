<template>
  <div class>
    <van-grid>
      <van-grid-item
        class="ss"
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/psp3tywbmf0cy0lx468m2aair04mk9ftwdbb2e6594-2573-4cc7-8cd4-71732885ab20"
        text="服务通知"
      ></van-grid-item>
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/psx44k7p7vsrb9fxgubogfdr77ju0vopfiaf5fb843-cb7e-4cc2-a341-11df8ade94c3"
        text="优惠活动"
      />
      <van-grid-item
        icon="https://lanhu.oss-cn-beijing.aliyuncs.com/psxbg5b75wpjbgjuc0a4cvtoj5dqnbxd1he7241f7b-41f7-4d1a-96b8-ca03f6b8eee0"
        text="系统消息"
      />
    </van-grid>

    <!-- <van-card
      desc="合租 整租 服务等相关问题沟通"
      title="客服"
      thumb="https://lanhu.oss-cn-beijing.aliyuncs.com/pssf21svsz3wqxustvyvymjbm7q9x2cc1el937890ef-2506-4f4d-a9bd-99cd26b875a5"
    />-->

    <div class="kefu" @click="goService('KF')">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/pssf21svsz3wqxustvyvymjbm7q9x2cc1el937890ef-2506-4f4d-a9bd-99cd26b875a5"
        alt
      />
      <h5>客服</h5>
      <br />
      <p>合租 整租 服务等相关问题沟通</p>
    </div>
    <div class="kefu" @click="goService('WT')">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps31chswr9beefkywtmcmt9jdv8jdaludkf2506b74a-cbd5-4fb0-b2e2-7cc4312ffff5"
        alt
      />
      <h5>委托咨询</h5>
      <br />
      <p>合租 整租 服务等相关问题沟通</p>
    </div>
    <div class="kefu" @click="goService('ZF')">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/psla8okmrjj73ur24g7surlik4ctnmdva54056c15-3c74-4e5c-9a14-0f4f299006dd"
        alt
      />
      <h5>租房小助手</h5>
      <br />
      <p>合租 整租 服务等相关问题沟通</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goService(type) {
      this.$router.push({
        path: "/service",
        query: {
          type
        }
      });
    }
  }
};
</script>
<style scoped>
.ss {
  margin-left: 50px;
}
.ww {
  margin-right: 260px;
}
.kefu {
  width: 100%;
  height: 60px;
}
.kefu img {
  width: 40px;
  float: left;
  margin-top: 10px;
  margin-left: 15px;
}
.kefu h5 {
  font-size: 14px;
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}
.kefu p {
  font-size: 12px;
  float: left;
  margin-left: 20px;
  margin-top: 5px;
}
</style>
