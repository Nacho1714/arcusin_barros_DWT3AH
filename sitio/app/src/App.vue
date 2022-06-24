<template>
  <div>
    <siteHeader></siteHeader>
    <router-view></router-view>
    <siteFooter />
  </div>
</template>



<script>
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "@fontsource/lobster";
  import "@fontsource/rubik";
  import "@fortawesome/fontawesome-free/css/fontawesome.css";
  import "@fortawesome/fontawesome-free/css/all.css";
  import siteHeader from './components/siteHeader.vue';
  import siteFooter from './components/siteFooter.vue';

  export default {
    name: 'App',
    components: {
      siteHeader,
      siteFooter
    }
  }

// Acá hay que agregar el objeto data con los vinilos



</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.titulo{
    font-size: 2.5rem;
    font-weight: 700;
}
.subtitulo{
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.7);
}
</style>
