/* 此文件为测试文件 */

import { ADD_COUNT } from '../constant';
// 定义初始状态
const state = {
    count: 0,
};

//定义actions 用于派遣数据修改任务
const actions = {
    // {commit} 为解构出commit方法 用来电泳mutations中的方法
    // value为在vue中使用此方法时传入的参数 非必要

    addCount({ commit }, value) {
        // ADD_COUNT 为调用mutations的方法名称
        commit(ADD_COUNT, value);
    },
};

// 定义mutations 用来修改状态 !(所有的状态只能在这里修改)
const mutations = {
    // state可以获取到上面定义的状态 value则为actions传入的值

    ADD_COUNT(state, value) {
        state.count += value;
    },
};

// 统一导出 导出后在 modules下面的 index.js中引入
export default {
    // 开启命名空间
    namespaced: true,
    state,
    mutations,
    actions,
};
