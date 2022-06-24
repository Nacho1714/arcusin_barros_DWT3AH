<template>
    <header>
        <nav class=" container navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="../assets/logo.png" alt="" width="" height="" class="d-inline-block align-text-top">
                    Play Vinilo'S
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarScroll">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/catalogo">Catálogo</router-link> 
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/carrito">Carrito</router-link> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'siteHeader'
}
</script>

<style scoped>
header{
    border-bottom: 2px solid black;
}
.navbar-brand{
    font-size: 2em; 
    color: black;
    font-family: 'Lobster', cursive;
    padding-bottom: 0.6rem;;
}
.navbar-brand:hover{
    color: black;
}
.nav-link{
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    color: rgb(43, 43, 43);
    font-family: 'Rubik', sans-serif;
    transition: none; 
}
.nav-link:hover{
    color: rgb(0, 0, 0);
}
.nav-link::after{
    content: "";
    position: absolute;
    background-color: rgb(141, 56, 52);
    height: 3px;
    width: 0;
    left: 0;
    bottom: -3px;

}
.nav-link:hover:after{
    width: 100%;
    transition: .3s;
}
.navbar-expand-lg .navbar-nav .nav-link{
    font-weight: 550;
    font-size: 1.3em;
}

@media  screen and (max-width: 960px){
    .nav-link{
        border-top: rgba(141, 56, 52, 0.103) 1px solid;
        border-bottom: rgba(141, 56, 52, 0.103) 1px solid;
    }
    .nav-link:hover{
        background-color: rgb(141, 56, 52);
        color: #f0f0f0;
    }
    .nav-link::after{
        content: none;
    }
}
</style>