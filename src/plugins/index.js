import Vue from "vue";
import {
  Button, //按钮
  NavBar, // 头部导航
  Icon, //icon图标
  Form, //表单
  Field, //输入框
  Checkbox, //复选框
  Toast, //提示通知
  Dialog, //弹出框
  Popup, //弹出层
  Tabbar, //公用底部标签栏
  TabbarItem, //标签栏配置元素
  Search, //搜索框
  Grid, //功能选择
  GridItem, //功能选择
  Swipe, //swipe轮播
  SwipeItem, //swipe组件
  Tab, //标签单个
  Tabs, //多标签
  NoticeBar, //提示框
  Calendar, //日历
  Cell,
  DropdownMenu,
  DropdownItem,
  Card, //卡片
  Tag, //Tag标签
  Image as VanImage, //图片
  PullRefresh, //下拉刷新
  Uploader,//图片上传
} from "vant";
Vue.use(Tag);
Vue.use(Card);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Cell);
Vue.use(Calendar);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NoticeBar);
Vue.use(VanImage);
Vue.use(PullRefresh);
Vue.use(Uploader)
