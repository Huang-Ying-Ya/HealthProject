<template>
  <div class="width-style">
    <LevelOnePageTop :moduleName="this.moduleName"/>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content">
          <InnerModule innerModuleName="指导思想" :moduleName="this.moduleName"/>
          <InnerModule innerModuleName="诊断方法" :moduleName="this.moduleName"/>
          <InnerModule innerModuleName="治疗方法" :moduleName="this.moduleName"/>
          <InnerModule innerModuleName="康养策略" :moduleName="this.moduleName"/>
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
import ModuleAdviser from "@/components/moduleAdviser.vue";
import InnerModule from "@/components/innerModule.vue";
import LevelOnePageTop from '@/components/levelOnePageTop.vue';
export default {
  name: "LevelOnePage",
  layout: "homeLayout",
  components: { ModuleAdviser, InnerModule,LevelOnePageTop },
  props:['moduleName']
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
.module-name {
  font-size: 20px;
  .icon-traditional {
    font-size: 24px;
    color: @themeColor;
  }
}
.modern-medical-img {
  width: 100%;
  height: 100%;
}
</style>
