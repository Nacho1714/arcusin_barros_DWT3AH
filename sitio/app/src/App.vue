<template>
  <div>
    <siteHeader></siteHeader>
    <siteFooter />
    <router-view></router-view>
  </div>
</template>



<script>
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "@fontsource/lobster"
  import "@fontsource/rubik"
  import "@fortawesome/fontawesome-free/css/fontawesome.css"
  import "@fortawesome/fontawesome-free/css/all.css"
  import siteHeader from './components/siteHeader.vue';
  import siteFooter from './components/siteFooter.vue'

  export default {
    name: 'App',
    components: {
      siteHeader,
      siteFooter
    }
  }
</script>

<style>

</style>
