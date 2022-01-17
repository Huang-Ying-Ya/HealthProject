<template>
  <div class="forget-password">
    <div class="forget-password-box">
      <el-steps
        :active="active"
        finish-status="success"
        space="200px"
        align-center
      >
        <el-step title="确认账号"></el-step>
        <el-step title="完成验证"></el-step>
        <el-step title="重置密码"></el-step>
      </el-steps>
      <div v-show="active === 0" class="step-content step-one">
        <el-form>
          <el-form-item>
            <el-input
              type="text"
              autocomplete="off"
              placeholder="用户名/邮箱/手机号"
              class="input-content first-input"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="text"
              autocomplete="off"
              placeholder="图形验证码"
              class="input-verification"
            >
            </el-input>
            <el-button class="verification-code">我是图形验证码</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div v-show="active === 1" class="step-content step-two">
        <div class="number-info">
          完成绑定手机
          <span class="input-number">12312431234</span>
          的验证后，即可重置密码
        </div>
        <el-form>
          <el-form-item>
            <el-input
              type="text"
              autocomplete="off"
              placeholder="短信验证码"
              class="input-message"
            >
            </el-input>
            <el-button type="primary" class="message-code"
              >发送短信验证码</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div v-show="active === 2" class="step-content step-three">
        <el-form label-width="100px">
          <el-form-item label="新密码">
            <el-input
              type="password"
              placeholder="密码"
              autocomplete="off"
              class="input-password">
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input
              type="password"
              placeholder="确认密码"
              autocomplete="off">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button class="step-button" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "personalCenterLayout",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
  },
};
</script>

<style scoped lang="less">
.forget-password {
  width: 100%;
  min-height: 600px;
  background: #f6f7f9;
  padding-top: 100px;
  .forget-password-box {
    text-align: center;
    margin: auto;
    background-color: #fff;
    border-radius: 10px;
    padding-top: 30px;
    width: 500px;
    height: 300px;
    .step-content {
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      width: 400px;
      height: 120px;
    }
    .step-button {
      margin-top: 10px;
      width: 140px;
      height: 40px;
      border-radius: 20px;
    }
    .step-one {
      .first-input {
        padding-top: 10px;
      }
      .input-content {
        width: 330px;
        margin-bottom: 20px;
      }
      .input-verification {
        width: 180px;
      }
      .verification-code {
        width: 150px;
        height: 40px;
      }
    }
    .step-two {
      .number-info {
        margin-top: 10px;
        margin-bottom: 30px;
        .input-number {
          color: @themeColor;
        }
      }

      .input-message {
        width: 200px;
      }
      .message-code {
        height: 40px;
        width: 130px;
      }
    }
    .step-three {
      .input-password {
        margin-bottom: 20px;
      }
    }
  }
}
</style>