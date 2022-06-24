<template>
  <main>

        <section class="shop app">

            <div class="container">

                <div class="row py-5">

                    <div class="col-lg-8 m-auto text-center mb-5">

                        <h1 class="titulo">Nuestro Catálogo</h1>

                        <h2 class="subtitulo">Navega por nuestra grán variedad de vinilos</h2>

                        <div class="d-flex justify-content-between mt-3">

                            <!-- Buscador -->
                            <!-- <div class="d-flex">
                                <input v-on:change="cambio" v-model="filtro" class="px-2 search" type="search" placeholder="Buscar" aria-label="Search">
                                <button class="btn0" type="button" value="Buscar">Buscar</button>
                            </div> -->
                            <catalogo-buscador></catalogo-buscador>

                            <!-- Categoria -->
                            <!-- <div>
                                <select v-on:change="cambio" v-model="selectCat" class="form-select" name="Categorias">
                                    <option disabled selected>Selecciona una opción</option>
                                    <option value="5">Todos</option>
                                    <option value="1">Rap</option>
                                    <option value="2">Rock</option>
                                    <option value="3">Jazz</option>
                                    <option value="4">Menor Precio</option>
                                </select>
                                
                            </div> -->

                            <catalogo-categorias></catalogo-categorias>

                            <!-- Agregar -->
                            <div class="form-check form-switch ms-3">

                                <input v-on:click="mostrarForm" type="checkbox" class="form-check-input" id="check1" v-model="form">
                                <label for="check1" class="form-check-label">Agregar</label>

                            </div>

                        </div>

                        <!-- Formulario -->
                        <!-- <div v-bind:class="{'d-none justify-content-center mt-5' : form==false, 'd-flex justify-content-center mt-5' : form}">

                            <div class="card p-3 w-75" action="">
            
                                <div class="col-md-12 m-2">
            
                                    <input v-model="titulo" class="form-control" type="text" placeholder="Titulo">
            
                                </div>

                                <div class="col-md-12 m-2">
                                
                                    <select v-model="categoria" class="form-select" name="Categorias">
                                        <option disabled selected>Selecciona una opción</option>
                                        <option value="1">Rap</option>
                                        <option value="2">Rock</option>
                                        <option value="3">Jazz</option>
                                    </select>
                                    
                                </div>

                                <div class="col-md-12 m-2">
            
                                    <input v-model="precio" class="form-control" type="text" placeholder="Precio">
            
                                </div>
            
                                <div class="col-md-12 m-2">
            
                                    <input v-model="url" class="form-control" type="text" placeholder="URL imagen">
            
                                </div>

                                <div class="col-md-12 m-2">
            
                                    <input v-model="descrip" class="form-control" type="text" placeholder="Descripcion imagen">
            
                                </div>
            
                                <div class="col-md-6 w-100">
            
                                    <button v-on:click="agregar" class="btn btn-primary" type="button">Guardar</button>
            
                                </div>
            
                            </div>
            
                        </div> -->
   
                    </div>
                    <div class="row">
                        
                        <div class="col-lg-3 text-center mb-4" v-for="(vinilo, index) in vinilos">

                            <div class="card border-0 bg-light mb-2">
                            
                                <div class="card-body">

                                    <a href="#">
            
                                        <img v-bind:src="vinilo.imagen" class="img-fluid" :alt="vinilo.img_alt">
                                        
                                        <h3 class="h4">{{vinilo.titulo}}</h3>
                                        <p>${{vinilo.precio}}</p>

                                    </a>

                                    <div class="d-flex flex-column justify-content-between" style="height: 140px;">

                                        <button v-on:click="agregarCarrito(vinilo)" class="btn btn-success button">Añadir a Carrito</button>

                                        <button v-on:click="editar(index)" class="btn btn-primary button">Editar</button>

                                        <button v-on:click="eliminar(index)" class="btn btn-danger button">Borrar</button>

                                    </div>

                                </div>


                            </div>

                        </div>                
                        
                    </div>

                </div>

            </div>

        </section>

    </main>
</template>

<script>
import catalogoBuscador from '../components/catalogoBuscador.vue'
import catalogoCategorias from '../components/catalogoCategorias.vue'
export default {
    name: 'catalogoView',
    components: {
        catalogoBuscador,
        catalogoCategorias
    },
    props: {
        vinilos: {
            type: Array,
            required: true
        }
    },
}
    

</script>

<style scoped>
  a{
    color: black;
    text-decoration: none;
}
/* .search{
    height: 40px;
    width: 100%;
    border-radius: 60px;
    outline: none;
    margin-right: -35px;
    font-family: 'Rubik', sans-serif;
    border: 2px solid rgb(141, 56, 52);
} */
/* .btn0{
    height: 40px;
    width: 40%;
    outline: none;
    border: none;
    background: rgb(141, 56, 52);
    color: white;
    border-radius: 60px;
    font-weight: 700;
} */
</style>