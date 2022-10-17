<template>
  <div id="app">
    <router-view></router-view>
    <mainNav v-if="$route.meta.isShowFooter" />
  </div>
</template>

<script>
import mainNav from "@/components/mainNav.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    mainNav,
    NavBar
  },
  created() {}
};
</script>

<style lang="less" scoped></style>
