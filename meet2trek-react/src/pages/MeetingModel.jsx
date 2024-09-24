import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MeetingModel() {
    const { meetingId } = useParams();
    const [meeting, setRoute] = useState({})
    useEffect(() => {
        async function getMeeting() {
            const meeting = await fetch(`http://localhost:8080/api/routes/${meetingId}`, 
                {method:"GET", 
                  headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                  }})
                .then(response => response.json())
                .then(data => data)
                .catch(error => console.error("Error: " + error))
            setRoute(meeting)
        }
        getMeeting()
    }, [meetingId])

    return (
    <main>
        <div className="cont-rutas" style={{height: "80vh"}}>
            <h1 className="rutas-titular">Quedada {meeting.route.name}</h1>
            <div className="tabla">
                <table className="tg">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Punto de encuentro</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tg-0pky">{meeting.meetingDate}</td>
                            <td className="tg-0pky">{meeting.meetingTime}</td>
                            <td className="tg-0pky">{meeting.meetingPoint}</td>
                            <td className="tg-0pky" id="eliminar1" style={{textAlign: "center", color: "red", cursor: "pointer"}}><u>Eliminar</u></td>
                        </tr>
                    </tbody>
                </table>
                <div className="row tm-mb-74 tm-people-row" style={{marginTop: "20px"}}>
            {meeting.users.map(user => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src={user.icon} alt="Image" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{marginBottom: "1.5rem"}}>
                  {user.username}
                </h2>
                </div>
            ))}
      </div>
            </div>
        </div>
    </main>
    )
}

export default MeetingModel