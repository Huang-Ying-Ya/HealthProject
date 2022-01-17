<template>
  <div class="width-style">
    <LevelOnePageTop moduleName="心理健康指南" />
    <el-row :gutter="20" class="mentality">
      <el-col :span="18">
        <div class="grid-content">123</div>
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
import LevelOnePageTop from "@/components/levelOnePageTop.vue";
export default {
  name: "MentalGuide",
  layout: "homeLayout",
  components: { LevelOnePageTop },
};
</script>

<style scoped lang="less">
.mentality {
  margin-top: 20px;
}
</style>