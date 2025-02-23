# ES
## Tematica
ODS relacionados: Salud y bienestar (3) y Vida y ecosistemas terrestres (15)
## Objetivo :
Implementar una web facilitando prácticas encaminadas a garantizar el uso sostenible de los recursos naturales y fomentando practicas de vida saludable.
Tangencialmente, se consigue además una labor social, en cuanto a que conecta personas con intereses y gustos comunes.

## Método :
Creación de un projecto en el que, facilitando el usuario unos datos, la propia web le conecte con las rutas mas adecuadas a sus gustos, limitaciones, características, cruzando la información contenida en la base de datos y le facilita el establecer comunicacion con otros usuarios con gustos similares. Además de permitirle dar de alta sus propias rutas y propuestas de quedadas.

## Run
-1- Crear una base de datos llamada 'meet2treek' en mysql con credenciales de acceso 'root/root', o las que se deseen si luego cambias el fichero :"/../meet2trek/spring_boot/src/main/resources/application.properties"
-2- Abrir la carpeta: "/.../meet2trek/spring_boot" con IntelliJIDEA.
-3- Boton derecho sobre : "/.../meet2trek/spring_boot"-->Maven-->Download Sources.
-4- Boton derecho sobre : "/.../meet2trek/spring_boot"-->Maven-->Reload Project.
-5- Abrir: "/../meet2trek/spring_boot/src/main/java/com/esplai/meet2trek/Meet2trekApplication.java" y ejecutar. Si la conexion a la base de datos funciona se crearan las tablas: 'meeting', 'route', 'user','user_saved_routes' y 'users_in_meeting'. Y quedara la API ejecutandose en el puerto http://localhost:8080.
![Run API](documentacion_es/Run_Meet2Trek.png)
-6- Para ejecutar la interfaz grafica abri con la cosola el directorio: "/.../meet2trek/meet2trek-react".
-7- Ejecutar:
https://nodejs.org/en/download/prebuilt-installer
install all requiered
#npm créate vite@latest
   Y 
   React
   Javascript-swc
```bash
npm install
npm run dev
```bash
8- Abrir en tu navegador: "http://localhost:5173/".

## Prototipo
Permite :registro, eliminación y modificacion de Usuarios;  creación, eliminación , modificacion y busqueda de rutas ; creación, eliminación y modificacion de quedadas, para ello se desarrolla en SpringBootData + Hibernate un API RESTFULL[ pinche aqui para ver la documentación del API](documentacion_es/API_Prototipo.md).
### Flujogramas del prototipo
![Prototipo-Elementos en cada Vista](documentacion_es/Run M)
El prototipo consta de 5 vistas principales y 5 popups-listados:
##### <u> Vista Principal:</u><br>
Consta de:
* Filtro de busqueda para las rutas.
* Listado de rutas que varía según el filtro y que al pulsar sobre una de ellas te abre la Vista de __"Detalle de Ruta"__.
* Un botón __"Registro"__ que abre un Popup.
* Un botón __"Iniciar Sesión"__ que abre otro Popup.
##### <u> Popup Registro:</u><br>
Una vez introducidos los datos requeridos, si el nombre del usuario no existe con anterioridad al pulsar sobre "Enviar", se abre la __"Vista de Usiario"__, si el nombre de usuario ya existiese en el sistema, salta un popup indicando que ha de escribir un nombre de usuario distinto.
##### <u> Popup Iniciar Sesión:</u><br>  
Una vez introducidos el nombre de usuario y la contraseña, si son correctosel al pulsar sobre "Enviar", se abre la __"Vista de Usiario"__, si alguno de los datos es incorrecto, se le indica cúal. 
##### <u> Detalle de Ruta:</u><br>
Contiene imagenes y información ampliada de la ruta como: punto de inicio, lonjitud, difigultad .. Al pulsar sobre el botón "Unirme" se abre el popup de __"Registro"__.
##### <u> Vista Usuario:</u><br>
Conta de:
* Boton "Editar Usuario" que abre la __"Vista Editar Usuario"__.
* Boton "Mis quedadas" que abre el __"Listado Mis Quedadas"__.
* Filtro de busqueda para las rutas.
* Listado de rutas prefiltrado con las preferencias del usuario y que varía si el usuario realiza una busqueda. Al pulsar sobre una de las rutas se abre la Vista de __"Ficha de Ruta"__.
##### <u> Listado Mis Quedadas:</u><br>
Muestra un lidato en el que cada fila contiene:
* Nombre de la Ruta.
* Fecha y hora de la quedada.
* Boton para desapuntarse que ejecuta una llamada al backen.
* Número de usuarios que se han apuntado a la ruta en la fecha y hora indicadas.
##### <u> Ficha de Ruta:</u><br>
Contiene la misma información que "Detalle de Ruta", pero está vez al pulsar sobre el botón se abre --"Listado Fechas"--.
##### <u> Listado Fechas:</u><br>
Contiene un listado con las Fechas de las quedadas previstas para la ruta seleccionada y al lado de cada uno de ellas un boton que al pulsarlo llama al backend para añadir al Usuario a la quedada. Además tiene el botón "Añadir Fecha" que abre un popup con un calendarío y una vez seleccionada la fecha ejecuta una llamada al backend que crea un objeto meeting. 
##### <u> Vista Editar Usuario:</u><br>
Permite al usuario:
* Cambiar su nombre de Usuario. Se verifica que el nuevo nombre de usuarío no exista ya en la base de datos al pulsar sobre el botón "Guardar", si existe no se permite guardar y salta un popup indicando que el nombre de usuario ya esta en uso.
* Cambiar su contraseña. Para lo cual abre un popup donde se le pide que indroduzca dos veces la nueva contraseña.
* Cambiar su direción de correo. Al pulsar sobre el botón "Guardar", se verifica que no coincida con la de otro usuario y si ya esta en uso no se permite guardar, indicando con un popup que el e-mail ya esta en uso por otro usuario.
* Permite añadir una imagen al perfil(foto o icono).
* Permite añadir los siguientes filtros/ preferencias de busqueda de rutas:
    - dificultad.
    - longitud aproximada.
    - Provicia.
    - Localidad o nombre de la zona (ejem. El Torcal).

### Diagrama entidad relación
![V1-Esquema base de datos](documentacion_es/EntityRelation_Prototype.jpg)
___
# EN
## Match Project
Related SDGs: Health and well-being (3) and Terrestrial Life and Ecosystems (15)
## Objective :
To implement a website facilitating practices aimed at ensuring the sustainable use of natural resources and promoting healthy living practices.
Tangentially, it also achieves social work, in that it connects people with common interests and tastes.

## Method :
Creation of a web page in which, by providing the user with some data in a questionnaire, the web itself connects them with the most suitable routes according to their tastes, limitations, characteristics, crossing the information contained in the database.

## V1
You can see the avaliable Http requests at our [API_V1 documentation](documentation_en/API_V1.md).
### Views Flows diagram
![V1-Views Elements](documentation_en/Views_V1.jpg)
### Database Entity Relation diagram
![V1-Entity Relation](documentation_en/EntityRelation_V1.jpg)


