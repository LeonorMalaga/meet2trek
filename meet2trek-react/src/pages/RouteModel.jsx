import { BrowserRouter as Router, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import MeetingList from "./MeetingList";
import parse from 'html-react-parser';

function RouteModel() {
    const { routeId } = useParams();
    const [route, setRoute] = useState({fullDescription: ''})
    const navigate = useNavigate()

    const getRoute = async () => {
        const response = await fetch(`http://localhost:8080/api/routes/${routeId}`, 
            {method:"GET", 
              headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
              }})
            const data = await response.json()
        setRoute(data)
    }
    useEffect(() => {
        getRoute()
    }, [routeId])

    const [meetings, setMeetings] = useState([])

    const getMeetings = async () => {
        const response = await fetch(`http://localhost:8080/api/routes/${routeId}/meetings/activeMeetings`, 
          {method:"GET", 
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded'
            }})
          const data = await response.json()
      setMeetings(data)
    }

    useEffect(() => {
        getMeetings()
    }, [])

    const saveRoute = async () => {
      const response = await fetch(`http://localhost:8080/api/users/1/savedRoutes?routeId=${routeId}`, 
          {method:"POST", 
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded'
            }})
          const route = await response.json()
          console.log("Route added to user's saved routes")
          return route
    }

    const [meetingDate, setMeetingDate] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [meetingPoint, setMeetingPoint] = useState('');
    const [meetingId, setMeetingId] = useState(null);

    const crearQuedada = async () => {
      try { 
        const response = await fetch(`http://localhost:8080/api/meetings`,
          {method:"POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              routeId: routeId,
            meetingDate: meetingDate,
            meetingTime: meetingTime,
            meetingPoint: meetingPoint,
          }).toString()
        })
        if (response.ok) {
          const meeting = await response.json()
          setMeetingId(meeting.meetingId);
          await addUserToMeeting(meeting.meetingId)
          navigate(`/meetings/${meeting.meetingId}`)
        } else {
          console.error("No se ha podido crear la quedada")
        }
    } catch (error) {
      console.error("Error:", error)
    }
  }

    const addUserToMeeting = async (meetingId) => {
      try {
      const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}/users?userId=1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      if (response.ok) {
      const meetingDto = await response.json()
      console.log("Usuario añadido a la quedada:", meeting)
      } else {
        console.error("Ha abido un fallo añadiendo el usuario a la quedada")
      }
    } catch (error) {
      console.error("Error añadiendo el usuario a la quedada")
    }
  }

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
                        {route.videoUrl && <Youtube
                            id="vid"
                            width="743"
                            height="418"
                            videoId={route.videoUrl}
                            allowFullScreen
                        ></Youtube>}

                        <div>
                            <img
                                src={route.portraitPath}
                                alt="Image"
                                style={{ marginTop: "10px" }}
                                width="100%"
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
                            <div className="route-description">
                              {parse(route.fullDescription)}
                            </div>
                            <div className="mr-4 mb-2">
                                <span className="tm-text-gray-dark">Distancia: </span><span className="mb-5">{Intl.NumberFormat("es-ES").format(route.distance / 1000)}km</span>
                            </div>
                            <div className="mr-4 mb-2">
                                <span className="tm-text-gray-dark">Dificultad: </span><span className="mb-5">{route.difficulty}/10</span>
                            </div>
                            <div className="text-center mb-5">
                                <button
                                    onClick={saveRoute}
                                    className="btn btn-primary tm-btn-big"
                                    style={{ marginTop: "20px" }}
                                    id="openLoginPopupBtn3"
                                >
                                    Guardar Ruta
                                </button>
                            </div>
              {/* Popup de Inicio de Sesión */}
              <LoginPopup />
              {/* Popup de Registro */}
              <RegistrationPopup />
            </div>
          </div>
        </div>
      </div>
      <div className="cont-rutas">
        <h1 className="rutas-titular">Próximas quedadas</h1>
        {meetings.length === 0 ? (
          <p style={{color: "black"}}>No hay quedadas para esta ruta. Crea una abajo.</p>
        ) : (
          <div className="tabla">
          <table className="tg">
              <thead>
                  <tr>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Ver quedadas</th>
                  </tr>
              </thead>
              <tbody>
        {meetings.map((meeting) => (
            <MeetingList meeting={meeting} key={meeting.meetingId} />
            ))}
            </tbody>
            </table>
            </div>
)}
            <section style={{marginTop: "50px"}}>
                    <h1 className="rutas-titular">Crear quedada</h1>
                    <form class="form-quedada">
                    <div className="contenedor">
                        <div className="form-group">
                            <label style={{color: "#437571", margin: "0px", textAlign: "left"}} htmlFor="dat">Selecionar
                                fecha</label><br />
                            <input type="date" name="fecha" className="form-control" min="0" max="30" required
                                style={{padding: "15px 20px 15px 20px", marginTop: "-20px"}} 
                                value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label style={{color: "#437571", margin: "0px", textAlign: "left"}} htmlFor="hora">Seleccionar
                                hora</label><br />
                            <input type="time" name="hora" className="form-control" required
                                style={{padding: "15px 20px 15px 20px", marginTop: "-20px"}} 
                                value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="encuentro" style={{color: "#437571", margin: "0px", textAlign: "left"}} required>Punto de
                            encuentro</label>
                        <textarea id="perfil" className="form-control" rows="3" maxLength="200"
                            placeholder="Escribe un punto de encuentro" 
                            value={meetingPoint} onChange={(e) => setMeetingPoint(e.target.value)}></textarea>
                    </div>
                <button type="button" className="btn btn-primary" style={{marginBottom: "30px"}} onClick={crearQuedada}>Crear</button>
            </form>
            </section>
            </div>
    </main>
  );
};

const LoginPopup = () => {
  return (
    <div id="loginPopupForm" className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" id="closeLoginPopup">&times;</span>
        <h2>Iniciar Sesión</h2>
        <form id="loginForm" action="quedadas.html" method="POST">
          <div className="form-group">
            <label htmlFor="loginUsername">Nombre de usuario:</label>
            <input type="text" id="loginUsername" name="loginUsername" required />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Contraseña:</label>
            <input type="password" id="loginPassword" name="loginPassword" required />
          </div>
          <button type="submit" className="btn btn-primary">Ver</button>
          <p style={{ color: 'black', marginTop: '10px' }}>
            Si no estás registrado haz clic <a href="#" id="openPopup"><u>aquí</u></a>.
          </p>
          <p style={{ color: 'black', marginTop: '10px' }}>
            Has olvidado la contraseña? Haz clic <a href="#" id="#"><u>aquí</u></a>.
          </p>
        </form>
      </div>
    </div>
  );
};

const RegistrationPopup = () => {
  return (
    <div id="popupForm" className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" id="closePopup">&times;</span>
        <h2>Registro</h2>
        <form id="registrationForm" action="tu-url-de-base-de-datos" method="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="8 caracteres entre letras y números"
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="La contraseña debe tener al menos 8 caracteres, con letras y números."
              style={{ fontSize: '1em' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Repetir contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              style={{ fontSize: '1em' }}
            />
            <span id="La contraseña no coincide" style={{ color: 'red', fontSize: '0.9em' }}></span>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default RouteModel