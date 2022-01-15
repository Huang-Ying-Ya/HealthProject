<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in bannerList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" class="carousel"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引入Swiper
import Swiper from "swiper";
import { mapState } from "vuex";
export default {
  name: "Banner",
  watch: {
    bannerList: {
      //立即监听：不管你数据有没有变化，我上来立即监听一次
      //为什么watch监听不大list：因为这个数据从来没有发生变化（数据是父亲给的，父亲给的时候就是一个对象，对象里面该有的数据都是有的）
      immediate: true,
      handler() {
        //只能监听到数据已经有了，但是v-for动态渲染结构我们还是没有办法确定的，因此还是需要用nextTick——下次DOM更新循环结束之后执行延迟回调（修改数据之后立即调用这个方法）
        this.$nextTick(() => {
          //只有在实例完整获得时才能使用
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
  // 获取不到数据
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log("我是banner的asyncData");
    console.log(this.$store);
    // this.$store.dispatch("home/getBannerList");
  },
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

<style scoped>
.swiper {
  width: 600px;
  height: 300px;
}
.carousel {
  width: 600px;
  height: 300px;
  cursor: pointer;
}
</style>
