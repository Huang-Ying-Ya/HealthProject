<template>
<!-- 利用elementUI完成轮播图 -->
  <div class="block">
    <el-carousel trigger="click" class="carousel">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" class="carousel" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Carousel",
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
    }),
  },
  mounted() {
    console.log("我是banner的mounted");
    this.$store.dispatch("home/getBannerList");
  },
};
</script>

<style scoped lang="less">
.carousel {
  width: 100%;
  height: 100%;
  // object-fit: cover;
}
</style>