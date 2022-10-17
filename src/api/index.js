import ajax from './axios';

// 获取验证码接口
export const reqGetCode = phone => ajax(`/getCode`, { phone });

// 注册接口
export const reqRegister = ({ code, username, password, phone }) =>
    ajax(`/register.do`, { code, username, password, phone });

// 登陆接口
export const reqLogin = params => ajax(`/user/login.do`, params, 'POST');

// 搜索房屋
export const reqSearchHome = ({ hAddress, hName }) => ajax(`/findAllByName`, { hAddress, hName });

// 获取房源详情
export const reqHomeDetaile = houseId => ajax(`/findHouseById.do`, { houseId }, 'GET');

// 添加房源接口
export const reqAddHome = params => ajax(`/addhouse.do`, { params }, 'POST');

// 删除房源接口
export const reqDelHome = houseId => ajax(`/deletehouse.do`, { houseId }, 'POST');

//查询所有集市信息
export const findAllFair = () => ajax(`/fair/findAllFair`);
//合租公寓
export const findWulist = flag => ajax(`/findJointRent`, { flag });
// 获取所有客服常见问题列表
export const reqGetQuestion = () => ajax(`/findAllProblem`);
// 获取问题答案
export const reqGetAnswet = id => ajax(`/findProblemAnswer`, { id });

//查询所有liestyle信息
export const findAllLieStyle = () => ajax(`/liestyle/findAllLieStyle`);

// 查询所有暖心市集信息
export const reqGetWarmHeartList = () => ajax(`/fair/findAllFair`);
