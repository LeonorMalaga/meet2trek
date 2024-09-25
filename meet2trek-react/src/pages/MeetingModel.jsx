import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MeetingModel() {
    const { meetingId } = useParams();
    const [meeting, setMeeting] = useState({})
    const [route, setRoute] = useState({});
    const [users, setUsers] = useState([]);

    const getMeeting = async () => {
        const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}`, 
            {method:"GET", 
              headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
              }})
            const data = await response.json()
        setMeeting({
            meetingId: data.meetingId,
            meetingDate: data.meetingDate,
            meetingTime: data.meetingTime,
            meetingPoint: data.meetingPoint
        })
        setRoute(data.route)
        setUsers(data.users)
    }

    useEffect(() => {
        getMeeting()
    }, [meetingId])

    const [userJoined, setUserJoined] = useState()

    const userCheck = async () => {
        const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}/users/1`, 
            {method:"GET", 
              headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
              }})
            const data = await response.json()
            setUserJoined(data)
    }

    useEffect(() => {
        userCheck()
    }, [])

    const addUserToMeeting = async () => {
        const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}/users?userId=1`, 
            {method:"POST", 
              headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
              }})
            const meetingDto = await response.json()
            console.log("User added to meeting")
            await getMeeting();
            await userCheck();
            return meetingDto
    }

    const removeUserFromMeeting = async () => {
        const response = await fetch(`http://localhost:8080/api/meetings/${meetingId}/users?userId=1`, 
            {method:"DELETE", 
              headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
              }})
            const meetingDto = await response.json()
            console.log("User removed from meeting")
            await getMeeting();
            await userCheck();
            return meetingDto
    }

    return (
    <main>
        <div className="cont-rutas" style={{height: "80vh"}}>
            <h1 className="rutas-titular">Quedada en {route.name}</h1>
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
                            <td className="tg-0pky" id="eliminar1" style={{textAlign: "center", cursor: "pointer"}}>{userJoined ? (<button onClick={removeUserFromMeeting}>Desapuntarme</button>) : (<button onClick={addUserToMeeting}>Apuntarme</button>)}</td>
                        </tr>
                    </tbody>
                </table>
            {users.length === 0 ? ("") : (
                <div className="row tm-mb-74 tm-people-row" style={{marginTop: "20px"}}>
            {users.map(user => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                <img src={user.icon} alt="Image" className="mb-4 img-fluid" />
                <h2 className="tm-text-primary" style={{marginBottom: "1.5rem"}}>
                  {user.username}
                </h2>
                </div>
            ))}
      </div>
      )}
            </div>
        </div>
    </main>
    )
}

export default MeetingModel