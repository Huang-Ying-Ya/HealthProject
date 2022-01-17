<template>
  <div class="width-style">
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="grid-content">
          <div class="module-name">
            <span class="iconfont icon-modern">&#xe676;</span>
            <span class="module-name-text">现代医学篇</span>
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
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content">
          <InnerModule innerModuleName="指导思想" moduleName="现代医学"/>
          <InnerModule innerModuleName="诊断方法" moduleName="现代医学"/>
          <InnerModule innerModuleName="治疗方法" moduleName="现代医学"/>
          <InnerModule innerModuleName="康养策略" moduleName="现代医学"/>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <ModuleAdviser/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Download from "@/components/download.vue";
import HottestShow from "@/components/hottestShow.vue";
import ModuleAdviser from '@/components/moduleAdviser.vue';
import InnerModule from '@/components/innerModule.vue';
export default {
  name: "TraditionalMedical",
  layout: "homeLayout",
  components: { Download, HottestShow,ModuleAdviser,InnerModule},
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
  height: 240px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.module-name {
  font-size: 20px;
  .icon-modern {
    font-size: 24px;
    color:@themeColor;
  }
}
.modern-medical-img {
  width: 100%;
  height: 100%;
}
</style>