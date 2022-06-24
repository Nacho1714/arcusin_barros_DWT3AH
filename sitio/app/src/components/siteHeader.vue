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
    header{
    border-bottom: 2px solid black;
}
.navbar-brand{
    font-size: 2rem;
    color: black;
    font-family: 'Lobster', cursive;
}
.navbar-brand:hover{
    color: black;
}
.nav-link{
    margin-right: 10px;
    margin-left: 10px;
    color: black;
    font-family: 'Rubik', sans-serif;
}
.navbar-expand-lg .navbar-nav .nav-link{
    padding-left: 6.5rem;
    font-weight: 550;
    font-size: 1.2em;
}
.navbar-expand-lg:hover .navbar-nav:hover .nav-link:hover{
    color: rgb(141, 56, 52);
}
</style>