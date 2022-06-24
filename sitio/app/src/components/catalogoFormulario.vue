<template>
  <div

    v-bind:class="{
      'd-none justify-content-center mt-5': form == false,
      'd-flex justify-content-center mt-5': form,
    }"
  >
    <div class="card p-3 w-75" action="">
      <div class="col-md-12 m-2">
        <input
          v-model="titulo"
          class="form-control"
          type="text"
          placeholder="Titulo"
        />
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
        <input
          v-model="precio"
          class="form-control"
          type="text"
          placeholder="Precio"
        />
      </div>

      <div class="col-md-12 m-2">
        <input
          v-model="url"
          class="form-control"
          type="text"
          placeholder="URL imagen"
        />
      </div>

      <div class="col-md-12 m-2">
        <input
          v-model="descrip"
          class="form-control"
          type="text"
          placeholder="Descripcion imagen"
        />
      </div>

      <div class="col-md-6 w-100">
        <button v-on:click="agregar" class="btn btn-primary" type="button">
          Guardar
        </button>
      </div>

    </div>

  </div>

</template>

<script>
export default {
    name: 'catalogoFormulario',
    props: {
      form: Boolean,
      titulo: String,
      categoria: Number,
      precio: Number,
      url: String,
      descrip: String,
    
    },

    




};
</script>

<style>
</style>