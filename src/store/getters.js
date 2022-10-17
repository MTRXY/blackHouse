/* 
此文件用于包装后导出所有需要用到的state属性
*/

export default {
    // 直接使用state.文件名.状态名
    count: state => state.test.count,
    // token: state => state.userInfo.userInfo.token,
};
