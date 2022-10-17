module.exports = {
    publicPath: './',
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.105.177.10:8080', // 跨域地址
                ws: true,
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'tabbar-height': '146px',
                        'tabbar-item-active-color': '#1A65FF',
                        'tabbar-item-icon-size': '30px',
                        'tabbar-item-active-background-color': 'transparent',
                        'toast-default-width': '110px',
                        'toast-default-height': '110px',
                        'field-input-text-color': '#4471F3',
                    },
                },
            },
        },
    },
    // 去掉所有的console.log
    chainWebpack(config) {
        config.optimization.minimizer('terser').tap(args => {
            args[0].terserOptions.compress.drop_console = true;
            return args;
        });
    },
};
