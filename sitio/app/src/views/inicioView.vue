<template>
  <main>
    <bannerPrincipal/>
    <cuatroCards :vinilos="vinilos"/>
    <bannerSecundario/>
    <tresCards/>
    
  </main>
</template>

<script>
// @ is an alias to /src
import bannerPrincipal from '@/components/bannerPrincipal.vue'
import cuatroCards from '@/components/cuatroCards.vue'
import bannerSecundario from '@/components/bannerSecundario.vue'
import tresCards from '@/components/tresCards.vue'

export default {
  name: 'inicioView',
  components: {
    bannerPrincipal,
    cuatroCards,
    bannerSecundario,
    tresCards,
  },
  props: {
    vinilos: {
      type: Array,
      required: true
    }
  },

}
</script>
