import { useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import MeetingList from "./MeetingList";

export default function ProfileUser() {

        const [user, setUser] = useState({})

        const getUser = async () => {
            const response = await fetch(`http://localhost:8080/api/users/1`, 
            {method:"GET"})
            const data = await response.json()
            setUser(data)
        }

        useEffect(() => {
            getUser()
        }, [])

        const [meetings, setMeetings] = useState([])

        const getMeetings = async () => {
            const response = await fetch(`http://localhost:8080/api/users/1/meetings`, 
                {method:"GET"})
                const data = await response.json()
                setMeetings(data)
        }

        useEffect(() => {
            getMeetings()
        }, [])

        const [routes, setRoutes] = useState([])

        const getRoutes = async () => {
            const response = await fetch(`http://localhost:8080/api/users/1/savedRoutes`, 
                {method:"GET"})
                const data = await response.json()
                setRoutes(data)
        }

        useEffect(() => {
            getRoutes()
        }, [])

        const removeSavedRoute = async (routeId) => {
            const response = await fetch(`http://localhost:8080/api/users/1/savedRoutes?routeId=${routeId}`, 
                {method:"DELETE", 
                  headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                  }})
                const userDto = await response.json()
                console.log("Route removed from user's saved routes")
                await getRoutes();
                return userDto
        }

 return ( <>
 <main>
          
        <section>
   
         <div className="container-fluid tm-mt-60 mb-4">
        
             <div className="row tm-mb-50">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column" }}>
             <img src={"img/img-09.jpg"} alt="Image" style={{width: '100vw', height: '35vh', marginBottom:"5vh", objectFit: 'cover' }} />
             <h1 className="tm-text-primary mb-4" >Mi Perfil</h1>

                 <div className="col-lg-4 col-12 mb-4 mb-5">
                     <img src={user.icon} alt="Image" className="mb-4 img-fluid" style={{borderRadius: "50%", paddingBottom: "0sx"}} />
                     <h2 className="tm-text-primary" style={{marginBottom: "0.5rem"}}>
                     {user.username}
                     </h2>
                     <h2 className="tm-text-secondary" style={{marginBottom: "0.5rem"}}>
                     {user.email}
                     </h2>
                     <h3 className="tm-text-secondary h5" style={{marginBottom: "0.5rem"}}>
                     {user.slogan}
                     </h3>
                     <p className="mb-4">
                     {user.aboutMe}
                     </p>
                 </div>
</div>
             </div>

                 <div className="cont-rutas">
                     <h1 className="rutas-titular">Mis quedadas</h1>
                     {meetings.length === 0 ? (
                        <p style={{color: "black"}}>No estás apuntado a ninguna quedada.</p>
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

                         {/*<div className="tabla">
                             <table className="tg">
                             <thead>
                                 <tr>
                                 <th>Provincia</th>
                                 <th>Localidad</th>
                                 <th>Fecha y hora</th>
                                 <th>Rutas guardadas</th>

                                 </tr>
                             </thead>

                             <tbody>
                                 <tr>
                                 <td className="tg-0pky">Málaga</td>
                                 <td className="stg-0pky">Nerja</td>
                                 <td className="stg-0pky">22/09/2024 a la 09h.</td>
                                 <td className="stg-0pky"><a href="ruta-recomend-detail.html"><u>Sendero acuático río Chillar</u></a></td>

                                 </tr>
                                 <tr>
                                 <td className="tg-0pky">Málaga</td>
                                 <td className="stg-0pky">Ardales</td>
                                 <td className="stg-0pky">10/10/2024 a la 08h.</td>
                                 <td className="stg-0pky"><a href="ruta-detail.html"><u>Caminito del Rey</u></a></td>
                                 </tr>
                                 <tr>
                                 <td className="tg-0pky">Málaga</td>
                                 <td className="stg-0pky">Antequera</td>
                                 <td className="stg-0pky">24/10/2024 a la 08,30h.</td>
                                 <td className="stg-0pky"><a href="#"><u>Sendero del Torcal</u></a></td>

                                 </tr>
                                 {<!-- Repetir lo mismo para las demás filas -->}
                             </tbody>
                             </table>*/}


                             <div style={{paddingTop: "35px"}}>
                             <h1 className="rutas-titular" style={{marginTop: "50px;"}}>Rutas guardadas</h1>
                             {routes.length === 0 ? (
                                <p style={{color: "black"}}>No tienes ninguna ruta guardada.</p>
                             ) : (
                             <div className="tabla">
                                 <table className="tg">
                                     <thead>
                                         <tr>
                                             <th>Provincia</th>
                                             <th>Localidad</th>
                                             <th>Ruta</th>
                                             <th>Eliminar</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         {routes.map((route) => (
                                            <tr>
                                             <td className="tg-0pky">{route.province}</td>
                                             <td className="stg-0pky">{route.area}</td>
                                             <td className="stg-0pky"><Link to={`../routes/${route.routeId}`}><u>{route.name}</u></Link></td>
                                             <td className="tg-0pky" id="eliminar1" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <button onClick={() => removeSavedRoute(route.routeId)}>Eliminar</button>
                                             </td>
                                             </tr>
                                             ))}
                                     </tbody>
                                 </table>
                             </div>)}
                         </div>
                 </div>
            </div>
     </section>
 </main>
 </> )
}
