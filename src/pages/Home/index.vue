<template>
  <div class="home">
    <banner />
    <search />
    <div class="container">
      <mainOption />
      <Special />
      <lifeStyle />
      <WarmMarket />
    </div>
  </div>
</template>

<script>
import banner from "./banner.vue";
import search from "./search.vue";
import mainOption from "./mainOption.vue";
import Special from "./special.vue";
import lifeStyle from "./lifeStyle.vue";
import WarmMarket from "./warmMarket.vue";

export default {
  name: "Home",
  data() {
    return {
      isDisabled: false
    };
  },
  components: {
    banner,
    search,
    mainOption,
    Special,
    lifeStyle,
    WarmMarket
  }
};
</script>

<style>
.home {
  height: 100%;
}
.container {
  /* height: 100%; */
  background-color: #f2f2f2;
  padding: 44px 20px 73px 20px;
}
</style>