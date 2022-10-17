export default {
    methods: {
        loading() {
            this.$toast({
                type: 'loading',
                forbidClick: true,
                duration: 0,
                message: '正在获取数据...',
            });
        },
    },
};
