<template>
  <div class="inner-module">
    <div class="inner-module-name">
      <span class="inner-module-name-box">{{ this.innerModuleName }}</span>
    </div>
    <el-row :gutter="20" class="inner-module-content">
      <el-col :span="6">
        <div class="grid-content inner-img-box">
          <img src="@/assets/images/logo.jpg" class="inner-img" />
        </div>
      </el-col>
      <el-col :span="14">
        <div class="grid-content">
          <div class="title">
            <span class="iconfont icon-point">&#xe757;</span>
            <p class="content-title">
              我再马路边捡到一分钱，把它交给警察叔叔手里面哈
            </p>
            <span class="iconfont">&#xe603;</span>
            <span class="content-number">6716</span>
            <span class="iconfont">&#xe666;</span>
            <span class="content-number">113</span>
            <span class="iconfont">&#xe60b;</span>
            <span class="content-number">9</span>
          </div>
          <div class="title">
            <span class="iconfont icon-point">&#xe757;</span>
            <p class="content-title">
              我再马路边捡到一分钱，把它交给警察叔叔手里面哈
            </p>
            <span class="iconfont">&#xe603;</span>
            <span class="content-number">6716</span>
            <span class="iconfont">&#xe666;</span>
            <span class="content-number">113</span>
            <span class="iconfont">&#xe60b;</span>
            <span class="content-number">9</span>
          </div>
          <div class="title">
            <span class="iconfont icon-point">&#xe757;</span>
            <p class="content-title">
              我再马路边捡到一分钱，把它交给警察叔叔手里面哈
            </p>
            <span class="iconfont">&#xe603;</span>
            <span class="content-number">6716</span>
            <span class="iconfont">&#xe666;</span>
            <span class="content-number">113</span>
            <span class="iconfont">&#xe60b;</span>
            <span class="content-number">9</span>
          </div>
          <div class="title">
            <span class="iconfont icon-point">&#xe757;</span>
            <p class="content-title">
              我再马路边捡到一分钱，把它交给警察叔叔手里面哈
            </p>
            <span class="iconfont">&#xe603;</span>
            <span class="content-number">6716</span>
            <span class="iconfont">&#xe666;</span>
            <span class="content-number">113</span>
            <span class="iconfont">&#xe60b;</span>
            <span class="content-number">9</span>
          </div>
          <div class="title">
            <span class="iconfont icon-point">&#xe757;</span>
            <p class="content-title">
              我再马路边捡到一分钱，把它交给警察叔叔手里面哈
            </p>
            <span class="iconfont">&#xe603;</span>
            <span class="content-number">6716</span>
            <span class="iconfont">&#xe666;</span>
            <span class="content-number">113</span>
            <span class="iconfont">&#xe60b;</span>
            <span class="content-number">9</span>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content comparison" v-if="this.moduleName==='现代医学篇'||'传统医学篇'">
          <div class="comparison-btn" v-show="this.moduleName=='现代医学篇'">与传统医学对比</div>
          <div class="comparison-btn" v-show="this.moduleName=='传统医学篇'">与现代医学对比</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "InnerModule",
  props: ["innerModuleName","moduleName"],
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.inner-module {
  margin-top: 20px;
  .inner-module-name {
    text-align: left;
    margin-bottom: 10px;
    .inner-module-name-box {
      text-align: left;
      border-left: 3px solid @themeColor;
      font-size: 18px;
      padding-left: 5px;
      cursor: pointer;
      &:hover {
        color: @themeColor;
      }
    }
  }
  .inner-module-content {
    padding-bottom: 10px;
    border-bottom: 1px solid #d7d7d7;
    .inner-img-box {
      width: 100%;
      height: 150px;
      .inner-img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-bottom: 10px;
      .icon-point {
        color: #e1e1e1;
      }
      .content-title {
        display: inline-block;
        width: 352px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        margin-right: 5px;
        vertical-align: bottom;
        cursor: pointer;
        &:hover {
          color: @themeColor;
        }
      }
      .content-number {
        font-size: 12px;
      }
    }

    .comparison {
      border-left: 1px dashed #d7d7d7;
      height: 140px;
      line-height: 140px;
      .comparison-btn {
        font-size: 16px;
        cursor: pointer;
        &:hover {
          color: @themeColor;
        }
      }
    }
  }
  .inner-module-content:last-child {
    border-bottom: none;
    padding-bottom: 0px;
  }
}
</style>