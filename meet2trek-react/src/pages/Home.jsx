import { useEffect, useState } from "react";
import RouteCard from "./RouteCard";

export default function Home() {
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
        return value !== "" && value > 0;
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
        <aside>
          <div id="filter">
            <h2 className="tm-text-primary">Filtros de búsqueda</h2>
            <form id="contact-form" onSubmit={fetchFilteredPosts} method="GET">
              <div className="form-group">
                <select className="form-control" name="province" value={filter.province} onChange={fetchFilter}>
                  <option value="">Provincia</option>
                  <option>Málaga</option>
                  <option disabled>Córdoba</option>
                  <option disabled>Sevilla</option>
                  <option disabled>Cádiz</option>
                  <option disabled>Huelva</option>
                  <option disabled>Almería</option>
                  <option disabled>Jaén</option>
                  <option disabled>Granada</option>
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" name="area" value={filter.area} onChange={fetchFilter}>
                  <option value="">Área</option>
                  <option>Málaga</option>
                  <option>Ronda</option>
                  <option value="CHILLAR">Nerja</option>
                  <option>Antequera</option>
                  <option>Ardales</option>
                  <option>Frigiliana</option>
                  <option value="MONTES_DE_MALAGA">Montes de Málaga</option>
                  <option>Axarquía</option>
                  <option>Guadalhorce</option>
                  <option>Abdalajís</option>
                  <option>Costa del Sol</option>
                  <option>Almijara</option>
                </select>
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  name="difficulty"
                  value={filter.difficulty} 
                  className="form-control" 
                  placeholder="Dificultad (del 1 al 10)" 
                  min="1" 
                  max="10" 
                  onChange={fetchFilter}
                />
              </div>
              <div className="form-group">
                <input 
                  type="number" 
                  name="distance"
                  value={filter.distance}  
                  className="form-control" 
                  placeholder="Distancia (de 1 a 30km)" 
                  min="0" 
                  max="30"
                  onChange={fetchFilter} 
                />
              </div>
              <div className="tm-text-right" style={{ marginTop: "20px" }}>
                <button type="button" className="btn btn-primary" onClick={fetchFilteredPosts}>Buscar rutas</button>
                <button type="button" className="btn btn-primary" onClick={guardarFiltros}>Guardar filtros</button>
              </div>
            </form>
          </div>
        </aside>

        <section className="css-raul">
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
          <div className="card-columns">
            {routes.map((route) => (
                <RouteCard route={route} key={route.id} />
            ))}
            {/*<div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>
            <div className="card">
              <img src="https://via.placeholder.com/300x150" alt="Imagen 1" />
              <div className="card-content">
                <h3 className="card-title">Título 1</h3>
                <h4>Descripción 1</h4>
                <p className="card-features">Dificultad: Fácil<br />Distancia: 5km</p>
              </div>
            </div>*/}
          </div>
        </section>
      </div>
</main>
    </>
    )
}