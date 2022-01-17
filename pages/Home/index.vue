<template>
  <div class="width-style">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <!-- 新闻推送板块 -->
          <NewsSection />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <!-- 轮播图 -->
          <Carousel/>
          <!-- <Banner /> -->
          <!-- 推荐文章列表 -->
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <HottestShow/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ConcernedShow/>
              </div></el-col
            >
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <!-- 下载中心 -->
          <Download/>
        </div>
        <!-- 滚动播放 -->
        <Scroll />
      </el-col>
    </el-row>
    <div class="advertising">广告位</div>
    <el-row :gutter="20">
      <el-col :span="9">
        <div class="grid-content">
          <Medical moduleName="现代医学" />
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content">
          <Medical moduleName="传统医学" />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <HomeAdviser />
        </div>
      </el-col>
    </el-row>
    <el-row class="border-traditional-covid">
      <el-col :span="12">
        <div class="grid-content">
          <HomeBreathe />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <HomeTraditionalAndCovid />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NewsSection from "@/components/newsSection.vue";
// import NewsSection from "../../components/newsSection.vue";
import Banner from "@/components/banner.vue";
import Medical from "@/components/medical.vue";
import HomeAdviser from "@/components/homeAdviser.vue";
import Scroll from "@/components/scroll.vue";
import HomeBreathe from "@/components/homebreathe.vue";
import HomeTraditionalAndCovid from "@/components/homeTraditionalAndCovid.vue";
import Carousel from '@/components/carousel.vue';
import Download from '@/components/download.vue';
import HottestShow from '@/components/hottestShow.vue';
import ConcernedShow from '@/components/concernedShow.vue';
export default {
  name: "Home",
  layout: "homeLayout",
  components: {
    NewsSection,
    Banner,
    Medical,
    HomeAdviser,
    Scroll,
    HomeBreathe,
    HomeTraditionalAndCovid,
    Carousel,
    Download,
    HottestShow,
    ConcernedShow,
  },
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.advertising {
  height: 50px;
  background-color: #f2f2f2;
  line-height: 50px;
}
.border-traditional-covid {
  border-top: 1px dashed #d7d7d7;
}
</style>
