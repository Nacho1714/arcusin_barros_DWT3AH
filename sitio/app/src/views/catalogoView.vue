<template>
  <main>

        <section class="shop app">

            <div class="container">

                <div class="row py-5">

                    <div class="col-lg-8 m-auto text-center mb-5">

                        <h1 class="titulo">Nuestro Catálogo</h1>

                        <h2 class="subtitulo">Navega por nuestra gran variedad de vinilos</h2>

                        <div class="d-flex justify-content-between mt-3">
       
                            <catalogo-buscador></catalogo-buscador>

                            <catalogo-categorias></catalogo-categorias>

                            <!-- Agregar -->
                            <div class="form-check form-switch ms-3">

                                <input v-on:click="mostrarForm" type="checkbox" class="form-check-input" id="check1" v-model="form">
                                <label for="check1" class="form-check-label">Agregar</label>

                            </div>

                        </div>

                        <catalogoFormulario></catalogoFormulario>
                
   
                    </div>
                    <div class="row">
                        
                        <div class="col-md-4 text-center mb-4" v-for="(vinilo, index) in vinilos" :key="vinilo.id">

                            <div class="card border-0 bg-light mb-2">
                            
                                <div class="card-body">

                                    <a href="#">
            
                                        <img v-bind:src="vinilo.imagen" class="img-fluid" :alt="vinilo.img_alt">
                                        
                                        <h3 class="h4">{{vinilo.titulo}}</h3>
                                        <p>${{vinilo.precio}}</p>

                                    </a>

                                    <div class="d-flex flex-column justify-content-between">

                                        <button @click="$emit('evento', vinilo.vinilo_id)" class="btn button btn-success button">Añadir a Carrito</button>
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
    agregar: function(index){
        this.$emit('loro', index);
    }
    // v-on:click="agregarCarrito(vinilo)"
}
    

</script>

<style scoped>
  a{
    color: black;
    text-decoration: none;
}
</style>