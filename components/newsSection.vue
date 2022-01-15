<template>
  <div class="newsSection">
    <div class="news-icon-title">
      <span class="iconfont icon-news">&#xe650;</span>
      <span class="news-title">今日健康焦点</span>
    </div>
    <el-row :gutter="20" class="news">
      <el-col :span="8">
        <div class="grid-content">
          <img src="../assets/images/logo.jpg" class="news-img" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <p class="news-content">一只公猪下崽了，一只母猪上树了</p>
          <p class="news-date">2022-01-14</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="news">
      <el-col :span="8">
        <div class="grid-content">
          <img src="../assets/images/logo.jpg" class="news-img" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <p class="news-content">一只公猪下崽了，一只母猪上树了</p>
          <p class="news-date">2022-01-14</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="news">
      <el-col :span="8">
        <div class="grid-content">
          <img src="../assets/images/logo.jpg" class="news-img" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <p class="news-content">一只公猪下崽了，一只母猪上树了</p>
          <p class="news-date">2022-01-14</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="news">
      <el-col :span="8">
        <div class="grid-content">
          <img src="../assets/images/logo.jpg" class="news-img" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <p class="news-content">一只公猪下崽了，一只母猪上树了你好丫啦一二三四五</p>
          <p class="news-date">2022-01-14</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="news">
      <el-col :span="8">
        <div class="grid-content">
          <img src="../assets/images/logo.jpg" class="news-img" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <p class="news-content">一只公猪下崽了，一只母猪上树了你好丫啦一二三</p>
          <p class="news-date">2022-01-14</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewsSection",
};
</script>

<style scopde lang="less">
.news-icon-title {
  padding-top: 10px;
  .icon-news {
    color: @themeColor;
    font-size: 30px;
    margin-right: 5px;
  }
  .news-title {
    font-size: 24px;
  }
}
.news {
  cursor: pointer;
  padding-top:10px;
  border-bottom: 1px solid #D7D7D7;
  &:last-child {
    border-bottom: none;
  }
  .news-img {
    height: 90px;
    width: 90px;
    margin-left: 5px;
  }
  .news-content {
    margin-top: 10px;
    font-size: 16px;
    padding-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    &:hover {
      color:@themeColor;
    }
  }
  .news-date {
    color:#797979;
    font-size: 12px;
    text-align: right;
    margin-top: 20px;
    padding-right: 20px;
  }
}
</style>