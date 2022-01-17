<template>
  <div class="width-style guide">
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="grid-content">
          <div class="guide-name">
            <span class="iconfont icon-guide">&#xe69e;</span>
            <span>现代医学篇-指导思想</span>
          </div>
          <div class="guide-introduce">
            我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介
            我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介我是指导思想简介
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content guide-img-box">
          <img src="@/assets/images/logo.jpg" class="guide-img" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <Download />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content">
          <div class="acticle-show-box">
            <span class="article-show">文章展示</span>
          </div>
          <ArticleShow/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <ModuleAdviser />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Download from "@/components/download.vue";
import ModuleAdviser from "@/components/moduleAdviser.vue";
import ArticleShow from '@/components/articleShow.vue'
export default {
  layout: "homeLayout",
  components: { Download, ModuleAdviser,ArticleShow},
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
.guide {
  .guide-img-box {
    height: 260px;
    .guide-img {
      width: 100%;
      height: 100%;
    }
  }
  .guide-name {
    margin-top: 10px;
    font-size: 22px;
    .icon-guide {
      font-size: 26px;
      color: @themeColor;
      vertical-align: bottom;
    }
  }
  .guide-introduce {
    margin: auto;
    margin-top: 50px;
    width: 70%;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .acticle-show-box {
    text-align: left;
    .article-show {
      font-size: 20px;
      border-left: 3px solid @themeColor;
      padding-left: 5px;
    }
  }
}
</style>