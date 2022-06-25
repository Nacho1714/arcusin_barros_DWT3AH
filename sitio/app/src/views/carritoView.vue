<template>

  <main class="container">
    <table class="table table-striped mt-5" v-if="carrito.length>0">

      <thead>
        <tr>
          <th scope="col">Productos</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>

      <tbody>

        <!-- producto :key="vinilo.id -->
        <tr v-for="(vinilo, index) in carrito" :key="vinilo.id">
          
          <!-- Id -->
          <!-- <td class="row">{{ index }}</td> -->

          <!-- Img y Titulo -->
          <td class="table__productos">
            <img
              v-bind:src="vinilo.imagen"
              v-bind:alt="vinilo.img_alt"
            />

            <h6 class="title">{{vinilo.titulo}}</h6>
          </td>

          <!-- Precio -->
          <td class="table__precio">
            <p>${{vinilo.precio.toLocaleString("ES-AR")}}</p>
          </td>

          <!-- Cantidad -->
          <td class="table__cantidad text-center">
            <input
              type="number"
              min="1"
              v-bind:value="vinilo.cantidad"
              disabled
            />
          </td>

          <!-- Button -->
          <td>
            
            <button
              @click="$emit('eliminar', index)"
              class="delete btn btn-danger">
              <i class="fa-solid fa-trash margin-right"></i>
              <span>Eliminar</span>
            </button>

          </td>

        </tr>

      </tbody>

    </table>

    <div class="row mx-4 mb-5" v-if="carrito.length>0">
      <div class="col">
        <h3 class="itemCardTotal">Total: $ <span v-text="total"></span></h3>
        <h3 class="itemCardTotal">Cantidad: <span v-text="cantidad"></span></h3>
      </div>

      <div class="col d-flex justify-content-end" v-if="carrito.length>0">
        <button class="btn btn-success button">Comprar</button>
      </div>
    </div>

    <div v-if="!(carrito.length>0)">
      <h3 class="text-center p-5">No hay productos en el carrito</h3>
      <router-link class="btn btn-success button mb-5 mx-auto d-block width-fit" to="/catalogo">
        Ver catálogo
      </router-link>
    </div>

  </main>

</template>

<script>

  export default {

    props: {
      carrito: Array,
      total: Number,
      cantidad: Number
    },

    methods: {

    },

    // created: () {
    // // this.total = localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : [];
    // // this.cantidad = localStorage.getItem("cantidad") ? JSON.parse(localStorage.getItem("cantidad")) : [];
    // },

  };

</script>

<style scoped>
.carrito {
  min-height: 80vh;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.margin-right{
  margin-right: 10px;
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

td{
  align-items: center;
  vertical-align: middle;
}

.width-fit{
  width: fit-content
}


</style>