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
        <el-button type="text" @click="open" class="login-text">登录</el-button>
        <el-button type="text" @click="open" class="login-text">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    //点击logo，新标签打开首页
    clickLogo() {
      let link = this.$router.resolve({
        path: "./home",
      });
      window.open(link.href, "_blank");
    },
     open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
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
        color:@themeColor;
        cursor: pointer;
      }
    }
  }
}
</style>