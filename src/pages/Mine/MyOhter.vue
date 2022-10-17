<template>
  <div class="myOther">
    <ul class="headNav">
      <li>
        <img src="../../assets/img/mine/耳机.png" />
        <span>客服</span>
      </li>
      <li>
        <img src="../../assets/img/mine/足迹.png" />
        <span>足迹</span>
      </li>
      <li>
        <img src="../../assets/img/mine/约看.png" />
        <span>约看</span>
      </li>
      <li>
        <img src="../../assets/img/mine/合同.png" />
        <span>合同</span>
      </li>
    </ul>
    <h6 class="title">期待您的选择</h6>
    <div class="promise">
      <div class="left">入住有承诺,安租有保障</div>
      <div class="right">
        查看
        <i style="font-size:6px" class="iconfont">&#xe73d;</i>
      </div>
    </div>
    <ul class="option">
      <li>
        <img src="../../assets/img/mine/银行卡.png" />
        <span>写卡办证</span>
      </li>
      <li>
        <img src="../../assets/img/mine/信息.png" />
        <span>协调邻里</span>
      </li>
      <li>
        <img src="../../assets/img/mine/进度.png" />
        <span>服务进度查询</span>
      </li>
      <li>
        <img src="../../assets/img/mine/权益.png" />
        <span>保障权益</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" spoced>
// 选择
.myOther {
  background: #ffffff;
  height: 206px;
  margin-top: -27px;
  position: relative;
  z-index: 1;

  .headNav {
    width: 100%;
    height: 52.5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    li {
      box-sizing: border-box;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 15.5px;
        height: 15.5px;
        vertical-align: text-bottom;
        margin-right: 5px;
      }

      span {
        font-size: 12px;
        color: #222222;
      }
    }
  }

  .title {
    font-size: 15px;
    color: #111111;
    margin-bottom: 15px;
  }

  .promise {
    height: 40px;
    line-height: 40px;
    background: rgba(245, 248, 255, 0.5);
    border-radius: 5px;
    padding: 0 9px;
    margin-bottom: 12.5px;
    .left {
      float: left;
      color: #3c61cc;
      font-size: 13px;
    }
    .right {
      height: 20px;
      width: 50px;
      background: #4471f3;
      border-radius: 10px;
      float: right;
      color: #ffffff;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      margin-top: 10px;
      position: relative;
      img {
        width: 4.6px;
        height: 7.4px;
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  .option {
    background: pink;
    li {
      float: left;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 50px;
      span {
        font-size: 11px;
      }
      img {
        width: 25px;
        height: 17.5px;
      }
    }
  }
}
</style>