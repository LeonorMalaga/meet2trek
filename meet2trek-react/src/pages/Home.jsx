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
</main>
    </>
    )
}