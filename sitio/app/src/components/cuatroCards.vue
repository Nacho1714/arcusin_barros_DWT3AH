<template>
  <section class="product">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-5 m-auto text-center">
          <h3 class="titulo">Nuestros Vinilos más Vendidos</h3>

          <h4 class="subtitulo">Rock Internacional, Rap y Jazz</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 text-center" v-for="vinilo in vinilos" :key="vinilo.id">
          <div class="card border-0 bg-light mb-2">
            <div class="card-body" >
              <a href="#">
                <picture>
                  <source srcset="" media="all and (min-width: 46.875em)" />

                  <img :src="vinilo.imagen" class="img-fluid" :alt="vinilo.img_alt" />
                </picture>

                <h5>{{vinilo.titulo}}</h5>
                <p>{{vinilo.precio}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 text-center m-auto">
          <router-link class="btn1" to="/catalogo">Ver Más</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cuatroCards",
  props: {
    vinilos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.card:hover {
  box-shadow: -2px -1px 25px -4px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
}
</style>