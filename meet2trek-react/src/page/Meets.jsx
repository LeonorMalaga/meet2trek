
import { useState } from "react"
export default Home;
export default Meets;


export function Meets () {
    return (

        <main>
        <div className="cont-rutas" style={{height: "80vh"}}>
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
                            <td className="tg-0pky"><select className="form-control" id="contact-select" name="inquiry">
                                    <option></option>
                                    <option disabled select>Pilar</option>
                                    <option disabled select>Kati33</option>
                                    <option disabled select>Felipe</option>
                                    <option disabled select>María</option>
                                </select></td>
                            <td className="tg-0pky" style={{text-align: center for="quedada1" onclick="mostrarAlerta1()"
                                id="quedada1"}}><a href="ruta-recomend-detail.html"><u>Apuntarme</u></a><br><a
                                    href="ruta-recomend-detail.html"><u>Borrarme</u></a></td>
                        </tr>
                        <tr>
                            <td className="tg-0pky">10/10/2024 a las 08h. </td> 
                            <td className="tg-0pky">Bar "El encuentro". Nerja </td>
                            <td className="tg-0pky"><select className="form-control" id="contact-select" name="inquiry">
                                    <option></option>
                                    <option disabled select>Antuan</option>
                                    <option disabled select>Pere</option>
                                    <option disabled select>Josefina</option>
                                </select></td>
                            </td>
                            <td className="tg-0pky" style={{textAlign: "center", for="quedada2" onclick="mostrarAlerta2()"
                                id="quedada2"}}><a href="ruta-recomend-detail.html"><u>Apuntarme</u></a></td>
                        </tr>
                        <tr>
                            <td className="tg-0pky">25/10/2024 a las 08,30h.</td>
                            <td className="tg-0pky">Segunda fábrica de luz. Río Chillar</td>
                            <td className="tg-0pky"><select className="form-control" id="contact-select" name="inquiry">
                                    <option></option>
                                    <option disabled select>Aitor</option>
                                    <option disabled select>Maripepa</option>
                                    <option disabled select>Sinfonía</option>
                                    <option disabled select>Pepeluis</option>
                                </select></td>
                            </td>
                            <td className="tg-0pky" style={{textAlign: "center" for="quedada3" onclick="mostrarAlerta3()"
                                id="quedada3"}}><a href="ruta-recomend-detail.html"><u>Apuntarme</u></a></td>
                        </tr>
                    </tbody>
                </table>

                <section style={{"margin-top: 50px;"}}>
                    <h1 className="rutas-titular">Crear quedada en esta Ruta</h1>
                    <div className="contenedor">
                        <div className="form-group">
                            <label style={{color: "#437571", margin: "0px", textAlign: "left", for="dat"}}>Selecionar
                                fecha</label><br>
                            <input type="date" name="fecha" className="form-control" min="0" max="30" required
                                style={{padding: "15px 20px 15px 20px", marginTop: "-20px"}} />
                        </div>

                        <div className="form-group">
                            <label style={{color: "#437571", margin: "0px", textAlign: "left", for="hora"}}>Seleccionar
                                hora</label><br/>
                            <input type="time" name="hora" className="form-control" required
                                style={{padding: "15px 20px 15px 20px", marginTop: "-20px"}} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="encuentro" style={{color: "#437571", margin: "0px", textAlign: "left", required}}>Punto de
                            encuentro</label>
                        <textarea id="perfil" className="form-control" rows="3" maxlength="200"
                            placeholder="Escribe una dirección concreta"></textarea>
                    </div>
                </section>
            </div>
            <a href="#" style={{float: "right", marginTop: "30px"}}>
                <button type="button" className="btn btn-primary" style={{marginBottom: "30px"}}>Crear</button>
            </a>
        </div>
        </main>
        )
}