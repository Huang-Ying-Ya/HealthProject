<template>
  <div>
    <Header/>
    <TopNav/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import TopNav from '../components/TopNav.vue'
export default {
  components:{Header,Footer,TopNav},
}
</script>

<style>

</style>