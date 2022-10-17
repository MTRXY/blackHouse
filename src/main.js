import Vue from 'vue';
import App from './App.vue';
// 路由引入
import router from '../src/router';
// vuex 统一状态管理引入
import store from './store';
// vant组件
import './plugins';
// rem适配
import 'amfe-flexible';
// 清除默认样式
import 'reset-css';
// 引入icon图标
import './assets/icon/iconfont.css';
import './assets/icon/iconfont';
// 引入swicper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'f31d93b3d2e728cfc4a82d1732e9b7d0',
    plugin: [
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.PolyEditor',
        'AMap.CircleEditor',
    ],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4',
});
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
