<template>
  <div class>
    <van-tabs v-model="activeName">
      <van-tab title="通知" name="a" class="tongzi">
        <Neirong />
      </van-tab>
      <van-tab title="好友" name="b">
        <Neirongs />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Neirong from "./Neirong.vue";
import Neirongs from "./Neirongs.vue";
export default {
  data() {
    return {
      activeName: "a"
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  components: {
    Neirong,
    Neirongs
  }
};
</script>
<style scoped>
.van-tab__text.van-tab__text--ellipsis {
  margin-left: 100px;
}
</style>
