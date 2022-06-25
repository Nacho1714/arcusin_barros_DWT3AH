<template>
  <main>
        <section class="shop app">

            <div class="container">

                <div class="row py-5">

                    <div class="col-lg-8 m-auto text-center mb-5">

                        <h1 class="titulo">Nuestro Catálogo</h1>

                        <h2 class="subtitulo">Navega por nuestra gran variedad de vinilos</h2>

                        <catalogo-buscador :vinilos="vinilos" @filtrar="(vinilosFiltrados) => {this.vinilosNuevos = vinilosFiltrados}"></catalogo-buscador>
                            
<!--                         <div class="d-flex justify-content-between mt-3">
       
                            <div class="form-check form-switch ms-3">

                                <input v-on:click="mostrarForm" type="checkbox" class="form-check-input" id="check1">
                                <label for="check1" class="form-check-label">Agregar</label>

                            </div>

                        </div>
 -->
                        <catalogoFormulario
                            :formProp="form"
                            :viniloEditar="viniloEditar"
                            @viniloEditado="(vinilo)=> {
                                $emit('viniloEditado', vinilo);
                                dejarDeEditar()
                                }"
                            @viniloNuevo="(vinilo)=> $emit('viniloNuevo', vinilo)">

                        </catalogoFormulario>
                
                    </div>
                    <div class="row">
                        
                        <div class="col-md-4 text-center mb-4" v-for="(vinilo, index) in vinilosFinales" :key="vinilo.id">

                            <!-- Carta -->
                            <div class="card border-0 bg-light mb-2">
                            
                                <div class="card-body">

                                    <a href="#">
            
                                        <img v-bind:src="vinilo.imagen" class="w-100" :alt="vinilo.img_alt">
                                        
                                        <h3 class="h4">{{vinilo.titulo}}</h3>
                                        <p class="precio">${{vinilo.precio.toLocaleString('ES-AR')}}</p>

                                    </a>

                                    <div class="d-flex flex-column justify-content-between">

                                        <button @click="$emit('evento', vinilo.vinilo_id)" class="btn btn-success button">Añadir a Carrito</button>
                                        <!-- <button @click="$emit('sumar')"></button> -->
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
    import catalogoFormulario from '../components/catalogoFormulario.vue'
    
    export default {
        name: 'catalogoView',
        components: {
            catalogoBuscador,
            catalogoFormulario
        },
        computed: {
            vinilosFinales() {
                return this.vinilosNuevos.length > 0 ? this.vinilosNuevos : this.vinilos;
            },
        },
        props: {
            vinilos: Array
        },
        methods: {
            editar: function(index){
                this.form = true;
                this.viniloEditar = this.vinilos[index];              
            },
            dejarDeEditar: function(){
                this.form = false;
                this.viniloEditar = {};
            },
        },
        data() {
            return {
                form: false,
                viniloEditar: {},
                vinilosNuevos: [], 
            };
        },

    }
    
</script>

<style scoped>
    a{
        color: black;
        text-decoration: none;
    }

    .precio{
        font-size: 1.2rem;
        font-weight: bold;
    }

    .h4{
        font-size: 1.5rem;
        font-weight: bolder;
        margin: 5px 0 0 0;
    }
    
</style>