<template>
  <div class="header">
    <div class="slogan">
      全民健康网-人人为我、我为人人的健康知识宣传、分享和创作公益平台，服务健康中国战略
    </div>
    <div class="headBar">
      <div class="logo" @click="clickLogo">
        <img src="../assets/images/logo.jpg" />
        <span class="siteName">全民健康网</span>
      </div>
      <div class="search">
        <input type="text" class="searchInput" placeholder="搜索" />
        <span class="iconfont searchBtn">&#xe60a;</span>
        <span class="searchKeyword">热门搜索关键词：</span>
      </div>
      <div class="login">
        <el-button
          type="text"
          @click="dialogLoginFormVisible = true"
          class="login-text"
        >
          登录
        </el-button>
        <el-button
          type="text"
          @click="dialogRegisterFormVisible = true"
          class="login-text"
        >
          注册
        </el-button>
      </div>
      <!-- <div class="personal-center">
        <nuxt-link to="./personalcenter" class="personal-center-link">
          个人中心
        </nuxt-link>
      </div> -->
      <el-dialog
        title="登录"
        :visible.sync="dialogLoginFormVisible"
        width="450px"
        custom-class="dialog-login"
      >
        <el-form :model="form">
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="用户名/邮箱/手机号"
              class="dialog-input"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="密码"
              class="dialog-input"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="dialog-login-remember">
              <el-checkbox v-model="checked">记住登录</el-checkbox>
              <span
                ><nuxt-link
                  to="./forgetPassword"
                  target="_blank"
                  class="dialog-forget-passowrd"
                  >忘记密码</nuxt-link
                ></span
              >
            </div>
          </el-form-item>
          <el-form-item>
            <div class="dialog-login-button">
              <el-button
                type="primary"
                @click="dialogLoginFormVisible = false"
                class="dialog-login-submit"
              >
                登录
              </el-button>
              <span>
                <span>没有账号？</span>
                <span class="dialog-login-register" @click="goRegister"
                  >立即注册</span
                >
              </span>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog
        title="注册"
        :visible.sync="dialogRegisterFormVisible"
        class="dialog-register"
        width="450px"
      >
        <el-form :model="form">
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="请输入手机号"
              class="dialog-input-register"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="验证码"
              class="dialog-verification"
            ></el-input>
            <el-button type="primary" class="dialog-verification-button"
              >点击获取验证码</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="请输入密码"
              class="dialog-input-register"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.name"
              autocomplete="off"
              placeholder="确认密码"
              class="dialog-input-register"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">
              我已看过并同意<a class="dialog-agreement">《健康网XXX》</a>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="dialogRegisterFormVisible = false"
              class="dialog-register-submit"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
        <div>
          已有账号，请<span class="dialog-register-login" @click="goLogin"
            >登录</span
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogLoginTableVisible: false,
      dialogLoginFormVisible: false,
      dialogRegisterFormVisible: false,
      dialogRegisterFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      checked: false,
    };
  },
  methods: {
    //点击logo，新标签打开首页
    clickLogo() {
      let link = this.$router.resolve({
        path: "./home",
      });
      window.open(link.href, "_blank");
    },
    goRegister() {
      this.dialogLoginFormVisible = false;
      this.dialogRegisterFormVisible = true;
    },
    goLogin() {
      this.dialogLoginFormVisible = true;
      this.dialogRegisterFormVisible = false;
    },
  },
};
</script>

<style scoped lang="less">
.header {
  .slogan {
    font-size: 12px;
    color: @themeColor;
    margin-bottom: 10px;
  }

  .headBar {
    display: -webkit-flex;

    .logo {
      display: -webkit-flex;
      float: left;
      margin-left: 20px;
      margin-right: 100px;
      vertical-align: center;
      height: 40px;
      line-height: 40px;
      cursor: pointer;

      img {
        height: 40px;
        width: 40px;
      }

      .siteName {
        font-weight: 700;
      }
    }

    .search {
      position: relative;
      display: -webkit-flex;
      height: 30px;
      width: 800px;

      .searchInput {
        width: 300px;
        height: 30px;
        background-color: #fff;
        border-radius: 10px;
        outline: none;
        border: 1px solid #c4c7ce;
        box-shadow: 1px 1px 8px 0 #c4c7ce;
        padding-left: 10px;
        position: absolute;
      }

      .searchBtn {
        font-size: 20px;
        color: @themeColor;
        position: absolute;
        top: 5px;
        left: 285px;
        border: none;
        outline: none;
        cursor: pointer;
      }

      .searchKeyword {
        position: absolute;
        left: 330px;
        top: 5px;
        font-size: 13px;
      }
    }

    .login {
      float: right;
      display: -webkit-flex;

      .login-text {
        font-size: 16px;
        margin-left: 10px;
        color: @themeColor;
        cursor: pointer;
      }
    }
    .personal-center {
      float: right;
      display: -webkit-flex;
      .personal-center-link {
        font-size: 16px;
        margin-left: 10px;
        color: @themeColor;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
  .dialog-input {
    width: 330px;
    margin-bottom: 30px;
  }
  .dialog-input-register {
    width: 330px;
    margin-bottom: 20px;
  }
  .dialog-verification {
    width: 200px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
  .dialog-login {
    .dialog-login-remember {
      display: -webkit-flex;
      justify-content: space-between;
      padding-left: 45px;
      padding-right: 45px;
      .dialog-forget-passowrd {
        text-decoration: none;
        color: @themeColor;
      }
    }
    .dialog-login-button {
      margin-top: 30px;
      margin-bottom: 10px;
      display: -webkit-flex;
      justify-content: space-between;
      padding-left: 45px;
      padding-right: 45px;
      .dialog-login-submit {
        width: 120px;
        height: 40px;
        border-radius: 20px;
      }
      .dialog-login-register {
        color: @themeColor;
        cursor: pointer;
      }
    }
  }
  .dialog-register {
    .dialog-verification-button {
      width: 125px;
      height: 40px;
    }
    .dialog-agreement {
      text-decoration: none;
      color: @themeColor;
    }
    .dialog-register-submit {
      height: 40px;
      width: 330px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .dialog-register-login {
      color: @themeColor;
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>