<template>

  <div class="d-flex justify-content-between mt-3">

    <div class="d-flex">
      <!-- <pre>{{$data}}</pre> -->

      <input
        v-model="filtro"
        class="px-2 search"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <button @click="$emit('filtrar', buscar(vinilos))" class="btn0" type="button" value="Buscar">Buscar</button>
    
    </div>

    <div>                
      <!-- v-on:change="buscar" -->
      <select @change="$emit('filtrar', buscar(vinilos))" v-model="categoria" class="form-select" name="Categorias">
          <!-- <option disabled selected>Selecciona una opción</option> -->
          <option value="5" selected>Todos</option>
          <option value="1">Rap</option>
          <option value="2">Rock</option>
          <option value="3">Jazz</option>
          <option value="4">Menor Precio</option>
      </select>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'catalogoBuscador',
    props: {
      vinilos:Array
    },
    methods: {
      buscar: function(vinilos){

        // Filtro por precio o por categoria
        switch (this.categoria) {
          case '4':

            vinilos = vinilos.sort((a, b) => {
              if (a.precio > b.precio) {return 1};
              if (a.precio < b.precio) {return -1};
              return 0;
            })
            
          break;

          case '5':

            vinilos = vinilos;
            
          break;
        
          default:
            
            vinilos = vinilos.filter(vinilo => vinilo.vinilo_cat == this.categoria);
          
          break;

        }

        // Filtro con Buscador
        if ((vinilos.length > 0) && (!this.filtro == '')) {

          vinilos = vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));

        }else if(!this.filtro == ''){
          vinilos = vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
        }

        return vinilos;
      }
    },
    data() {
      return {
          filtro: '',
          categoria: 5,
      };
    },
  };
</script>

<style scoped>
  .search{
      height: 40px;
      width: 100%;
      border-radius: 60px;
      outline: none;
      margin-right: -35px;
      font-family: 'Rubik', sans-serif;
      border: 2px solid rgb(141, 56, 52);
  }
</style>