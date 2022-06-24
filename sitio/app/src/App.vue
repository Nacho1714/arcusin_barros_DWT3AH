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
      .btn1{
        display: inline-block;
        margin: 20px;
        padding: 10px 0;
        text-align: center;
        height: 45px;
        width: 35%;
        border: none;
        outline: none;
        text-decoration: none;
        background-color: rgb(141, 56, 52);
        color: white;
        font-weight: 700;
        border-radius: 60px;
    }
    .btn0:hover,
    .btn1:hover,
    .btn3:hover{
        background-color: rgb(93, 36, 33);
        transition: 0.5s;
    }
    .btn3{
        display: inline-block;
        margin: 20px 20px 20px 0px;
        padding: 10px 0;
        text-align: center;
        height: 45px;
        width: 35%;
        border: none;
        outline: none;
        text-decoration: none;
        background-color: rgb(141, 56, 52);
        color: white;
        font-weight: 700;
        border-radius: 60px;
    }

</style>
