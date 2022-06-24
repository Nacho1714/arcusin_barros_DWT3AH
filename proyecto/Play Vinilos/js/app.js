const appVinilos = new Vue({
    el: '.app',
    data: {
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
        filtro: '',
        filtroCat: [
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
        titulo: '',
        categoria: '',
        precio: '',
        url: '',
        descrip: '',
        selectCat: '',
        carrito: [],
        total: 0,
        form: false,
        foco: null,
    },
    created(){
        this.carrito = localStorage.getItem('vinilos') ? JSON.parse(localStorage.getItem('vinilos')) : [];
        this.total = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : [];
        /* if (localStorage.length != 0) {
            this.carrito = JSON.parse(localStorage.getItem('vinilos'));
            this.total = JSON.parse(localStorage.getItem('total'));
        }  */
    },
    computed:{
        contador: function(){
            return this.carrito.length;
        },
    },
    methods: {
        agregar: function(){

            if (!(this.titulo.length == 0 || this.categoria.length == 0 || this.precio.length == 0 || this.url.length == 0 || this.descrip.length == 0)) {

                if (this.foco == null) {

                    this.filtroCat.push({

                        titulo: this.titulo,
                        vinilo_cat: this.categoria,
                        precio: this.precio,
                        imagen: this.url,
                        img_alt: this.descrip
                    });

                }else{

                    this.filtroCat[this.foco].titulo = this.titulo;
                    this.filtroCat[this.foco].vinilo_cat = this.categoria;
                    this.filtroCat[this.foco].precio = this.precio;
                    this.filtroCat[this.foco].imagen = this.url;
                    this.filtroCat[this.foco].img_alt = this.descrip;

                    this.foco = null;
                };
                
                this.titulo = '';
                this.categoria = '';
                this.precio = '';
                this.url = '';
                this.descrip = ''
            };
        },
        editar: function(index){

            this.foco = parseInt(index);

            this.titulo = this.filtroCat[index].titulo;
            this.categoria = this.filtroCat[index].vinilo_cat;
            this.precio = this.filtroCat[index].precio;
            this.url = this.filtroCat[index].imagen;
            this.descrip = this.filtroCat[index].img_alt;
            
            if (!this.form) {
                this.form = !this.form;   
            }

        },
        cambio: function(){
            console.log('cambio');

            this.filtroCat = [];

            if (this.selectCat == 4) {
                // Se filtra por menor precio
                this.vinilos.forEach(vinilo => {
                    this.filtroCat.push(vinilo);
                });
                this.filtroCat.sort((a, b) => {
                    if (a.precio > b.precio) {return 1};
                    if (a.precio < b.precio) {return -1};
                    return 0;
                })

                if (!(this.filtro == '')) {
                    this.filtroCat = [];
                    let filtro2 = this.vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));

                    filtro2.forEach(obj => {
                    this.filtroCat.push(obj);
                });
                }   

            }else{

                if (this.selectCat == '' && this.filtro == '' || this.selectCat == 5) {
                    // No se hace ningun filtro
                    console.log('entro');
                    this.vinilos.forEach(vinilo => {
                        this.filtroCat.push(vinilo);
                    });

                    if (!(this.filtro == '')) {
                        this.filtroCat = [];
                        let filtro2 = this.vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                        filtro2.forEach(obj => {
                        this.filtroCat.push(obj);
                    });
                    }   

                }else if(this.selectCat == ''){
                    // Se filtra SOLO por el buscador
                    let filtro2 = this.vinilos.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                    filtro2.forEach(obj => {
                        this.filtroCat.push(obj);
                    });
                }else{
                    // Se filtra por categoria o categoria y buscador
                    let filtro1 = this.vinilos.filter(vinilo => vinilo.vinilo_cat == this.selectCat);
    
                    let filtro2 = filtro1.filter(vinilo => vinilo.titulo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                    filtro2.forEach(obj => {
                        this.filtroCat.push(obj);
                    });
                }

            }
        },
        agregarCarrito: function(vinilo) {

            console.log(vinilo);
            
            if (this.carrito.length != 0) {
                // carrito lleno, sumo si esta
                let bandera = false;

                this.carrito.forEach(item => {

                    if (item.id == vinilo.vinilo_id ) {
                        bandera = true;
                        item.cantidad++;
                        let objStr = JSON.stringify(this.carrito);
                        localStorage.setItem('vinilos', objStr);
                    } 
                }); 

                if (bandera == false) {
                    //carrito lleno, no tiene el vinilo
                    console.log('agrego');
                    this.carrito.push({ 
                        id: vinilo.vinilo_id,
                        titulo: vinilo.titulo,
                        precio: vinilo.precio,
                        imagen: vinilo.imagen,
                        img_alt: vinilo.img_alt,
                        cantidad: 1,
                    });

                    let objStr = JSON.stringify(this.carrito);
                    localStorage.setItem('vinilos', objStr);

                }

                bandera = false;

                // Sumo el total de los precios de vinilos que agregue al carrito
                if (this.carrito.length > 0) {
                    this.total = 0;
                    this.carrito.forEach(item => {
                        this.total += item.precio * item.cantidad;;
                    });

                    // guardo el total en el LocalStorage
                    localStorage.setItem('total', JSON.stringify(this.total));
                }

            } else {
                //carrito vacio
                console.log('agrego');
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
                localStorage.setItem('vinilos', objStr);

                // Sumo el total de los precios de vinilos que agregue al carrito
                if (this.carrito.length > 0) {
                    this.total = 0;
                    this.carrito.forEach(item => {
                        this.total += item.precio * item.cantidad;
                    });

                    // guardo el total en el LocalStorage
                    localStorage.setItem('total', JSON.stringify(this.total));
    
                }
            };
        },
        eliminar: function(i){
            this.filtroCat.splice(i,1); //desde el indice i, un solo elemento
        },
        eliminarCarrito: function(i){

            this.total -= (this.carrito[i].precio * this.carrito[i].cantidad);

            this.carrito.splice(i,1); //desde el indice i, un solo elemento

            // guardo el total en el LocalStorage
            localStorage.setItem('total', JSON.stringify(this.total));
            localStorage.setItem('vinilos', JSON.stringify(this.carrito));

        },
        mostrarForm: function(){
            this.form = !this.form;
        },
    },
})