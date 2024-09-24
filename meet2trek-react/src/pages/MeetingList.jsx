import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function MeetingList({ meeting }) {
    return (
        <>
        <tr>
            <td className="tg-0pky" style={{textAlign: "center"}}>
                {meeting.meetingDate}
            </td>
            <td className="tg-0pky" style={{textAlign: "center"}}>
                {meeting.meetingTime}
            </td>     
            <td className="tg-0pky" style={{textAlign: "center"}}>
                <Link to={`../meetings/${meeting.meetingId}`}>
                <u>Ver</u>
                </Link>
            </td>
        </tr>
        </>
    )
}

export default MeetingList