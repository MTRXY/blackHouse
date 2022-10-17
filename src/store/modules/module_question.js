import { SET_QUESTION, SET_ANSWET, SET_ANSWET_ID } from '../constant';
// 获取问题列表接口
import { reqGetQuestion, reqGetAnswet } from '../../api';
const state = {
    // 初始化空问题数组
    questionList: [],
    answet: '', // 问题答案
    answetId: '', //问题ID
};

const actions = {
    // 调取获取问题列表接口
    getQuestion({ commit }, value) {
        return new Promise((resolve, reject) => {
            reqGetQuestion()
                .then(result => {
                    commit(SET_QUESTION, result.data);
                })
                .catch(error => console.log(error.message));
        });
    },
    //调取问题答案接口
    getAnswet({ commit }, id) {
        return new Promise((resolve, reject) => {
            reqGetAnswet(id)
                .then(result => {
                    commit(SET_ANSWET, result.data);
                })
                .catch(error => console.log(error.message));
        });
    },
};
const mutations = {
    // 问题列表存入questionList
    SET_QUESTION(state, value) {
        state.questionList = value;
    },
    // 问题答案存入 answet
    SET_ANSWET(state, value) {
        state.answet = value;
    },
    //ID存入
    SET_ANSWET_ID(state, value) {
        state.answetId = value;
    },
};

export default {
    // 开启命名空间
    namespaced: true,
    state,
    mutations,
    actions,
};
