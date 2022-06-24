<template>
    <header>
        <nav class=" container navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="" width="" height="" class="d-inline-block align-text-top">
                    Play Vinilo'S
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <router-link to="/">Inicio</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link to="/catalogo">Catálogo</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link to="/contacto">Contacto</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link to="/carrito">Carrito</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    
</style>