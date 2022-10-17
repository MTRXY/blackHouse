<template>
  <div class="myInvite">
    <h6 class="invite_title">邀请有礼</h6>
    <div class="card">
      <div class="left">
        <div class="zuo">
          <p class="title">邀好友得租金</p>
          <p class="msg">TA签约你得200元</p>
          <p class="btn">
            立即领取
            <i style="font-size:6px" class="iconfont">&#xe73e;</i>
          </p>
        </div>
        <div class="you">
          <img src="../../assets/img/mine/banner.png" />
        </div>
      </div>
      <div class="right">
        <div class="zuo">
          <p class="title">邀好友做房东</p>
          <p class="msg">平分1000元好礼</p>
          <p class="btn">
            立即领取
            <i style="font-size:6px" class="iconfont">&#xe73f;</i>
          </p>
        </div>
        <div class="you">
          <img src="../../assets/img/mine/banner2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" spoced>
// 邀请
.myInvite {
  background: #ffffff;
  height: 127.5px;
  width: 100%;
  margin-bottom: 15\px;
  .invite_title {
    padding-bottom: 12.5px;
    font-size: 16px;
    color: #111111;
    font-weight: 700;
  }
  .card {
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      width: 49.5%;
      box-sizing: border-box;
      height: 98%;
      background: #000;
      background: #fffbf2;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
      padding-left: 6px;
      padding-top: 6px;
      display: flex;
      position: relative;
      justify-content: space-between;
      .zuo {
        width: 80%;
        .title {
          font-size: 12px;
          margin-bottom: 5px;
        }
        .msg {
          color: #666666;
          font-size: 8px;
        }
        .btn {
          font-size: 10px;
          margin-top: 15px;
        }
      }
      .you {
        position: absolute;
        right: -5px;
        bottom: 10px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .left {
      color: #d69a7e;
    }
    .right {
      color: #fac16e;
    }
  }
}
</style>