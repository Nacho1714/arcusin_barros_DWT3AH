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
<<<<<<< Updated upstream
  import "@fontsource/lobster"
  import "@fontsource/rubik"
=======
  import siteHeader from './components/siteHeader.vue';
  import siteFooter from './components/siteFooter.vue'
>>>>>>> Stashed changes

  export default {
    name: 'App',
    components: {
      siteHeader,
      siteFooter
    }

    function saluda(){
      console.log('hola');
    }
  }
</script>

<style>

</style>
