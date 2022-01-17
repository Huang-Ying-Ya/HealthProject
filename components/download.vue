<template>
  <div class="download">
    <div class="download-title">
      <span class="iconfont icon-download">&#xf0304;</span>
      <span>下载中心</span>
    </div>
    <div class="download-content">
      <div>健康中国行动纲领</div>
      <div>全民健康宣传手册</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DownLoad'
};
</script>

<style scoped lang="less">
.download {
  padding-top: 10px;
  height: 260px;
  .icon-download {
    font-size: 20px;
    color: @themeColor;
    vertical-align: bottom;
  }
  .download-title {
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d7d7d7;
  }
  .download-content {
    cursor: pointer;
    margin-top: 15px;
    div {
      margin-bottom: 10px;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
</style>