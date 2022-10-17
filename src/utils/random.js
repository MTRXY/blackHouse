/* 
该文件用于获取个数的随机数
length 表示要随机生成的数字长度 
*/

export default function (length) {
    let randomNub = '';
    for (let i = 0; i < length; i++) {
        randomNub += Math.floor(Math.random() * 10);
    }
    return randomNub;
}
