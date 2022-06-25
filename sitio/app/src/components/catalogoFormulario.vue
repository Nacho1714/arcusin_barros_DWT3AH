<template>
  <div>
    <!-- Checked ==> Abrir Form -->
    <div class="d-flex justify-content-between mt-3">
      <div class="form-check form-switch ms-3">
        <input
          v-on:click="toggleForm"
          type="checkbox"
          class="form-check-input"
          id="check1"
        />
        <label for="check1" class="form-check-label">Agregar</label>
      </div>
    </div>
    <div v-if="form" class="d-flex justify-content-between mt-3">
      <div class="card p-3 w-75" action="">
        <h3>Nuevo Producto</h3>
        <div class="col-md-12 m-2">
          <input
            v-model="viniloForm.titulo"
            class="form-control"
            type="text"
            placeholder="Titulo"
          />
        </div>

        <div class="col-md-12 m-2">
          <select v-model="viniloForm.vinilo_cat" class="form-select" name="Categorias">
            <option disabled selected>Selecciona una opción</option>
            <option value="1">Rap</option>
            <option value="2">Rock</option>
            <option value="3">Jazz</option>
          </select>
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloForm.precio"
            class="form-control"
            type="text"
            placeholder="Precio"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloForm.imagen"
            class="form-control"
            type="text"
            placeholder="URL imagen"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloForm.img_alt"
            class="form-control"
            type="text"
            placeholder="Descripcion imagen"
          />
        </div>

        <div class="col-md-6 w-100">
          <button @click="$emit('viniloNuevo', viniloForm); toggleForm();" class="btn btn-primary" type="button">
            Guardar
          </button>
        </div>
      </div>
    </div>


    <div v-if="formProp" class="d-flex justify-content-between mt-3">
      <div class="card p-3 w-75" action="">
        <div class="col-md-12 m-2">
          <h3 v-if="formProp">Estás editando un producto</h3>
          <input
            v-model="viniloEditar.titulo"
            class="form-control"
            type="text"
            placeholder="Titulo"
          />
        </div>

        <div class="col-md-12 m-2">
          <select v-model="viniloEditar.vinilo_cat" class="form-select" name="Categorias">
            <option disabled selected>Selecciona una opción</option>
            <option value="1">Rap</option>
            <option value="2">Rock</option>
            <option value="3">Jazz</option>
          </select>
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloEditar.precio"
            class="form-control"
            type="text"
            placeholder="Precio"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloEditar.imagen"
            class="form-control"
            type="text"
            placeholder="URL imagen"
          />
        </div>

        <div class="col-md-12 m-2">
          <input
            v-model="viniloEditar.img_alt"
            class="form-control"
            type="text"
            placeholder="Descripcion imagen"
          />
        </div>

        <div class="col-md-6 w-100">
          <button @click="$emit('viniloEditado', viniloEditar);" class="btn btn-primary" type="button">
            Guardar
          </button>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "catalogoFormulario",
  props: {
    formProp: Boolean,
    viniloEditar: Object
  },
  data() {
    return {
      form: false,
      vinilos: [],
      viniloForm: {
        titulo: "",
        vinilo_cat: "",
        precio: "",
        imagen: "",
        img_alt: "",
      },
    };
  },
};
</script>

<style>
</style>