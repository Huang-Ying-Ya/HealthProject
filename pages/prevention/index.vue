<template>
  <div class="width-style">
    <LevelOnePageTop moduleName="疾病预防"/>
    <el-row :gutter="20" class="prevention-illness">
      <el-col :span="18">
        <div class="grid-content">
          <InnerModule innerModuleName="常见传染病" :moduleName="this.moduleName"/>
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
import LevelOnePageTop from '@/components/levelOnePageTop.vue';
import Download from "@/components/download.vue";
import HottestShow from "@/components/hottestShow.vue";
export default {
  name:'prevention',
  layout:'homeLayout',
  components:{LevelOnePageTop,Download,HottestShow}
}
</script>

<style scoped lang="less">
.prevention-illness {
  margin-top: 20px;
}
</style>