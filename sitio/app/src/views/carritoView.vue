<template>
  <main class="container">
    <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Productos</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>

      <tbody>
        <!-- producto -->
        <tr v-for="(vinilo, index) in carrito" :key="vinilo.id">
          <td class="row">{{ index }}</td>
          <td class="table__productos">
            <img
              v-bind:src="'./../' + vinilo.imagen"
              v-bind:alt="vinilo.img_alt"
            />
            <h6 class="title">{{ vinilo.titulo }}</h6>
          </td>
          <td class="table__precio">
            <p>${{ vinilo.precio }}</p>
          </td>
          <td class="table__cantidad text-center">
            <input
              type="number"
              min="1"
              v-bind:value="vinilo.cantidad"
              disabled
            />
          </td>
          <td>
            <button
              v-on:click="eliminarCarrito(index)"
              class="delete btn btn-danger"
            >
              x
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="row mx-4 mb-5">
      <div class="col">
        <h3 class="itemCardTotal">Total: $ <span v-text="total"></span></h3>
        <h3 class="itemCardTotal">Cantidad: <span v-text="contador"></span></h3>
      </div>

      <div class="col d-flex justify-content-end">
        <button class="btn btn-success">COMPRAR</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.carrito {
  min-height: 80vh;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.table__productos {
  display: flex;
}
.table__productos > img {
  width: 9rem;
  object-fit: contain;
  border-radius: 6px;
  margin-right: 20px;
}
.table__cantidad > input {
  width: 40px;
  border: none;
  outline: 0;
  font-size: 16px;
  font-weight: 700;
  margin-right: 30px;
  margin-bottom: 20px;
}
</style>