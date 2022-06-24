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

  methods: {
    agregarCarrito: function (vinilo) {
      if (this.carrito.length != 0) {
        // carrito lleno, sumo si esta
        let bandera = false;

        this.carrito.forEach((item) => {
          if (item.id == vinilo.vinilo_id) {
            bandera = true;
            item.cantidad++;
            let objStr = JSON.stringify(this.carrito);
            localStorage.setItem("vinilos", objStr);
          }
        });

        if (bandera == false) {
          //carrito lleno, no tiene el vinilo
          console.log("agrego");
          this.carrito.push({
            id: vinilo.vinilo_id,
            titulo: vinilo.titulo,
            precio: vinilo.precio,
            imagen: vinilo.imagen,
            img_alt: vinilo.img_alt,
            cantidad: 1,
          });

          let objStr = JSON.stringify(this.carrito);
          localStorage.setItem("vinilos", objStr);
        }

        bandera = false;

        // Sumo el total de los precios de vinilos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
        }
      } else {
        //carrito vacio
        console.log("agrego");
        this.carrito.push({
          id: vinilo.vinilo_id,
          titulo: vinilo.titulo,
          precio: vinilo.precio,
          imagen: vinilo.imagen,
          img_alt: vinilo.img_alt,
          cantidad: 1,
        });

        // guardo el carrito en el LocalStorage
        let objStr = JSON.stringify(this.carrito);
        localStorage.setItem("vinilos", objStr);

        // Sumo el total de los precios de vinilos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
        }
      }
    },
  },

  created() {
    this.carrito = localStorage.getItem("vinilos")
      ? JSON.parse(localStorage.getItem("vinilos"))
      : [];
  },

  data() {
    return {
      carrito: [],

      // filtro: '',

      vinilos: [
        {
          vinilo_id: 0,
          vinilo_cat: 1,
          destacado: true,
          titulo: "Greatest Hits (4PL)",
          precio: 21950,
          imagen: require("@/assets/big-tupac.jpg"),
          img_alt: "Vinilo Greatest Hits, 2PAC",
        },
        {
          vinilo_id: 1,
          vinilo_cat: 1,
          destacado: false,
          titulo: "Check Your Head",
          precio: 8990,
          imagen: require("@/assets/big-beastieboys.jpg"),
          img_alt: "Vinilo Check Your Head, Beastie Boys",
        },
        {
          vinilo_id: 2,
          vinilo_cat: 1,
          destacado: false,
          titulo: "Ison",
          precio: 8990,
          imagen: require("@/assets/big-ison.jpg"),
          img_alt: "Vinilo Ison, Sevdaliza",
        },
        {
          vinilo_id: 3,
          vinilo_cat: 1,
          destacado: false,
          titulo: "Skilled Mechanics",
          precio: 6750,
          imagen: require("@/assets/big-tricky.jpg"),
          img_alt: "Vinilo Skilled Mechanics, Tricky",
        },
        {
          vinilo_id: 4,
          vinilo_cat: 2,
          destacado: false,
          titulo: "Foo Fighters",
          precio: 6350,
          imagen: require("@/assets/big-foofighters.jpg"),
          img_alt: " Vinilo Foo Fighters",
        },
        {
          vinilo_id: 5,
          vinilo_cat: 2,
          destacado: true,
          titulo: "AM",
          precio: 7450,
          imagen: require("@/assets/big-AM.jpg"),
          img_alt: "Vinilo AM, Artic Monkeys",
        },
        {
          vinilo_id: 6,
          vinilo_cat: 2,
          destacado: false,
          titulo: "Physical Graffiti",
          precio: 8990,
          imagen: require("@/assets/big-ledzeppelin.jpg"),
          img_alt: "Vinilo Physical Graffiti, Led Zeppelin",
        },
        {
          vinilo_id: 7,
          vinilo_cat: 2,
          destacado: false,
          titulo: "A Night at the Opera",
          precio: 6750,
          imagen: require("@/assets/big-queen.jpg"),
          img_alt: "Vinilo A Night at the Opera, Queen",
        },
        {
          vinilo_id: 8,
          vinilo_cat: 3,
          destacado: false,
          titulo: "Fire Music",
          precio: 7450,
          imagen: require("@/assets/big-archie.jpg"),
          img_alt: "Vinilo Fire Music, Archie Shepp",
        },
        {
          vinilo_id: 9,
          vinilo_cat: 3,
          destacado: true,
          titulo: "End to End",
          precio: 6750,
          imagen: require("@/assets/big-barre.jpg"),
          img_alt: "Vinilo End to End, Barre Phillips",
        },
        {
          vinilo_id: 10,
          vinilo_cat: 3,
          destacado: false,
          titulo: "Blue World",
          precio: 7450,
          imagen: require("@/assets/big-john.jpg"),
          img_alt: "Vinilo Blue World, John Coltrane",
        },
        {
          vinilo_id: 11,
          vinilo_cat: 3,
          destacado: true,
          titulo: "Pangea",
          precio: 8990,
          imagen: require("@/assets/big-miles.jpg"),
          img_alt: "Vinilo Pangea, Miles Davis",
        },
      ],
    };
  },
};
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
.btn1 {
  display: inline-block;
  margin: 20px;
  padding: 10px 0;
  text-align: center;
  height: 45px;
  width: 35%;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: rgb(141, 56, 52);
  color: white;
  font-weight: 700;
  border-radius: 60px;
}
.btn0:hover,
.btn1:hover,
.btn3:hover {
  background-color: rgb(93, 36, 33);
  transition: 0.5s;
}
.btn3 {
  display: inline-block;
  margin: 20px 20px 20px 0px;
  padding: 10px 0;
  text-align: center;
  height: 45px;
  width: 35%;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: rgb(141, 56, 52);
  color: white;
  font-weight: 700;
  border-radius: 60px;
}
</style>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes


