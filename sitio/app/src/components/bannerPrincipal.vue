<template>
          
    <section class="banner">

        <h1 class="visually-hidden">Inicio</h1>

        <div class="py-5">

            <div class="row py-5">

                <div class="col-lg-7 pt-5 text-center">
                    
                    <h2 class="pt-5">Hecha un Vistazo a Nuestros Vinilos Clásicos</h2>
                    <router-link class="btn1 mt-3" to="/catalogo">Ir a Ver</router-link>

                </div>

            </div>

        </div>
        
    </section>

</template>

<script>
export default {
    name: 'bannerPrincipal',
}
</script>
<style scoped>

    .banner{
    background: url(../assets/vinilo-antiguo.jpeg) no-repeat;
    background-size: cover;
    height: 100vh;
    background-position: 50% 50%;
    width: 100%;
    }
    .banner h2{
        font-size: 4rem;
        font-weight: 700;
        color: white;
    }
</style>