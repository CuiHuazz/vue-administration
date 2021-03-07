<template>
  <div class="id" size-sensor-id="1" style="position: relative">
    <div class="row lear-wrapper">
      <div class="lear-login">
        <div class="login-center1" style="z-index: 100">
          <div class="login-header text-center">
            <h1>管理系统(VUE)</h1>
          </div>
          <form>
            <div class="form-group has-feedback feedback-left">
              <input type="text" placeholder="请输入您的用户名" class="form-control" name="username" id="username" /><span
                class="help-block"
              ></span>
              <span class="mdi mdi-account form-control-feedback" aria-hidden="true"></span>
            </div>
            <div class="form-group has-feedback feedback-left">
              <input type="password" placeholder="请输入密码" class="form-control" id="password" name="password" /><span
                class="help-block"
              ></span>
              <span class="mdi mdi-lock form-control-feedback" aria-hidden="true"></span>
            </div>

            <div class="form-group">
              <button id="login_btn" class="btn btn-block btn-primary" type="button">立即登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <canvas
      width="1280"
      height="641"
      style="
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.8;
      "
    ></canvas>
  </div>
</template>

<script>
import CanvasNest from 'canvas-nest'
export default {
  mounted() {
    const config = {
      // 配置
      color: '255, 0, 255', // 线条颜色
      pointColor: '255,0,255', // 节点颜色
      zIndex: 99 // 画面层级
    }
    this.$nextTick(() => {
      const cn = new CanvasNest(document.getElementById('app'), config)
    })
  }
}
</script>

<style lang="scss" scoped>
@import url('./css/bootstrap.css');
// @import url('./css/materialdesignicons.css');
@import url('./css/style.min.css');

.lear-wrapper {
  position: relative;
}
.lear-login {
  display: flex !important;
  min-height: 100vh;
  align-items: center !important;
  justify-content: center !important;
}
.login-center1 {
  background: #fff;
  min-width: 38.25rem;
  padding: 2.14286em 3.57143em;
  border-radius: 5px;
  margin: 2.85714em 0;
}
.login-header {
  margin-bottom: 1.5rem !important;
}
.login-center .has-feedback.feedback-left .form-control {
  padding-left: 38px;
  padding-right: 12px;
}
.login-center .has-feedback.feedback-left .form-control-feedback {
  left: 0;
  right: auto;
  width: 38px;
  height: 38px;
  line-height: 38px;
  z-index: 4;
  color: #dcdcdc;
}
.login-center .has-feedback.feedback-left.row .form-control-feedback {
  left: 15px;
}
</style>