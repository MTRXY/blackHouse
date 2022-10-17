## vuex 文件结构说明

```
|----|store // vuex 目录

|-------- |modules // 所有模块都在此目录中定义

|-------- | --------- |index.js // 所有模块导出后都在此文件导入并导出

|-------- | --------- |test.js // 模块化文件

|-------- |getters.js // 计算属性文件

|-------- |index.js // vuex导出最终文件

```

### vuex 使用规范

1. mutations 只能写同步 action 只能写异步

2. mutations 中的方法命名规范 : 全部大写 拼接单词使用 下划线连接 **例如:addCount === ADD_COUNT** 详情请看 constant.js 文件

3. 每个页面的模块需要写在 modules 文件内以 module\_开头 **例如 module_test** 切要在 modules 中的 index 中引入该文件 详情请看 module_test.js 文件
