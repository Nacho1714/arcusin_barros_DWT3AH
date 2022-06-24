<template>
  <div>
    <siteHeader></siteHeader>
    <router-view></router-view>
  </div>
</template>



<script>
  import siteHeader from './components/siteHeader.vue';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  export default {
    name: 'App',
    components: {
      siteHeader
    }
  }
</script>

<style>
  
</style>
