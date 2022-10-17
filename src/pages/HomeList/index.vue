<template>
  <div class="homeList">
    <NavBar :title="title" :leftPath="{path:'/home'}" />
    <van-tabs
      class="tabs"
      color="#4869AC"
      v-model="active"
      animated
      swipeable
      sticky
      offset-top="45px"
      title-active-color="#4869AC"
      title-inactive-color="#000"
      @rendered="changeTitle"
      @change="changeTitle"
    >
      <van-tab
        :to="{path:'/homeList',query:{target:'liestyle'}}"
        name="liestyle"
        title="Liestyle"
        replace
      >
        <LiestyleList />
      </van-tab>
      <van-tab
        :to="{path:'/homeList',query:{target:'warmHeart'}}"
        name="warmHeart"
        title="暖心市集"
        replace
      >
        <WarmHeartList class="WarmHeartList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import LiestyleList from "./LiestyleList.vue";
import WarmHeartList from "./WarmHeartList.vue";
export default {
  name: "HomeList",
  components: { NavBar, LiestyleList, WarmHeartList },
  data() {
    return {
      title: "" //NavBar 标题设置
    };
  },
  computed: {
    // 切换选项卡
    active: {
      get() {
        return this.$route.query.target;
      },
      set(value) {
        return this.$route.query.target;
      }
    }
  },
  methods: {
    // 标题修改
    changeTitle(name, title) {
      // this.$route.query.target = name;
      this.$router
        .push({
          path: "/homeList",
          query: {
            target: name
          }
        })
        .catch(() => {});
      this.title = title;
    }
  }
};
</script>

<style lang="less" scoped>
.homeList {
  height: 100%;
  .van-tabs__content {
    height: auto;
  }
}
</style>