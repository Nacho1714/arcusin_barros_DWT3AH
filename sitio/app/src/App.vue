<template>
  <div>
    <siteHeader></siteHeader>
    <router-view :vinilos="vinilos"></router-view>
    <siteFooter />
  </div>
</template>



<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/lobster";
import "@fontsource/rubik";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/all.css";
import siteHeader from "./components/siteHeader.vue";
import siteFooter from "./components/siteFooter.vue";

export default {
  name: "App",
  components: {
    siteHeader,
    siteFooter,
  },

  data() {
    return {
      vinilos: [
        {
            "vinilo_id": 0,
            "vinilo_cat": 1,
            "titulo": "Greatest Hits (4PL)",
            "precio": 21950,
            "imagen": "./img/big-tupac.jpg",
            "img_alt":"Vinilo Greatest Hits, 2PAC",
        },
        {
            "vinilo_id": 1,
            "vinilo_cat": 1,
            "titulo": "Check Your Head",
            "precio": 8990,
            "imagen": "./img/big-beastieboys.jpg",
            "img_alt": "Vinilo Check Your Head, Beastie Boys",
        },
        {
            "vinilo_id": 2,
            "vinilo_cat": 1,
            "titulo": "Ison",
            "precio": 8990,
            "imagen": "./img/big-ison.jpg",
            "img_alt":"Vinilo Ison, Sevdaliza",
        },
        {
            "vinilo_id": 3,
            "vinilo_cat": 1,
            "titulo": "Skilled Mechanics",
            "precio": 6750,
            "imagen": "./img/big-tricky.jpg",
            "img_alt": "Vinilo Skilled Mechanics, Tricky",
        },
        {
            "vinilo_id": 4,
            "vinilo_cat": 2,
            "titulo": "Foo Fighters",
            "precio": 6350,
            "imagen": "./img/big-foofighters.jpg",
            "img_alt": " Vinilo Foo Fighters",
        },
        {
            "vinilo_id": 5,
            "vinilo_cat": 2,
            "titulo": "AM",
            "precio": 7450,
            "imagen": "./img/big-am.jpg",
            "img_alt":"Vinilo AM, Artic Monkeys",
        },
        {
            "vinilo_id": 6,
            "vinilo_cat": 2,
            "titulo": "Physical Graffiti",
            "precio": 8990,
            "imagen": "./img/big-ledzeppelin.jpg",
            "img_alt": "Vinilo Physical Graffiti, Led Zeppelin",
        },
        {
            "vinilo_id": 7,
            "vinilo_cat": 2,
            "titulo": "A Night at the Opera",
            "precio": 6750,
            "imagen": "./img/big-queen.jpg",
            "img_alt":"Vinilo A Night at the Opera, Queen",
        },
        {
            "vinilo_id": 8,
            "vinilo_cat": 3,
            "titulo": "Fire Music",
            "precio": 7450,
            "imagen": "./img/big-archie.jpg",
            "img_alt":"Vinilo Fire Music, Archie Shepp",
        },
        {
            "vinilo_id": 9,
            "vinilo_cat": 3,
            "titulo": "End to End",
            "precio": 6750,
            "imagen": "./img/big-barre.jpg",
            "img_alt":"Vinilo End to End, Barre Phillips",
        },
        {
            "vinilo_id": 10,
            "vinilo_cat": 3,
            "titulo": "Blue World",
            "precio": 7450,
            "imagen": "./img/big-john.jpg",
            "img_alt": "Vinilo Blue World, John Coltrane",
        },
        {
            "vinilo_id": 11,
            "vinilo_cat": 3,
            "titulo": "Pangea",
            "precio": 8990,
            "imagen": "./img/big-miles.jpg",
            "img_alt": "Vinilo Pangea, Miles Davis",
        }
      ],
    };
  },
};

// Acá hay que agregar el objeto data con los vinilos
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.titulo {
  font-size: 2.5rem;
  font-weight: 700;
}
.subtitulo {
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.7);
}
</style>
