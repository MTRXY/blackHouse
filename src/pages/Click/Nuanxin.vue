<template>
  <div class="nuan">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="item in lieBiao" :key="item.id">
          <div class="liebiao">
            <img :src="item.url" />
            <p>{{ item.overView }}</p>
            <p>￥{{ item.price }}</p>
            <p class="peo">
              <span class="left">
                <img :src="item.url" alt />
                {{ item.overView }}
              </span>
              <span class="right">
                <van-icon name="smile-comment-o" />
                {{ item.id }}
              </span>
            </p>
          </div>
        </van-grid-item>
      </van-grid>
    </van-pull-refresh>
  </div>
</template>

<script>
import { findAllFair } from "../../api/index";
import { Toast } from "vant";

export default {
  data() {
    return {
      lieBiao: [],
      isLoading: false
    };
  },
  computed: {},
  watch: {},

  methods: {
    async getLie() {
      const result = await findAllFair();
      if (result.code === 0) {
        this.lieBiao = result.data;
      } else {
        this.$toast({
          type: "fail",
          message: "网络连接超时,请检查网络"
        });
      }
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  },
  created() {
    this.getLie();
  },
  mounted() {},
  components: {}
};
</script>
<style scoped>
.liebiao {
  display: flex;
  flex-direction: column;
}
.liebiao img {
  width: 158px;
  height: 312px;
}
.liebiao p {
  display: block;
  font-size: 12px;
  margin-top: 10px;
}
.peo {
  display: block;
  height: 17px;
}
.peo img {
  width: 17px;
  height: 17px;
  vertical-align: middle;
}
.peo span {
  height: 17px;
  line-height: 17px;
}
.left {
  vertical-align: middle;
  float: left;
  height: 17px;
  line-height: 17px;
}
.right {
  float: right;
}
</style>