/* 
此文件用于放机器人验证
    <Random :show="show" @closePopup="closePopup" @sureEvent="sureEvent" /> 
*/
import { reqGetCode } from './../api';
export default {
    data() {
        return {
            isDisabled: true, //登陆按钮状态
            show: false, //模态框展示
            times: 60, // 倒计时时间
            timer: null, //定时器
            getCode: true, //倒计时开启状态
        };
    },
    methods: {
        /*********验证码发送验证***********/
        // 防机器人验证
        emulationVerify() {
            // 正则验证
            this.$refs.form
                .validate('phone')
                .then(() => {
                    // 成功验证
                    this.$toast.loading({
                        message: '正在获取验证码...',
                        forbidClick: true,
                        duration: 1000,
                        onClose: () => {
                            this.show = true;
                        },
                    });
                })
                .catch(() => {
                    // 失败验证
                    return;
                });
        },
        // 机器人验证通过回调
        async sureEvent(value) {
            console.log('验证成功,发送验证码');
            // 获取验证码接口
            const result = await reqGetCode(this.userInfo.phone);
            if (result.code == 0) {
                // 成功则开启倒计时
                this.getCode = false;
                this.timer = setInterval(() => {
                    this.times--;
                }, 1000);
                this.$toast({
                    message: '验证码发送成功',
                    type: 'success',
                    duration: 500,
                });
            } else {
                // 失败则提示 无事发生
                this.$toast({
                    message: '发送失败,请检查网络后重试',
                    type: 'fail',
                    duration: 500,
                });
            }
        },
        // 关闭弹窗
        closePopup(boole) {
            this.show = boole;
        },
    },
    watch: {
        // 监视时间
        times(nv) {
            if (nv < 1) {
                clearInterval(this.timer); //到时间清除定时器
                this.getCode = true;
            }
        },
    },
};
