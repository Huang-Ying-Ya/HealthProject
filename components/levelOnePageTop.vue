<template>
  <el-row :gutter="20">
    <el-col :span="9">
      <div class="grid-content">
        <div class="module-name">
          <span class="iconfont icon-name" v-show="this.moduleName==='传统医学篇'">&#xe81d;</span>
          <span class="iconfont icon-name" v-show="this.moduleName==='现代医学篇'">&#xe80b;</span>
          <span class="iconfont icon-name" v-show="this.moduleName==='人体使用指南'">&#xead2;</span>
          <span class="iconfont icon-name" v-show="this.moduleName==='疾病预防'">&#xe634;</span>
          <span class="iconfont icon-name" v-show="this.moduleName==='心理健康指南'">&#xe61e;</span>
          <span class="module-name-text">{{ this.moduleName }}</span>
        </div>
        <img src="@/assets/images/logo.jpg" class="modern-medical-img" />
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-content">
        <HottestShow />
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">
        <Download />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Download from "@/components/download.vue";
import HottestShow from "@/components/hottestShow.vue";
export default {
  name: "LevelOnePageTop",
  components: { Download, HottestShow },
  props:['moduleName'],
};
</script>

<style scoped lang="less">
.grid-content {
  min-height: 36px;
  height: 240px;
}
.module-name {
  font-size: 20px;
  .icon-name {
    font-size: 24px;
    color: @themeColor;
  }
}
.modern-medical-img {
  width: 100%;
  height: 100%;
}
</style>