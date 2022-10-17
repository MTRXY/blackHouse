// 采用promise封装
import { Toast } from 'vant';
import axios from 'axios';
let BASE = '';
if (process.env.VUE_APP_ENV === 'dev') {
    console.log('现在是开发环境');
    BASE = '/api';
} else {
    console.log('现在是生产环境');
    BASE = process.env.VUE_APP_BASE_URL;
}
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise;
        if (type === 'GET') {
            promise = axios.get(BASE + url, { params: data });
        } else {
            promise = axios.post(BASE + url, data);
        }
        promise
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                Toast.fail('请求出错了' + error.message);
            });
    });
}
