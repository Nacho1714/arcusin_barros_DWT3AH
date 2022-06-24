<template>
  <div>
    <siteHeader></siteHeader>
    <router-view :vinilos="vinilos" @evento="(id) => agregarCarrito(id)" @eliminar="(index) => eliminarCarrito(index)" :carrito="carrito" :total="total" :cantidad="cantidad"></router-view>
    <!-- @sumar="() => this.total++" -->
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
    agregarCarrito: function (viniloid) {

      if (this.carrito.length != 0) {
        // carrito no vacio
        let bandera = false;
        
        // Si el vinilo ya esta en el carrito, solo se incrementa la cantidad
        this.carrito.forEach((item) => {
          if (item.id == viniloid) {
            bandera = true;
            item.cantidad++;
            let objStr = JSON.stringify(this.carrito);
            localStorage.setItem("vinilos", objStr);
          }
        });

        if (bandera == false) {
          //carrito lleno, no tiene el vinilo
          this.carrito.push({
            id: viniloid,
            titulo: this.vinilos[viniloid].titulo,
            precio: this.vinilos[viniloid].precio,
            imagen: this.vinilos[viniloid].imagen,
            img_alt: this.vinilos[viniloid].img_alt,
            cantidad: 1,
          });

          let objStr = JSON.stringify(this.carrito);
          localStorage.setItem("vinilos", objStr);
        }

        bandera = false;

        // Sumo el total de los precios de vinilos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.cantidad = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
            this.cantidad += item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
          localStorage.setItem("cantidad", JSON.stringify(this.cantidad));
        }
      } else {

        //carrito vacio
        this.carrito.push({
          id: viniloid,
          titulo: this.vinilos[viniloid].titulo,
          precio: this.vinilos[viniloid].precio,
          imagen: this.vinilos[viniloid].imagen,
          img_alt: this.vinilos[viniloid].img_alt,
          cantidad: 1,
        });

        // guardo el carrito en el LocalStorage
        let objStr = JSON.stringify(this.carrito);
        localStorage.setItem("vinilos", objStr);

        // Sumo el total de los precios de vinilos que agregue al carrito
        if (this.carrito.length > 0) {
          this.total = 0;
          this.cantidad = 0;
          this.carrito.forEach((item) => {
            this.total += item.precio * item.cantidad;
            this.cantidad += item.cantidad;
          });

          // guardo el total en el LocalStorage
          localStorage.setItem("total", JSON.stringify(this.total));
          localStorage.setItem("cantidad", JSON.stringify(this.cantidad));
        }
      }
    },
    eliminarCarrito: function(i){

      this.total -= (this.carrito[i].precio * this.carrito[i].cantidad);
      localStorage.setItem('total', JSON.stringify(this.total));

      this.cantidad -= this.carrito[i].cantidad;
      localStorage.setItem('cantidad', JSON.stringify(this.cantidad));

      this.carrito.splice(i,1);
      localStorage.setItem('vinilos', JSON.stringify(this.carrito));

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
      total: 0,
      cantidad: 0,
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
    color: white;
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

  .button {
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 5px;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .card{
    border-radius: 20px;
  }

  .card-body{
    padding: 0;
  }

  .card-body img{
    border-radius: 20px 20px 0 0;
  }

  .card-body a{
    text-decoration: none;
  }

  .card-body a h5, .card-body a p{
    margin: 0;
    padding: 1% 5%;
    color: #343a40;
    text-decoration: none !important;
  }

  .card:hover {
    box-shadow: -2px -1px 25px -4px rgba(0, 0, 0, 0.75);
    transition: 0.5s;
  }
</style>

