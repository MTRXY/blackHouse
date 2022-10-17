<template>
  <div class="myHome">
    <h4 class="home_title">我的家服</h4>
    <div class="line_H"></div>
    <div class="other">
      <div class="left">
        <img class="icon" src="../../assets/img/mine/cart.png" />
        <div class="message">
          <h6 class="title">
            省心搬家
            <i class="youjt iconfont">&#xe73d;</i>
          </h6>
          <p class="text">¥81起全程搬运</p>
        </div>
      </div>
      <div class="line_S"></div>
      <div class="right">
        <img class="icon" src="../../assets/img/mine/卫生.png" />
        <div class="message">
          <h6 class="title">
            省心搬家
            <i class="youjt iconfont">&#xe73d;</i>
          </h6>
          <p class="text">$81起全程搬运</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.myHome {
  background: #4471f3;
  height: 140px;
  position: relative;
  z-index: 1;
  margin-top: -10px;
  .home_title {
    height: 30px;
    line-height: 15px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 1.5px;
  }
  .line_H {
    position: absolute;
    height: 1px;
    background-color: #ededed;
    width: 100%;
    left: 0;
    opacity: 0.3;
  }
  .other {
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    .left,
    .right {
      width: 50%;
      display: flex;
      // justify-content: center;
      align-items: center;
      .icon {
        width: 34px;
        height: 25px;
      }
      .message {
        line-height: 20px;
        margin-left: 5px;
        .title {
          font-size: 14px;
          color: #ffffff;
          .youjt {
            font-size: 6.5px;
          }
        }
        .text {
          color: #d7d9de;
          font-size: 12px;
        }
      }
    }
    .right {
      margin-left: 14px;
    }
    // 竖线
    .line_S {
      width: 1px;
      background-color: #ededed;
      height: 50%;
      opacity: 0.3;
    }
  }
}
</style>
