import { useEffect, useState } from "react";
import RouteCard from "./RouteCard";

const App = () => {
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

    return (
        <div>

            <main>
            <img src="img/img-06.jpg" alt="Image" style={{width: '100vw', height: '50vh', marginBottom:"0vh", objectFit: 'cover' }} />
                <div className="main2">
            
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
                  <option>Nerja</option>
                  <option>Antequera</option>
                  <option>Ardales</option>
                  <option>Frigiliana</option>
                  <option>Montes de Málaga</option>
                  <option disabled>Ronda</option>
                  <option disabled>Guadalhorce</option>
                  <option disabled>Abdalajís</option>
                  <option disabled>Costa del Sol</option>
                  <option disabled>Almijara</option>
                  <option disabled>Málaga</option>
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
              <div className="tm-text-right" style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button type="button" className="btn btn-primary" onClick={fetchFilteredPosts}>Buscar rutas</button>
                <button type="button" className="btn btn-primary" onClick={guardarFiltros}>Limpiar filtros</button>
            </div>
            </form>
          </div>
        </aside>

                    <section className="css-raul">
                        <div className="card-columns">
                        {routes.map((route) => (
                <RouteCard route={route} key={route.id} />
            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default App;