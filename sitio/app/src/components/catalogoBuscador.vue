<template>
  <div class="d-flex">
    <input
      v-on:change="cambio"
      v-model="filtro"
      class="px-2 search"
      type="search"
      placeholder="Buscar"
      aria-label="Search"
    />
    <button class="btn0" type="button" value="Buscar">Buscar</button>
  </div>
</template>

<script>
export default {
    name: 'catalogoBuscador',
    // props: ['filtro'],
    // data() {
    //     return {
    //         filtro: this.filtro,
    //     }
    // },
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
.btn0{
    height: 40px;
    width: 40%;
    outline: none;
    border: none;
    background: rgb(141, 56, 52);
    color: white;
    border-radius: 60px;
    font-weight: 700;
}
</style>