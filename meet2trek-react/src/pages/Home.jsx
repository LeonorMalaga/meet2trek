import { useEffect, useState } from "react";
import RouteCard from "./RouteCard";

export default function Home() {

  window.onload = function () {
    setTimeout(function () {
      document.getElementById("overlay-text").classList.add("visible");
    }, 2000);
  }
  
  const [routes, setRoutes] = useState([])
  const [filter, setFilter] = useState({})

  const fetchRoutes = () => {
    const filterMetre = {
      ...filter,
      distance: filter.distance ? filter.distance * 1000 : "",
    }
    const noEmptyFilters = Object.fromEntries(
      Object.entries(filterMetre).filter(([key, value]) => {
        if (typeof value === "string") {
          return value.trim() !== "";
        }
        return value !== "";
      })
    )
    const queryParams = new URLSearchParams(noEmptyFilters).toString();

    fetch(`http://localhost:8080/api/routes/getByFilter?${queryParams}`, 
      {method:"GET", 
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded'
        }})
      .then(response => response.json())
      .then(data => setRoutes(data))
      .catch(error => console.error("Error: " + error))
  }

  useEffect(() => {
      fetchRoutes()
  }, [])

  const fetchFilteredPosts = () => {
    console.log('Aplicando filtros')
    fetchRoutes()
  }
  const guardarFiltros = () => {
    console.log('Guardando filtros')
  }

  const fetchFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    })
  }

  return (  <>

  <main>
  <div className="video-container">
        <video loop autoPlay muted id="hero-video" style={{ width: '100vw', height: '35vh', objectFit: 'cover'  }}>
          <source src="/video/hero.mp4" type="video/mp4" />
          No se puede reproducir el video
          </video>
        <div id="overlay-text" className="overlay-text">
          Mucho más que senderismo...
        </div>
       
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-xl-3 mb-5">
          <img src="img/past2.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-xl-3 mb-5">
          <img src="img/past1.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div className="col-xl-3 mb-5">
          <img src="img/past3.jpg" alt="Image" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      <div className="main-index">
      </div>
      <div className="card featured-card">
            <a href="/recommended-route">
              <h1 className="titular" style={{ textAlign: "center", padding: "15px", margin: "20px 20px 0 20px" }}>
                Ruta recomendada del mes
              </h1>
            </a>
            <img className="img-destacada" src="img/Chilla/rioChilla3.jpg" alt="Imagen destacada" />
            <div className="card-content">
              <a href="/recommended-route">
                <h2 className="tm-text-primary" style={{ marginBottom: "0px", textAlign: "center" }}>
                  Sendero acuático río Chillar
                </h2>
              </a>
              <h3 className="tm-text-primary" style={{ marginTop: "0px", textAlign: "center" }}>Nerja. Málaga</h3>
              <p className="article-title" style={{ fontSize: "15px", textAlign: "center", padding: "0px 60px", lineHeight: "1.3rem" }}>
                El camino del Río Chillar es una ruta muy conocida, pero el 99% de las personas se detienen en el Vado de
                Los Patos o incluso antes. No todo el mundo sabe que con un poco más de dificultad, esfuerzo y
                orientación,
                dos kilómetros más arriba, en medio de una naturaleza mucho más salvaje y exuberante, se esconde un
                pequeño
                paraíso natural de cascadas y piscinas naturales.
              </p>
              <p className="card-features">Dificultad: 6/10<br />Distancia: 15km</p>
            </div>
          </div>
</main>
    </>
    )
}