import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    { path: '/', redirect: 'loading' },
    {
        path: '/login',
        name: 'login',
        title: '登录页',
        component: () => import('../pages/Login'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/PhoneOrPassword',
        title: '手机号或密码登录',
        component: () => import('../pages/Login/PhoneOrPassword.vue'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/register',
        name: 'register',
        title: '注册页或找回密码',
        component: () => import('../pages/Register'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/loading',
        name: 'loading',
        title: '广告加载页',
        component: () => import('../pages/Loading'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/home',
        name: 'home',
        title: '主页',
        component: () => import('../pages/Home'),
        meta: {
            isShowFooter: true,
        },
    },
    {
        path: '/message',
        name: 'message',
        title: '消息页',
        component: () => import('../pages/Message'),
        meta: {
            isShowFooter: true,
        },
    },
    {
        path: '/favorite',
        name: 'favorite',
        title: '收藏页',
        component: () => import('../pages/Favorite'),
        meta: {
            isShowFooter: true,
        },
    },
    {
        path: '/mine',
        name: 'mine',
        title: '我的页面',
        component: () => import('../pages/Mine'),
        meta: {
            isShowFooter: true,
        },
    },
    {
        path: '/share',
        name: 'share',
        title: '合租页',
        component: () => import('../pages/Share'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/click',
        name: 'click',
        title: '收藏',
        component: () => import('../pages/Click'),
        meta: {
            isShowFooter: true,
        },
    },
    {
        path: '/detail',
        name: 'detail',
        title: '详情',
        component: () => import('../pages/Detail'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/ditu',
        name: 'ditu',
        title: '地图',
        component: () => import('../pages/Ditu'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/answer',
        name: 'answer',
        title: '答案',
        component: () => import('../pages/Answet'),
        meta: {
            isShowFooter: false,
        },
    }, //添加房源接口
    {
        path: '/addHouse',
        name: 'addHouse',
        title: '添加房源',
        component: () => import('../pages/House/add'),
        meta: {
            isShowFooter: false,
        },
    }, //添加lifestyle数据
    {
        path: '/addLifestyle',
        name: 'addLifestyle',
        title: '添加Lifestyle',
        component: () => import('../pages/Lifestyle/add'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/service',
        name: 'service',
        component: () => import('../pages/Service'),
        meta: {
            isShowFooter: false,
        },
    },
    {
        path: '/homeList',
        name: 'homeList',
        title: '',
        component: () => import('../pages/HomeList'),
        meta: {
            isShowFooter: false,
        },
    },
    //  此路由为测试路由

    {
        path: '/test',
        name: 'test',
        title: '测试',
        component: () => import('../pages/Test'),
    },
];
const router = new VueRouter({
    mode: 'hash',
    routes,
});
export default router;
