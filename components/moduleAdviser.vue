<template>
  <div>
    <div class="adviser-title">
      <span class="adviser-title-name">
        <span class="iconfont icon-advisers">&#xe858;</span>
        <span>本栏鸣谢专家</span>
      </span>
    </div>
    <div class="adviser-content">
      <div class="adviser">
        <el-row>
          <el-col :span="10">
            <div class="grid-content">
              <img src="../assets/images/logo.jpg" class="adviser-photo" />
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content adviser-text">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">姓名:</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">
                    无名氏123123123123123123
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">身份：</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">医生</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="adviser">
        <el-row>
          <el-col :span="10">
            <div class="grid-content">
              <img src="../assets/images/logo.jpg" class="adviser-photo" />
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content adviser-text">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">姓名:</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">
                    无名氏123123123123123123
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">身份：</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">医生</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="adviser">
        <el-row>
          <el-col :span="10">
            <div class="grid-content">
              <img src="../assets/images/logo.jpg" class="adviser-photo" />
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content adviser-text">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">姓名:</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">
                    无名氏123123123123123123
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">身份：</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">医生</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="adviser">
        <el-row>
          <el-col :span="10">
            <div class="grid-content">
              <img src="../assets/images/logo.jpg" class="adviser-photo" />
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content adviser-text">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">姓名:</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">
                    无名氏123123123123123123
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">身份：</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">医生</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="adviser">
        <el-row>
          <el-col :span="10">
            <div class="grid-content">
              <img src="../assets/images/logo.jpg" class="adviser-photo" />
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content adviser-text">
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">姓名:</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">
                    无名氏123123123123123123
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <div class="grid-content adviser-info-left">身份：</div>
                </el-col>
                <el-col :span="16">
                  <div class="grid-content adviser-info">医生</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
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
      margin-top: 20px;
      font-size: 14px;
      .adviser-info  {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .adviser:last-child {
    border-bottom: none;
  }
}
</style>