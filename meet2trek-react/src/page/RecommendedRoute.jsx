

export function RecommendedRoute() {
    return (
        <>
        {/*<div class=" d-flex justify-content-center align-items-center" data-parallax="scroll">
            <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
                    <div class="swiper-slide">
                        <img src="img/Chilla/RioChilla 1.jpg" alt=""></img>
                    </div>
                    <div class="swiper-slide">
                        <img src="img/Chilla/RioChilla 6.jpg" alt=""></img>
                    </div>
                    <div class="swiper-slide">
                        <img src="img/Chilla/RioChilla 4.jpg" alt=""></img>
                    </div>
                    <div class="swiper-slide">
                        <img src="img/Chilla/RioChilla 5.jpg" alt=""></img>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </header>*/}

    <main>
        <div class="container-fluid tm-container-content tm-mt-60">
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary" style={{marginTop: "20px", textAlign: "center"}}>Sendero acuático Río
                    Chillar - Los Cahorros – Parque Natural Sierra de
                    Tejeda, Almijara y Alhama (Málaga)</h2>
            </div>
            <div class="row tm-mb-90">
                <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                    <iframe id="vid" width="743" height="418" src="https://www.youtube.com/embed/psnjzi1KRR8"
                        allowfullscreen></iframe>

                    <div class="">
                        <img src="img/Chilla/RioChilla 2.jpg" alt="Image" class="" style={{marginTop: "10px",
                            width="100%"}}>
                        <h2 style={{margin: "20px 0",  color: "#437571"}}>Mapa de la ruta</h2>
                        {/*<!-- Map -->*/}
                        <div class="gmap-canvas">
                            <iframe width="100%" height="520" id="gmap-canvas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51127.236052198714!2d-3.9137327334654946!3d36.7837056962288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1724408557656!5m2!1ses!2ses"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div class="tm-bg-gray tm-video-details">
                        <h2 class="col-12 tm-text-primary" style={{paddingTop: "25px", marginTop: "0px"}}>Descripción de la
                            ruta</h2>
                        <p>
                            Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de
                            Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido
                            reconstruido.<br>
                            Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde
                            donde
                            se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre
                            los
                            puntos más altos y es una escalada difícil.
                            Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de
                            cuidados
                            para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular,
                            refugio para almorzar y una corriente para lavar el sudor después del descenso.
                            En la cima se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la
                            Guerra Civil Española. Los soldados de Franco pudieron observar movimientos de tropas
                            republicanas desde esta posición a 1,779 metros. Cuando vea las vistas, se dará cuenta de
                            por
                            qué lo construyeron.<br>
                            El camino del Río Chillar es una ruta muy conocida, pero el 99% de las personas se detienen
                            en
                            el Vado de Los Patos o incluso antes. No todo el mundo sabe que con un poco más de
                            dificultad,
                            esfuerzo y orientación, dos kilómetros más arriba, en medio de una naturaleza mucho más
                            salvaje
                            y exuberante, se esconde un pequeño paraíso natural de cascadas y piscinas naturales.<br> No
                            está indicado para ir con niños.
                        </p>

                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Duración: </span><span class="mb-5">8 horas (Ida y
                                vuelta)</span>
                        </div>
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Distancia </span><span class="mb-5">18 Km</span>
                        </div>
                        <div class="mr-4 mb-2">
                            <span class="tm-text-gray-dark">Dificultad: </span><span class="mb-5">Media</span>
                        </div>
                        <div class="text-center mb-5">
                            <a class="btn btn-primary tm-btn-big" style={{marginTop: "20px"}}
                                id="openLoginPopupBtn3">Guardar
                                Ruta</a>
                        </div>
                        <div class="text-center mb-5">
                            <a class="btn btn-primary tm-btn-big" id="openLoginPopupBtn4">Ver quedadas</a>
                        </div>
            </main>
        </>
    )
}