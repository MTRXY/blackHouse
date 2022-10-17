/* 
此文件的是 组装模块并导出 store 的地方
*/
// 使用 vuex-persistedstate 插件 实现状态持久化
import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
// 这个下面引入的为模块化 vuex文件
import modules from './modules';

Vue.use(Vuex);
export default new Vuex.Store({
    getters,
    modules,
    // 配置vuex数据持久化
    plugins: [
        createPersistedState({
            // 默认存储在 localStorage 中
            // 也可配置成 sessionStorage cookie
            storage: window.sessionStorage, // 这是储存在sessionStorage中
            // 默认为全部存入 添加reducer方法 val为 vuex中的所有状态
            // 格式为{test:{count:1}}
            /* reducer(val) {
                                return {
                    count: val.test.count,
                };
            }, */
        }),
    ],
});
