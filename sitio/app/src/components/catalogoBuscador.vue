<template>

  <div class="d-flex justify-content-between mt-3">
    
    <pre>{{$data}}</pre>

    <div class="d-flex">
      <!-- <pre>{{$data}}</pre> -->

      <input
        v-model="filtro"
        class="px-2 search"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
      />
      <button v-on:click="buscar(vinilos)" class="btn0" type="button" value="Buscar">Buscar</button>
    
    </div>

    <div>                
      <!-- v-on:change="buscar" -->
      <select  v-model="categoria" class="form-select" name="Categorias">
          <option disabled selected>Selecciona una opción</option>
          <option value="5">Todos</option>
          <option value="1">Rap</option>
          <option value="2">Rock</option>
          <option value="3">Jazz</option>
          <option value="4">Menor Precio</option>
      </select>
    </div>

    <!-- <div class="form-check form-switch ms-3">

      <input v-on:click="mostrarForm" type="checkbox" class="form-check-input" id="check1" v-model="form">
      
      <label for="check1" class="form-check-label">Agregar</label>
    </div> -->

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

        // Filtro por menor precio
        if (this.selectCat == 4) {

          this.vinilos.forEach(vinilo => {
              this.filtroCat.push(vinilo);
          });

          this.filtroCat.sort((a, b) => {
              if (a.precio > b.precio) {return 1};
              if (a.precio < b.precio) {return -1};
              return 0;
          })

          if (!(this.filtro == '')) {
              this.filtroCat = [];
              let filtro2 = this.vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));

              filtro2.forEach(obj => {
              this.filtroCat.push(obj);
          });
          }   

        } 
      }
    },
    data() {
      return {
          filtro: '',
          vinilosFiltrados: [],
          categoria: null,
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