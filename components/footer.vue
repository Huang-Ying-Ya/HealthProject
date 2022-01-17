<template>
  <div class="footer">
    <div class="footerBottom">
      <div class="about">
        <a class="footerNav">关于本站</a>
        <a class="footerNav">使用声明</a>
        <a class="footerNav">政策支持</a>
        <a class="footerNav">版权声明</a>
        <a class="footerNav">友情链接</a>
        <a class="footerNav">联系方式</a>
        <a class="footerNav">内容合作</a>
        <a class="footerNav">内容纠错</a>
        <a class="footerNav">版块问题</a>
        <a class="footerNav">版权问题</a>
      </div>
      <div class="permit">
        <a>@版权所有 网站备案许可</a>
      </div>
      <div class="dataDownload">
        <span>资料下载：</span>
        <a>健康中国行动纲领</a>
        <a>全民健康宣传手册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less">
.footer {
  .footerBottom {
    background-color: #f9f9f9;
    padding-bottom: 40px;
    .about {
      padding-top: 20px;
      .footerNav {
        font-size: 14px;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          color: @themeColor;
        }
      }
    }

    .permit {
      margin-top: 10px;
      font-size: 14px;
      a {
        cursor: pointer;
        &:hover {
          color: @themeColor;
        }
      }
    }

    .dataDownload {
      margin-top: 10px;
      font-size: 14px;
      a {
        color: @themeColor;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>