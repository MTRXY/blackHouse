/* 
此文件用于统一并导出所有的 vuex内容
*/

import module_test from './module_test';

// 用户信息 模块
import module_userInfo from './module_userInfo';
// 导出后 在store文件下面的index中引入
// 客服问题模块
import module_question from './module_question';
export default {
    module_test,
    module_userInfo,
    module_question,
};
