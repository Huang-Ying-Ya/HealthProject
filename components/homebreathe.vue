<template>
  <div class="breathe">
    <div class="breathe-title">
      <span class="iconfont icon-lung">&#xe81a;</span>
      <span class="breathe-title-text">慢性呼吸道病专栏</span>
    </div>
    <el-row type="flex" class="breathe-content" justify="center">
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">慢性支气管炎</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">慢性支气管扩张症</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="breathe-content" justify="center">
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">慢阻肺肺气肿</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">肺脓肿</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="breathe-content" justify="center">
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">慢性肺心病</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">支气管哮喘</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="breathe-content" justify="center">
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">慢性呼吸衰竭</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">肺结核</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="breathe-content" justify="center">
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">肺纤维化</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <span class="breathe-module">肺部肿瘤</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  home: "HomeBreathe",
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.breathe {
  margin-top: 10px;
  .breathe-title {
    padding-bottom: 40px;
    font-size: 18px;
    cursor: pointer;
    .breathe-title-text:hover {
      color: @themeColor;
    }
    .icon-lung {
      color: @themeColor;
      font-size: 24px;
      vertical-align: bottom;
    }
  }
  .breathe-content {
    margin-top: 10px;
    .breathe-module {
      font-size: 16px;
      padding: 10px;
      border: 1px solid #d7d7d7;
      cursor: pointer;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
</style>