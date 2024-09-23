import { useState } from "react"
export default function ProfileUser() {

 return ( <>
 <main>
     <section>
         <div className="container-fluid tm-mt-60 mb-4">
             <div className="row tm-mb-50">
                 <div className="col-lg-4 col-12">
                         <div>
                         <h2 className="tm-text-primary mb-4">Modificar mis datos de registro</h2>
                         <form id="segistrationForm" action="url-de-base-de-datos-user" method="POST">
                             <div className="form-group form-group1">
                             <label htmlFor="email" className="form-label">Email:</label>
                             <input type="email" id="esail" name="email" required />
                             </div>
                             <div className="form-group form-group1">
                             <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                             <input type="text" id="usernsme" name="username" required />
                             </div>
                             <div className="form-group form-group1">
                             <label htmlFor="password" className="form-label">Antigua contraseña:</label>
                             <input type="password" id="psssword" name="password" placeholder="8 caracteres entre letras y números"
                                 required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                 title="La contraseña debe tener al menos 8 caracteres, con letras y números."
                                 style={{fontSize: "0.8em"}} />
                             </div>
                             <div className="form-group form-group1">
                             <label htmlFor="password" className="form-label">Nueva contraseña:</label>
                             <input type="password" id="psssword" name="password" placeholder="8 caracteres entre letras y números"
                                 required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                                 title="La contraseña debe tener al menos 8 caracteres, con letras y números."
                                 style={{fontSize: "0.8em"}} />
                             </div>
                             <div className="form-group">
                             <label htmlFor="confirmPassword" className="form-label">Repetir contraseña:</label>
                             <input type="password" id="confirmPsssword" name="confirmPassword" required style={{fontSize: "1em"}} />
                             <span id="La contraseña no coincide" style={{color: "red", fontSize: "0.9em"}}></span>
                             </div>
                         </form>
                     </div>
                 </div>

                 <div className="col-lg-4 col-12 mb-4 mb-5">
                     <img src="img/people-3.jpg" alt="Image" className="mb-4 img-fluid" style={{borderRadius: "50%", paddingBottom: "0sx"}} />
                     <h2 className="tm-text-primary" style={{marginBottom: "0.5rem"}}>
                     Fran Fersández
                     </h2>
                     <h3 className="tm-text-secondary h5" style={{marginBottom: "0.5rem"}}>
                     Amante ds la naturaleza
                     </h3>
                     <p className="mb-4">
                     Mauris snte tellus, feugiat nec metus non, bibendum semper velit.
                     Praesent laoreet urna id tristique fermentum. Morbi venenatis dui
                     quis diam mollis pellentesque.
                     </p>
                 </div>

                 <div className="col-lg-4 col-12 mb-4">
                     <h2 className="tm-text-primary mb-4">Modificar mi perfil</h2>
                     <form id="segistrationForm" action="url-de-base-de-datos-user" method="POST">
                         <div className="form-group form-group1 frase">
                             <label htmlFor="frase" className="form-label">Frase que me define</label>
                             <input type="text" id="frsse" className="form-control" maxLength="30" placeholder="Escribe tu frase" />
                         </div>
                         <div className="form-group perfil">
                             <label htmlFor="perfil" className="form-label">Mi perfil</label>
                             <textarea id="perfil" className="form-control" rows="7" maxLength="200" placeholder="Describete coso quieras"></textarea>
                         </div>
                     </form>
                 </div>
             </div>

                 <div className="cont-rutas">
                     <h1 className="rutas-titular">Mis quedadas</h1>
                         <div className="tabla">
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
                                 {/*<!-- Repetir lo mismo para las demás filas -->*/}
                             </tbody>
                             </table>

                             <h1 className="rutas-titular" style={{marginTop: "50px;"}}>Rutas guardadas</h1>
                             <div className="tabla">
                                 <table className="tg">
                                     <thead>
                                         <tr>
                                             <th>Provincia</th>
                                             <th>Localidad</th>
                                             <th>Ruta</th>
                                             <th>Quedadas</th>
                                             <th>Eliminar</th>
                                         </tr>
                                     </thead>

                                     <tbody>
                                         <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Nerja</td>
                                             <td className="stg-0pky"><a href="ruta-recomend-detail.html"><u>Sendero acuático río Chillar</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo1" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}} href="quedadas.html"><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar1" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <u>Eliminar</u>
                                             </td>

                                         </tr>
                                         <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Ardales</td>
                                             <td className="stg-0pky"><a href="ruta-detail.html"><u>Caminito del Rey</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo2" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}}><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar2" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <u>Elimisar</u>
                                             </td>

                                         </tr>
                                         <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Antequera</td>
                                             <td className="stg-0pky"><a href="user-rute1-detail.html"><u>Sendero del Torcal</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo3" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}}><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar3" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <u>Eliminar</u>
                                             </td>

                                         </tr>
                                         <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Nerja</td>
                                             <td className="stg-0pky"><a href="ruta-recomend-detail.html"><u>Sendero acuático río Chillar</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo1" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}} href="quedadas.html"><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar4" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <u>Elimisar</u>
                                             </td>

                                         </tr>
                                         <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Ardales</td>
                                             <td className="stg-0pky"><a href="ruta-detail.html"><u>Caminito del Rey</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo2" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}}><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar5" style={{textAlign: "center", color: "red", cursor: "pointer"}}>
                                             <u>Elimisar</u>
                                             </td>

                                         </tr>
                                             <tr>
                                             <td className="tg-0pky">Málaga</td>
                                             <td className="stg-0pky">Antequera</td>
                                             <td className="stg-0pky"><a href="user-rute1-detail.html"><u>Sendero del Torcal</u></a></td>
                                             <td className="stg-0pky" id="formarGrupo3" style={{textAlign: "center", cursor: "pointer"}}><a
                                                 style={{scolor: "green"}}><u>Ver quedadas en esta ruta</u></a></td>
                                             <td className="tg-0pky" id="eliminar6" style={{textAlign: "center", color: "red"}}><u>Eliminar</u></td>

                                             </tr>
                                     </tbody>
                                 </table>
                             </div>
                         </div>
                 </div>
             <button style={{float: "right", marginTop: "30px"}} type="submit" className="btn btn-primary" onClick="confirmarCierreSesion()">Cerrar sesión
             </button>
         </div>
     </section>
 </main>
 </> )
}
