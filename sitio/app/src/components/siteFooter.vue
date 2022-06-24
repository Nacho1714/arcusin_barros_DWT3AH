<template>
  <footer class="cnt-footer py-5">

        <div class="container py-5">

            <div class="row pt-5">

                <div class="col-lg-12 m-auto">

                    <div class="row">

                        <div class="col-lg-9">

                            <!-- <h2>¿Quieres enterarte que hay de nuevo?</h2> -->
                            <h2>{{titulo}}</h2>

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
    props: {
        titulo: String
    }
}
</script>

<style>

</style>