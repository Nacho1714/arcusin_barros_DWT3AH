<template>
  <footer class="cnt-footer py-5">

        <div class="container py-5">

            <div class="row pt-5">

                <div class="col-lg-12 m-auto">

                    <div class="row">

                        <div class="col-lg-9">

                            <h2>¿Quieres enterarte que hay de nuevo?</h2>

                            <input type="text" class="px-3" placeholder="Ingresa tu Email">

                            <button class="btn2">Enviar</button>

                        </div>

                        <div class="col-lg-3 py-3">

                            <h3 class="pb-3 text-center">Nuestras Redes</h3>

                            <div class="d-flex justify-content-between">

                                <a target="_blank" href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                                <a target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                <a target="_blank" href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                <a target="_blank" href="https://accounts.google.com/signin/v2/identifier?hl=es&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Des&ec=GAlA8wE&flowName=GlifWebSignIn&flowEntry=AddSession"><i class="fab fa-google-plus"></i></a>

                            </div>
                            

                        </div>

                    </div>

                </div>

            </div>

            <hr>

            <p class="text-center">Copyright ©2022 Todos los derechos reservados | Aplicaciones para Dispositivos Moviles - Barros Ignacio Ezequiel - Arcusin Marcos Aaron</p>

        </div>

    </footer>
</template>

<script>
export default {
    name: 'siteFooter',
}
</script>

<style scoped>
    .cnt-footer{
    background-color: black;
    color: white;
    }
    .btn2{
        height: 45px;
        width: 100px;
        background: white;
        margin-left: -10px;
        border: 2px solid white;
        font-weight: 600;
    }
    .cnt-footer input{
        height: 45px;
        width: 55%;
        border: 2px solid white;
        outline: none;
        background: black;
        color: white;
        margin-top: 20px;
        font-weight: 600;
    }
    .cnt-footer::placeholder{
        color: white;
    }
    .cnt-footer p{
        margin: 0;
    }
    footer .col-lg-3:nth-child(1) a,
    footer .col-lg-3:nth-child(2) a,
    footer .col-lg-3:nth-child(3) a{
        display: block;
        color: white;
        text-decoration: none;
    }
    .fab{
    font-size: 2.5rem;
    cursor: pointer;
    padding-right: 5px;
    text-decoration: none;
    color: white;
    }
</style>