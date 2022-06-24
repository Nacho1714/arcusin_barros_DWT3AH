import Vue from 'vue'
import VueRouter from 'vue-router'
import inicioView from '../views/inicioView.vue'
import catalogoView from '../views/catalogoView.vue'
import carritoView from '../views/carritoView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: inicioView
  },
  {
    path: '/catalogo',
    name: 'Catálogo',
    component: catalogoView
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: carritoView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
