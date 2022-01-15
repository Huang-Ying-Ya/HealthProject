<template>
  <div>
    <div class="adviser-title">
      <span class="adviser-title-name">
        <span class="iconfont icon-advisers">&#xe858;</span>
        <span>专家顾问</span>
      </span>
      <span class="adviser-more iconfont icon-more"> 更多 &#xe60b; </span>
    </div>
    <div class="adviser-content">
      <div class="adviser">
        <img src="../assets/images/logo.jpg" class="adviser-photo" />
        <div class="adviser-text">
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">医师：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-name">
                代静旺123123123123123123
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">所属单位：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-unit">
                涞水县赵各庄中心卫生院dadsasdasdasdas dA
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">个人简介：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-introduce">
                我是涞水县赵各庄中心卫生院的医师,我研究的了领域是智能医学，我喜欢人工智能，有一天，我要让这个世界全部被人工智能取代......
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="adviser">
        <img src="../assets/images/logo.jpg" class="adviser-photo" />
        <div class="adviser-text">
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">医师：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-name">
                代静旺123123123123123123
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">所属单位：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-unit">
                涞水县赵各庄中心卫生院dadsasdasdasdas dA
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">个人简介：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-introduce">
                我是涞水县赵各庄中心卫生院的医师,我研究的了领域是智能医学，我喜欢人工智能，有一天，我要让这个世界全部被人工智能取代......
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="adviser">
        <img src="../assets/images/logo.jpg" class="adviser-photo" />
        <div class="adviser-text">
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">医师：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-name">
                代静旺123123123123123123
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">所属单位：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-unit">
                涞水县赵各庄中心卫生院dadsasdasdasdas dA
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content adviser-info-left">个人简介：</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content adviser-introduce">
                我是涞水县赵各庄中心卫生院的医师,我研究的了领域是智能医学，我喜欢人工智能，有一天，我要让这个世界全部被人工智能取代......
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAdviser",
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  border-radius: 4px;
  min-height: 10px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.adviser-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .adviser-title-name {
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    .icon-advisers {
      vertical-align: bottom;
      font-size: 24px;
      color: @themeColor;
    }
  }
  .adviser-more {
    cursor: pointer;
    color: #797979;
    font-size: 14px;
    &:hover {
      color: @themeColor;
    }
  }
}
.adviser-content {
  // border: 0.1px solid #d7d7d7;
  background: rgba(37, 182, 160, 0.3);
  padding: 5px;
  .adviser-info-left {
    display: inline-block;
    width: 70px;
  }
  .adviser {
    margin-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px dashed #d7d7d7;
    .adviser-photo {
      width: 100px;
      height: 100px;
    }
    .adviser-text {
      text-align: left;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 10px;
      font-size: 14px;
      .adviser-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .adviser-unit {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .adviser-introduce {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
    }
  }
  .adviser:last-child {
    border-bottom: none;
  }
}
</style>