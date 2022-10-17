module.exports = () => ({
  plugins: [
    // autoprefixer 自动补齐 CSS3 前缀，适配不同浏览器
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
    }),
    require("postcss-pxtorem")({
      rootValue: 75, //设计稿元素尺寸/10，这里设计稿宽度为 750
      propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
      unitPrecision: 3, //保留rem小数点多少位
      selectorBlackList: ["el-input", "el-step", "no-"], //则是一个对css选择器进行过滤的数组，比如你设置为['el-']，那所有el-类名里面有关px的样式将不被转换，这里也支持正则写法。
      replace: true,
      mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12, //px小于3的不会被转换
    }),
  ],
});
