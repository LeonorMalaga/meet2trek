import { useEffect, useState } from "react";

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

  return (
    <>
      <main>
        <div className="video-container">
          <video loop autoPlay muted id="hero-video" style={{ width: '100vw', height: '70vh', objectFit: 'cover' }}>
            <source src="/video/hero.mp4" type="video/mp4" />
            No se puede reproducir el video
          </video>
          <div id="overlay-text" className="overlay-text">
            Mucho más que senderismo...
          </div>
        </div>
  
        {/* Columna con imágenes actualizadas */}
        <div  style={{ borderRadius: "1%", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", marginBottom: "20px" }}>
            <img src="../ROUTES/trekking.jpg" alt="Image" className="img-fluid" style={{ width: "100vw", maxWidth: "100%", height: "120vh", borderRadius: "0%"}} />
            <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1, color: "white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", textAlign: "left" }}>
              <h1 style={{  display: "flex", flexDirection: "column", padding: "5px 20px 50px 1000px", borderRadius: "5px", margin: 0 }}>¡OBJETIVO DE LA WEB!</h1>
              <h2 style={{  display: "flex", flexDirection: "column", padding: "5px 200px 500px 1000px", borderRadius: "5px", margin: 0 }}>Está claro que webs de senderismo o trekking hay muchas pero lo que nos 
                diferencia de las demás es que aquí podrás conocer y quedar para hacer salidas y excursiones con personas afines a ti. 
                A través del filtrado de tus gustos, limitaciones o disponibilidad de fechas, la página te mostrará a otros usuarios que tengan algunos de los mismos gustos y aficiones, con los que podrás 
                ponerte en contacto a través del chat. 
              </h2>
            </div>
          </div>
          <div style={{ position: "relative", width: "100%", marginBottom: "20px" }}>
            <img src="../ROUTES/sunset.jpg" alt="Image" className="img-fluid" style={{ width: "100vw", maxWidth: "100%", height: "120vh", borderRadius: "0%"}} />
            <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1, color: "white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", textAlign: "left" }}>
              <h1 style={{ color: "#000000", display: "flex", flexDirection: "column", padding: "5px 1000px 50px 20px", borderRadius: "5px", margin: 0 }}>¡LO AMAS SI LO CONOCES!</h1>
              <h2 style={{ color: "#000000", display: "flex", flexDirection: "column", padding: "50px 1000px 5px 20px", borderRadius: "5px", margin: 0 }}>
                  Los Objetivos de Desarrollo Sostenible (ODS) promulgados por la ONU, forman parte de la Agenda 2030, donde se plantea un ambicioso plan para conseguir la sostenibilidad del planeta, 
                  el fin de la pobreza, el consumo responsable y los derechos humanos. Desde esta humilde plataforma, queremos colaborar a la consecución de los mismos. Dado que solo se ama lo que se conoce, 
                  te invitamos a conocer nuestro medio ambiente para amarlo. 
              </h2>
            </div>
          </div>
        </div>
  
        <div className="main-index"></div>
        <div className="card featured-card" style={{ margin: "60px", maxWidth: "90%", textAlign: "center" }}>
          <a href="/recommended-route">
            <h1 className="titular" style={{ textAlign: "center", padding: "15px", margin: "20px 20px 0 20px" }}>
              Ruta recomendada
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
        <div  style={{ borderRadius: "1%", marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", marginBottom: "20px" }}>
            <img src="../ROUTES/child.jpg" alt="Image" className="img-fluid" style={{ width: "100vw", maxWidth: "100%", height: "120vh", borderRadius: "0%"}} />
            <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 1, color: "white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", textAlign: "left" }}>
              <h1 style={{  color: "#000000", display: "flex", flexDirection: "column", padding: "5px 20px 50px 1000px", borderRadius: "5px", margin: 0 }}>¡SALVEMOS EL PLANETA!!</h1>
              <h2 style={{  color: "#000000", display: "flex", flexDirection: "column", padding: "5px 200px 500px 1000px", borderRadius: "5px", margin: 0 }}>No estamos hablando de grandes acciones, hablamos de acciones 
                cotidianas fáciles y eficaces, de nuestro día a día que, sumadas individual y colectivamente, pueden ayudar a construir un planeta mejor. Porque la salud del planeta está al alcance de 
                todos, y todos somos responsables de dejarlo como nos lo encontramos. Respeta el entorno y, sobre todo, no dejes basura tras de ti.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}  
