import { useEffect, useState } from "react";
import RouteCard from "./RouteCard";

function RouteList() {
    const [route, setRoute] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/routes")
        .then(response => response.json())
        .then(data => setRoute(data))
    })

    return (
        <>
        {route.map((route, index) => (
            <RouteCard route={route} key={index} />
        ))}
        </>
    )
}

export default RouteList