const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        productosCargados: [],
        query: "",
        carrito: [],
        mostrarCarrito: false,
        mostrarDetails: false,
        mostrarCargar: false,
        productoDetails: "",
        productoIngresado: {
            "quantity": 0,
            "categoria": "otros",
        },
        categorias: ["Smartphone", "Tablet", "TV", "Notebook", "Otros"],
        categoriaActiva: "",
        isActive: [false, false, false, false, false],
        formErrors: [],
    },
    created() {
        // traemos los productos del json
        fetch("./data/articles.json")
            .then(res => res.json())
            .then(articles => {
                this.productos = articles;

                // traemos los productos cargados del localStorage
                if (localStorage.getItem("productosCargados") != null) {
                    // console.log("entro");	
                    this.productosCargados = JSON.parse(localStorage.getItem("productosCargados"));
                    // console.log(this.productosCargados);
                    this.productosCargados.forEach(productoCargado => {
                        this.productos.push(productoCargado);
                        console.log(productoCargado);
                    })
                }


            })

        // traemos los productos del localStorage
        if (localStorage.getItem("carrito") != null) {
            this.carrito = JSON.parse(localStorage.getItem("carrito"));
        }


    },

    computed: {


        productosFilter: function () {
            // Si no hay query, no buscamos nada
            if (this.query !== "" ) {
                return this.productos.filter(producto => producto.name.toLowerCase().includes(this.query.toLowerCase()) || producto.description.toLowerCase().includes(this.query.toLowerCase()))
            }

            if (!(this.categoriaActiva === "")) {
                return this.productos.filter(producto => producto.categoria.toLowerCase().includes(this.categoriaActiva.toLowerCase()))
            }
        },

        productosFilterCategoria: function () {
            
        },

        cantidadCarrito: function () {
            let cantidad = 0;
            this.carrito.forEach(producto => {
                cantidad += producto.quantity;
            })

            return cantidad;
        },

        totalCarrito: function () {
            let total = 0;
            this.carrito.forEach(producto => {
                total += (producto.quantity * producto.precio);
            })

            return total;
        },



    },
    methods: {
        details(idToShow) {
            this.mostrarDetails = true;
            this.productoDetails = this.productos.find(producto => producto.id === idToShow);
        },
        addToCart(idToAdd) {
            // Si el carrito esta vacio, agregamos el producto
            let productToAdd = this.productos.find(producto => producto.id === idToAdd);
            if (this.carrito.length === 0) {

                productToAdd.quantity = 1;
                this.carrito.push(productToAdd);
                localStorage.setItem("carrito", JSON.stringify(this.carrito));
            }
            // Si el carrito no esta vacio, verificamos si el producto ya esta en el carrito
            else if (this.carrito.length > 0) {

                let productAlreadyInCart = this.carrito.find(product => product.id === productToAdd.id);

                // Si el producto ya esta en el carrito, solo aumentamos la cantidad
                if (productAlreadyInCart) {
                    productAlreadyInCart.quantity++;
                    localStorage.setItem("carrito", JSON.stringify(this.carrito));

                }
                // Si el producto no esta en el carrito, lo agregamos
                else {
                    productToAdd.quantity = 1;
                    this.carrito.push(productToAdd);
                    localStorage.setItem("carrito", JSON.stringify(this.carrito));
                }
            }


        },

        addToCartFromDetails(id){
            this.toggleShowDetails();
            this.addToCart(id);
        },

        toggleShowCarrito() {
            this.mostrarCarrito = !this.mostrarCarrito;

        },

        toggleShowDetails() {
            this.mostrarDetails = !this.mostrarDetails;
        },

        modalClick(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        },

        // removeFromCart(idToRemove){
        //     let productToRemove = this.carrito.find(producto => producto.id === idToRemove);
        //     let index = this.carrito.indexOf(productToRemove);
        //     this.carrito.splice(index, 1);
        //     localStorage.setItem("carrito", JSON.stringify(this.carrito));
        // },

        removeAllFromCart(){
            this.carrito = [];
            localStorage.setItem("carrito", JSON.stringify(this.carrito));
            this.toggleShowCarrito();
        },

        toggleShowCargar() {
            this.mostrarCargar = !this.mostrarCargar;
        },

        cargarProducto() {

            // Validaciones
            console.log(this.productoIngresado);
            this.formErrors = [];
            if (!this.productoIngresado.name) {
                this.formErrors.push("El nombre del producto es obligatorio");
            }
            
            if (!(this.productoIngresado.description)) {
                this.formErrors.push("La descripcion del producto es obligatoria");
            }

            if (!(this.productoIngresado.precio)) {
                this.formErrors.push("El precio del producto es obligatorio");
            }

           
            if (!(this.productoIngresado.img)) {
                this.formErrors.push("La imagen del producto es obligatoria");
            }

            if (!(this.productoIngresado.img_desc)) {
                this.formErrors.push("La descripcion de la imagen del producto es obligatoria y debe ser un numero");
            }
            

            if (this.formErrors.length > 0) {
                return;
            }

            
            if(this.productoIngresado.categoria == undefined){
                this.productoIngresado.categoria = "otros";
            }         
            this.productoIngresado.id = this.productos.length + 1;
            this.productos.push(this.productoIngresado);
            this.productosCargados.push(this.productoIngresado);
            localStorage.setItem("productosCargados", JSON.stringify(this.productosCargados));
            this.productoIngresado = {
                "quantity": 0,
                "categoria": "otros",
            };
            this.toggleShowCargar();
        },

        setCategoriaActiva(categoria, index) {
            if(categoria === "todo"){
                this.categoriaActiva = "";
                this.isActive = [false, false, false, false, false];
            } else{
                this.isActive = [false, false, false, false, false];
                this.categoriaActiva = categoria;
                this.isActive[index] = true;
            }



        }



    }
})


document.addEventListener("DOMContentLoaded", function () {
    let paddingHeight = document.getElementById("minicarritocontainer").scrollHeight;
    document.getElementById("footerPadding").style.height = paddingHeight + "px";
})

window.addEventListener("resize", function () {
    let paddingHeight = document.getElementById("minicarritocontainer").scrollHeight;
    document.getElementById("footerPadding").style.height = paddingHeight + "px";
})