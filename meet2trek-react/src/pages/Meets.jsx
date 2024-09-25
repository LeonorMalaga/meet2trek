
import React from "react"


export default function Meets() {
    return (
        <main>
            <div className="cont-rutas">
                <h1 className="rutas-titular">Quedadas Sendero río Chillar</h1>
                <div className="tabla">
                    <table className="tg">
                        <thead>
                            <tr>
                                <th>Fecha y hora</th>
                                <th>Punto de encuentro</th>
                                <th>Participantes</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tg-0pky">22/09/2024 a la 09h.</td>
                                <td className="tg-0pky">Plaza vieja. Nerja</td>
                                <td className="tg-0pky">
                                    <select className="form-control" id="contact-select-1" name="inquiry">
                                        <option></option>
                                        <option disabled>Pilar</option>
                                        <option disabled>Kati33</option>
                                        <option disabled>Felipe</option>
                                        <option disabled>María</option>
                                    </select>
                                </td>
                                <td className="tg-0pky" style={{ textAlign: "center" }}>
                                    <a href="ruta-recomend-detail.html"><u>Apuntarme</u></a><br />
                                    <a href="ruta-recomend-detail.html"><u>Borrarme</u></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-0pky">10/10/2024 a las 08h.</td>
                                <td className="tg-0pky">Bar "El encuentro". Nerja</td>
                                <td className="tg-0pky">
                                    <select className="form-control" id="contact-select-2" name="inquiry">
                                        <option></option>
                                        <option disabled>Antuan</option>
                                        <option disabled>Pere</option>
                                        <option disabled>Josefina</option>
                                    </select>
                                </td>
                                <td className="tg-0pky" style={{ textAlign: "center" }}>
                                    <a href="ruta-recomend-detail.html"><u>Apuntarme</u></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-0pky">25/10/2024 a las 08:30h.</td>
                                <td className="tg-0pky">Segunda fábrica de luz. Río Chillar</td>
                                <td className="tg-0pky">
                                    <select className="form-control" id="contact-select-3" name="inquiry">
                                        <option></option>
                                        <option disabled>Aitor</option>
                                        <option disabled>Maripepa</option>
                                        <option disabled>Sinfonía</option>
                                        <option disabled>Pepeluis</option>
                                    </select>
                                </td>
                                <td className="tg-0pky" style={{ textAlign: "center" }}>
                                    <a href="ruta-recomend-detail.html"><u>Apuntarme</u></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <section style={{ marginTop: "50px" }}>
                        <h1 className="rutas-titular">Crear quedada en esta Ruta</h1>
                        <div className="contenedor">
                            <div className="form-group">
                                <label style={{ color: "#437571", margin: "0px", textAlign: "left" }} htmlFor="dat">
                                    Seleccionar fecha
                                </label>
                                <input
                                    type="date"
                                    name="fecha"
                                    className="form-control"
                                    min="0"
                                    max="30"
                                    required
                                    style={{ padding: "15px 20px", marginTop: "-20px" }}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ color: "#437571", margin: "0px", textAlign: "left" }} htmlFor="hora">
                                    Seleccionar hora
                                </label>
                                <input
                                    type="time"
                                    name="hora"
                                    className="form-control"
                                    required
                                    style={{ padding: "15px 20px", marginTop: "-20px" }}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="encuentro" style={{ color: "#437571", margin: "0px", textAlign: "left" }}>
                                Punto de encuentro
                            </label>
                            <textarea
                                id="perfil"
                                className="form-control"
                                rows="3"
                                maxLength="200"
                                placeholder="Escribe una dirección concreta"
                            ></textarea>
                        </div>
                    </section>
                </div>
                <a href="#" style={{ float: "right", marginTop: "30px" }}>
                    <button type="button" className="btn btn-primary" style={{ marginBottom: "30px" }}>
                        Crear
                    </button>
                </a>
            </div>
        </main>
    );
}
