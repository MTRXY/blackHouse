<template>
  <div class="navBar">
    <van-nav-bar
      :border="false"
      placeholder
      safe-area-inset-top
      fixed
      :title="title"
      :right-text="rightText"
      @click-left="clickLeft"
      @click-right="clickRight"
    >
      <template #left v-if="leftIcon">
        <van-icon size="25px" :name="leftIcon.name" :color="leftIcon.color" class="icon"></van-icon>
      </template>
      <!--  插槽，自定义右侧按钮  -->
      <template v-if="rightText" #right>
        <van-icon v-if="rightIconRst.place === 'left'" :name="rightIconRst.icon" />
        <span style="color:#1989fa">{{rightText}}</span>
        <van-icon v-if="rightIconRst.place === 'right'" :name="rightIconRst.icon" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    // 标题 值为字符串
    title: {
      type: String
    },
    // 左侧图标
    leftIcon: {
      type: Object,
      default: () => ({
        color: "1989fa",
        name: "arrow-left"
      })
    },
    // 左侧回退途径以及参数
    leftPath: {
      type: Object
    },
    // 右侧文字 值为字符串
    rightText: {
      type: String,
      default: ""
    },
    // 右侧图标
    rightIcon: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      rightIconRst: { icon: "", place: "" } // 图标name，大小，位置
    };
  },
  watch: {
    rightIcon: {
      handler(nv, ov) {
        this.rightIconRst = Object.assign(this.rightIconRst, nv);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // 左侧点击事件
    clickLeft() {
      if (!this.leftPath) {
        // 如果传参没有路径则点击回到上一页
        this.$router.back();
      } else {
        // 有路径则返回到路径
        this.$router.push({
          path: this.leftPath.path,
          query: {
            target: this.leftPath.target
          }
        });
      }
    },
    // 自定义右侧点击事件
    clickRight() {
      this.$emit("rightEvent");
    }
  }
};
</script>

<style lang="less" scoped>
::v-deep {
  .van-nav-bar,
  .van-nav-bar__content {
    height: 45px; // 锁死导航栏高度，方便计算剩余高度
  }
}
.van-icon {
  font-size: 25px;
  position: absolute;
  left: 0;
}
</style>