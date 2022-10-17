<template>
  <div class="amap-wrap">
    <NavBar />
    <el-amap vid="amapDemo" :zoom="zoom" :center="center">
      <el-amap-circle
        :center="center"
        strokeWeight="1"
        radius="1000"
        strokeColor="#1867c0"
        fillOpacity="0"
      ></el-amap-circle>
      <el-amap-marker
        v-for="(marker, index) in markers"
        :position="marker.position"
        :icon="marker.icon"
        :key="index"
      >
        <img
          class="redpacket__default--icon"
          :src="marker.icon"
          v-show="index == 0 || index == markers.length - 1"
        />
        <span class="span" v-show="index != 0 && index != markers.length - 1"></span>
      </el-amap-marker>
      <el-amap-polyline
        :path="polyline.path"
        :strokeColor="polyline.strokeColor"
        :strokeOpacity="polyline.strokeOpacity"
      ></el-amap-polyline>
    </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance, AMapManager } from "vue-amap";
import NavBar from "../../components/NavBar.vue";
export default {
  data() {
    return {
      map: null,
      zoom: 14,
      amapManager: new AMapManager(),
      center: [113.665412, 34.757975],

      markers: [
        {
          position: [113.665412, 34.757975],
          icon: "//img.zgzngj.com/share/redpacket_default.png"
        }
      ],
      polyline: {
        outlineColor: "orange",
        strokeColor: "green",
        strokeOpacity: 0.6,
        strokeWeight: 4,
        borderWeight: 1,
        zIndex: 20,
        path: [
          [119.986251, 30.542469],
          [119.979723, 30.54285],
          [119.971874, 30.543457],
          [119.967802, 30.543634],
          [119.961758, 30.5438713]
        ]
      }
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {
    // 线路规划
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.amap-wrap {
  height: 100vh;
}
html,
body,
#container {
  width: 100%;
  height: 100%;
}
</style>
<style type="text/css">
#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-transfer {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
.redpacket__default--icon {
  width: 40px;
  height: 45.86px;
}
.span {
  position: relative;
  top: 15px;
  width: 20px;
  height: 20px;
  display: block;
  border: 2px solid #ccc;
  background: #fff;
  border-radius: 50%;
}
.dn {
  display: none;
}
</style>
