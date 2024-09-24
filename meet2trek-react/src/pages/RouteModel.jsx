import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { getRoute } from "../placeholders/getRoute";
import { useEffect, useState } from "react";

function RouteModel() {
    const { id } = useParams();
    console.log({id})
    const [route, setRoute] = useState({})
    useEffect(() => {
        async function getRoute() {
            console.log('getRoute')
            const route = await fetch(`http://localhost:8080/api/routes/${id}`, 
                {method:"GET", 
                  headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                  }})
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.error("Error: " + error))
            setRoute(route)
        }
        getRoute()
    }, [id])

    return (
        <main>
            <div className="container-fluid tm-container-content tm-mt-60">
                <div className="row mb-4">
                    <h2 className="col-12 tm-text-primary" style={{ marginTop: "20px", textAlign: "center" }}>
                        {route.name} - {route.area} – {route.province}
                    </h2>
                </div>
                <div className="row tm-mb-90">
                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                        <iframe
                            id="vid"
                            width="743"
                            height="418"
                            src={route.videoUrl}
                            allowFullScreen
                        ></iframe>

                        <div>
                            <img
                                src={route.portraitPath}
                                alt="Image"
                                className=""
                                style={{ marginTop: "10px", width: "100%" }}
                            />
                            <h2 style={{ margin: "20px 0", color: "#437571" }}>Mapa de la ruta</h2>
                            <div className="gmap-canvas">
                                <iframe
                                    width="100%"
                                    height="520"
                                    id="gmap-canvas"
                                    src={route.startingPoint}
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <div className="tm-bg-gray tm-video-details">
                            <h2 className="col-12 tm-text-primary" style={{ paddingTop: "25px", marginTop: "0px" }}>
                                Descripción de la ruta
                            </h2>
                            <p>
                                {route.fullDescription}
                            </p>
                            <div className="mr-4 mb-2">
                                <span className="tm-text-gray-dark">Distancia: </span><span className="mb-5">{Intl.NumberFormat("es-ES").format(route.distance / 1000)}km</span>
                            </div>
                            <div className="mr-4 mb-2">
                                <span className="tm-text-gray-dark">Dificultad: </span><span className="mb-5">{route.difficulty}/10</span>
                            </div>
                            <div className="text-center mb-5">
                                <a
                                    className="btn btn-primary tm-btn-big"
                                    style={{ marginTop: "20px" }}
                                    id="openLoginPopupBtn3"
                                >
                                    Guardar Ruta
                                </a>
                            </div>
                            <div className="text-center mb-5">
                                <a className="btn btn-primary tm-btn-big" id="openLoginPopupBtn4" href='/meets'>Ver quedadas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RouteModel