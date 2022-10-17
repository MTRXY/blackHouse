<template>
  <div class="Lifestyle">
    <NavBar :title="title" />
    <!-- 物品描述 -->
    <van-field v-model="Lifestyle.overview" label="物品描述" />
    <!-- 图片上传 -->
    <van-uploader v-model="Lifestyle.fileList" multiple />
    <!-- 提交按钮 -->
    <van-button class="confirm" type="info">确认上传</van-button>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "LifeStyle",
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      Lifestyle: {
        overview: "",
        fileList: [
          // Uploader 根据文件后缀来判断是否为图片文件
          // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        ]
      },
      title: "新增好物"
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.confirm {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
