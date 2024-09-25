import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function RouteCard({ route }) {
    return (
        <Link to={`../routes/${route.routeId}`}>
            <div className="card">
                <img src={route.portraitPath} />
                <div className="card-content">
                    <h3 className="card-title">{route.name}</h3>
                    <h4>{route.shortDescription}</h4>
                    <div style={{display: "grid", gridTemplateColumns: "auto auto", alignItems: "center"}}>
                        <div className="card-features">Dificultad: {route.difficulty}/10<br />Distancia: {Intl.NumberFormat("es-ES").format(route.distance / 1000)}km</div>
                        <div style={{textAlign: "right"}}>{route.area}, {route.province}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RouteCard