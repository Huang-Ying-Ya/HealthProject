<template>
  <div class="traditionalAndCovid">
    <div class="traditional">
      <div class="traditional-title">
        <span class="iconfont icon-traditional">&#xe7c3;</span>
        <span class="traditional-title-text">传统医学养生专栏</span>
      </div>
      <div class="traditional-content">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content traditional-module">
              <img src="../assets/images/logo.jpg" class="traditional-img" />
              <div><span class="traditional-module-name">三伏天灸</span></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content traditional-module">
              <img src="../assets/images/logo.jpg" class="traditional-img" />
              <div><span class="traditional-module-name">三九天灸</span></div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content traditional-module">
              <img src="../assets/images/logo.jpg" class="traditional-img" />
              <div><span class="traditional-module-name">针灸</span></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content traditional-module">
              <img src="../assets/images/logo.jpg" class="traditional-img" />
              <div><span class="traditional-module-name">推拿</span></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="covid">
      <div class="covid-title">
        <span class="iconfont icon-covid">&#xe753;</span>
        <span class="covid-title-text">传统医学养生专栏</span>
      </div>
      <div class="covid-content">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content">
              <span class="covid-module">疫情资讯，实时数据</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="covid-module">深入了解正在传播的病毒</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content">
              <span class="covid-module">个人防护应知应会</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <span class="covid-module">各地防控直达</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTraditionalAndCovid",
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;
  margin-top: 10px;
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
.traditionalAndCovid {
    border-left: 1px dashed #D7D7D7;
}
.traditional {
  margin-top: 10px;
  border-bottom: 1px dashed #d7d7d7;
  .traditional-title {
    padding-bottom: 10px;
    font-size: 18px;
    .icon-traditional {
      color: @themeColor;
      font-size: 24px;
      vertical-align: bottom;
    }
    .traditional-title-text {
      cursor: pointer;
      &:hover {
        color: @themeColor;
      }
    }
  }
  .traditional-content {
    .traditional-module {
      cursor: pointer;
      .traditional-img {
        width: 160px;
        height: 90px;
      }
      .traditional-module-name {
        font-size: 16px;
        &:hover {
          color: @themeColor;
        }
      }
    }
  }
}
.covid {
  margin-top: 10px;
  .covid-title {
    padding-bottom: 10px;
    font-size: 18px;
    .icon-covid {
      color: @themeColor;
      font-size: 24px;
      vertical-align: bottom;
    }
    .covid-title-text {
      cursor: pointer;
      &:hover {
        color: @themeColor;
      }
    }
  }
  .covid-content {
    .covid-module {
      cursor: pointer;
      font-size: 16px;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
</style>