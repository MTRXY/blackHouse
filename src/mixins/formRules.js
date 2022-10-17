/* 
此文件用于注册验证
*/
export default {
    data() {
        return {
            // 表单信息
            userInfo: {
                phone: '', //手机号
                code: '', //验证码
                password: '', //密码
            },
            // 表单信息信息验证
            userBoolean: {
                phone: false,
                password: false,
                checked: true, // 条例选择
            },
        };
    },
    methods: {
        // 手机号验证
        phoneValiDator(value) {
            let tempBoolean =
                /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(
                    value
                );
            this.userBoolean.phone = tempBoolean;
            return tempBoolean;
        },

        // 密码验证
        psdValiDator(value) {
            let tempBoolean =
                /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,16}$/.test(value);
            this.userBoolean.password = tempBoolean;
            return tempBoolean;
        },

        /********表单提交*********/
        // 提交
        submit(values) {
            let params = values;
            let message = '正在加载...';
            if (this.showWhatType == 'resetPassWord') {
            } else {
                message = '正在注册...';
                params = { ...values, username: values.phone };
            }

            this.$toast({
                type: 'loading',
                loadingType: 'spinner',
                message,
                deduration: 1500,
                forbidClick: true,
                onClose: () => this.sendRegisterOrReset(params),
            });
        },
    },
    watch: {
        // 判断是否满足条件 满足条件则可以点击提交
        userBoolean: {
            immediate: true,
            deep: true, //深度监视
            handler(nv) {
                if (nv.password && nv.phone && nv.checked) {
                    this.isDisabled = false;
                } else {
                    this.isDisabled = true;
                }
            },
        },
    },
};
