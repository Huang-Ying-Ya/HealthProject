<template>
  <div>
    <Header class="width-style"/>
    <TopNav class="width-style"/>
    <Nuxt />
    <div class="width-style moreLink firstLink">健康常见网站链接推荐：</div>
    <div class="width-style moreLink">政府健康主管网站链接：</div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import TopNav from "@/components/TopNav.vue";
export default {
  components: { Header, Footer, TopNav },
};
</script>

<style scoped lang="less">
.width-style {
  width: 1200px;
}
.moreLink {
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
  
}
.firstLink {
  padding-top: 10px;
  border: 1px dashed #aaaaaa;
  border-style: dashed none none none;
}
</style>