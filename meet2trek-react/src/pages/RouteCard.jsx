function RouteCard({ route }) {
    return (
        <>
        <div className="card">
            <img src={route.portraitPath} alt="Imagen 1" />
            <div className="card-content">
                <h3 className="card-title">{route.name}</h3>
                <h4>{route.shortDescription}</h4>
                <p className="card-features">Dificultad: {route.difficulty}/10<br />Distancia: {Intl.NumberFormat("es-ES").format(route.distance / 1000)}km</p>
            </div>
        </div>
        </>
    )
}

export default RouteCard