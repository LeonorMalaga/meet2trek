

export function RouteDetail() {
    return(
        <>
        <main>
        <div class="container-fluid tm-container-content tm-mt-60">
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary" style={{textAlign: "center", marginTop: "20px"}}>Caminito del Rey.
                    Ardales
                    (Málaga)</h2>
            </div>
            <div class="row tm-mb-90">
                <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">


                    <iframe id="vid" width="743" height="418" src="https://www.youtube.com/embed/cjcZGvytKaU"
                        title="Historia del Caminito del Rey" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        controls referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div class="">
                        <img src="img/caminito1.jpg" alt="Image" class="" style={{marginTop: "30px", width="100%"}} />

                        <h2 style={{margin: "20px 0",  color: "#437571"}}>Mapa de la ruta</h2>
                        {/*<!-- Map -->*/}
                        <div class="gmap-canvas">
                            <iframe width="100%" height="520" id="gmap-canvas"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25518.26260063283!2d-4.804315953176561!3d36.91945662162786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCaminito%20del%20rey!5e0!3m2!1ses!2ses!4v1724408721315!5m2!1ses!2ses"
                                width="600" height="450" style={{border: "0"}} frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"></iframe>
                        </div>

                    </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div class="tm-bg-gray tm-video-details">
                        <h2 class="col-12 tm-text-primary" style={{paddingTop: "25px", marginTop: "0px"}}>Historia</h2>
                        <p>
                            El Caminito del Rey es una pasarela colgante que se construyó entre 1901 y 1905 para unir
                            dos
                            presas que la compañía Sociedad Hidroeléctrica del Chorro usaba como saltos de agua para
                            generar
                            energía eléctrica. El camino fue construido con tablones de madera por valientes marineros
                            atados con cuerdas, suspendidos a 100 metros del suelo. El rey Alfonso XIII se desplazó en
                            1921
                            hasta el lugar en la presa del Conde del Guadalhorce para inaugurar esta gran obra, y a
                            partir
                            de este momento, las gentes comenzaron a denominar a aquel camino como "Caminito del Rey".
                        </p>
                        <h2 class="col-12 tm-text-primary">Descripción de la ruta</h2>
                        <p>
                            El recorrido del Caminito del Rey es lineal, no circular, por lo que debe asegurarse su
                            regreso
                            al punto de partida por métodos propios. No obstante, existe un servicio de autobuses
                            lanzaderas
                            entre el acceso norte (Ardales) y el sur (El Chorro, Álora) o viceversa que por un módico
                            precio
                            (0,94€ ó 1,55€, según se posea o no la tarjeta del Consorcio de Transportes Metropolitano
                            del
                            área de Málaga) permitirá a los visitantes al Caminito del Rey desplazarse a su punto de
                            partida
                            por la actual carretera MA-444. El Caminito del Rey discurre por un espacio natural
                            protegido,
                            por tanto todas las indicaciones que los Agentes de Medio Ambiente o de la Guardia Civil, en
                            el
                            ejercicio de sus funciones, requieran, serán de obligado cumplimiento. Visitas De 1 de
                            octubre a
                            31 de marzo: de 10:00 a 14:00 h. (pases cada 30 minutos). De 1 de abril a 30 de septiembre:
                            de
                            10:00 a 17:00 h. (pases cada 30 minutos). Días de apertura: martes a domingo, excepto 24, 25
                            y
                            31 de diciembre y 1 de enero. Tamaño de grupos: 50 personas. Aforo máximo: 400 personas.
                        </p><br></br>

                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Distancia: </span><span class="mb-5">8 Km</span>
                        </div>
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Dificultad: </span><span class="mb-5">Media</span>
                        </div>
                        <div class="text-center mb-5">
                            <a class="btn btn-primary tm-btn-big" style={{marginTop: "20px"}}
                                id="openLoginPopupBtn1">Guardar Ruta</a>
                        </div>
                        <div class="text-center mb-5">
                            <a class="btn btn-primary tm-btn-big" id="openLoginPopupBtn2">Ver quedadas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</>
    )
}