<template>
  <div>
    <select
      v-on:change="cambio"
      v-model="selectCat"
      class="form-select"
      name="Categorias"
    >
      <option disabled selected>Selecciona una opción</option>
      <option value="5">Todos</option>
      <option value="1">Rap</option>
      <option value="2">Rock</option>
      <option value="3">Jazz</option>
      <option value="4">Menor Precio</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'catalogoCategorias',
};
</script>

<style>
</style>