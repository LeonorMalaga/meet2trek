# API
***
***
# INDICE

## GET
- [RUTAS](#route)
  - [Encontrar ruta por ID](#routefindbyid)
  - [LISTADO DE RUTAS](#routelist)
    - [Obtener todas las rutas](#findall)
    - [Filtrar por dificultad](#findbydifficulty)
    - [Filtrar por longitud](#findbydistance)
    - [Filtrat por ciudad](#findbycountry)
    - [Filtrar por provincia](#findbyprovince)
    - [Filtrar por zona](#findbyarea)
    - [Filtros disponibles](#all-filters)
- [USUARIOS](#user)
  - [Obtener usuario por Id](#userfindbyid)
  - [Obtener todos los usuarios](#findallusers)
  - [Obtener los usuarios por quedada](#userlistbymeeting)
- [QUEDADAS](#meeting)
    - [Obtener quedada por Id](#meetingfindbyid)
    - [Obtener todas las quedadas](#getallmeetings)
    - [Obtener todas las quedadas pendientes](#getallactivemeetings)
    - [Obtener quedadas por fecha](#findmeetingsbydate)

## POST
- [Crear una ruta](#post_route)
- [Crear un usuario](#post_user)
- [Crear una Quedada](#post_meeting)

## PUT
- [Actualizar una Ruta](#put_route)
- [Actualizar un Usuario](#put_user)
- [Actualizar una quedada](#put_meeting)
- [Añadir nuevo usuario a una quedada](#put_user_in_meeting)

## DELETE
- [Borrar ruta](#delete_route)
- [Borrar Usuario](#delete_user)
- [Borrar Quedada](#delete_meeting)
- [Eliminar un usuario de una quedada](#delete_user_from_meeting)

***
***


## GET 
Obtiene objetos Json.
### Route
####  RouteFindById
Obtiene un objeto Json de Ruta por su Id.

URL: https://121.0.0.1:8080/api/v1/routes/{route_Id}  
Ejemplo:
```json
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/ROUTES/SPAIN/MALAGA/",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "CAMINITO_DEL_REY" 
}
```
 
####  RouteList
Devuelve una Json ArrayList de rutas. Puedes filtrarlas a través de las siguientes variables: dificultad, distancia, país, provincia, area. 
Puedes filtrar por una, dos o más variables.

#####  FindAll
Obtiene todas las rutas sin aplicar filtros.

URL: https://121.0.0.1:8080/api/v1/routes  
Ejemplo:  
```json
[
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/ROUTES/SPAIN/MALAGA/CAMINITO_DEL_REY/1_Caminito_del_Rey_acceso_Sur",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "CAMINITO_DEL_REY"  
},
{  
    "route_id": 2,  
    "name": "Caminito del Rey acceso Norte",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/ROUTES/2",  
    "starting_point": "https://maps.app.goo.gl/U7BB8LSMW13LNdc29",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "CAMINITO_DEL_REY" 
},
.
.
.
{  
    "route_id": 3000,  
    "name": "Los Cahorros del Rio Chillar",  
    "description": "Caminar dentro de un rio",  
    "url_resources": "/ROUTES/3000",  
    "starting_point": "https://maps.app.goo.gl/sKeceJMropWTW7S27",  
    "difficulty": 4,  
    "distance": 8720,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Rio Chillar"  
}

]
```
Ejemplo de filtros:
####  FindByDifficulty
Devuelve todas las rutas con el nivel de dificultad indicado.

URL: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}
####  FindByDistance
Devuelve todas las rutas con un distancia comprendida entre (diatanciaprox-range) y (distanceaprox + range).

URL: https://121.0.0.1:8080/api/v1/routes?distance={distanceaprox}&range={range}
####  FindByCountry
Devuelve todas las rutas del país indicado.

URL: https://121.0.0.1:8080/api/v1/routes?country={country}
####  FindByProvince
Devuelve todas las rutas de la provincia indicada.

URL: https://121.0.0.1:8080/api/v1/routes?province={province}
####  FindByArea
Devuelve todas las rutas que esten asociadas al area (pueblo, parque natural, area recreativa o nombre de la zona) indicada.

URL: https://121.0.0.1:8080/api/v1/routes?area={area}
####  All Filters
Ejemplo de filtros disponibles, puede usar uno o varios:

URL: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}&distance={distanceaprox}&range={range}&country={country}&province={province}&area={area}

### User
####  UserFindById
Devuelve un objeto Json de UserDto por su Id.

URL: https://121.0.0.1:8080/api/v1/users/{Id}

Ejemplo de respuesta para  [Id de usuario] = 1), se regresa UserDto(password y e-mail ocultos) : 
```json
{  
    "user_id": 1,
    "username": "Trekker123",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1,   
    "p_difficulty": 2,  
    "p_distanceApprox": 3000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
}
```
####  FindAllUsers
Devuelve un ArrayList de todos los usuarios registrados (regresa UserDto).

URL: https://121.0.0.1:8080/api/v1/user

Ejemplo:
```json
[
{  
    "user_id": 1,
    "username": "Trekker123",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1",   
    "p_difficulty": 2,  
    "p_distanceApprox": 3000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
},
{  
    "user_id": 2,
    "username": "Trekker111",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
},
    .
    .
    .
{  
    "user_id": 100,
    "username": "Trekker234",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/100",   
    "p_difficulty": 1,  
    "p_distanceApprox": 120,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
}
]
```
####  UserListByMeeting
Obtiene una lista de todos los usuarios (UserDto) que se han unido a una quedada específica en una ruta específica.

URL: https://121.0.0.1:8080/api/v1/users/meeting/{Meeting_Id}  
Ejemplo:
```json
[
{  
    "user_id": 1,
    "username": "Trekker123",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1",   
    "p_difficulty": 2,  
    "p_distanceApprox": 3000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
},
{  
    "user_id": 2,
    "username": "Trekker111",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
},
    .
    .
    .
{  
    "user_id": 100,
    "username": "Trekker234",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/100",   
    "p_difficulty": 1,  
    "p_distanceApprox": 120,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
}
]
```
### Meeting
####  MeetingFindById
Obtiene un objeto Json de quedada por su Id.

URL: https://121.0.0.1:8080/api/v1/meetings/{meeting_Id}  
Ejemplo:
```json
{  
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/ROUTES/1",  
        "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
        "difficulty": 2,  
        "distance": 8720,  
        "country": "SPAIN",  
        "province": "MALAGA",  
        "area": "Ardales"  
    },  
    {  
        {  
            "user_id": 1,
            "username": "Trekker123",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/1",   
            "p_difficulty": 2,  
            "p_distanceApprox": 3000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "MALAGA"  
        },
        {  
            "user_id": 2,
            "username": "Trekker111",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/2",   
            "p_difficulty": 1,  
            "p_distanceApprox": 500,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "MALAGA"  
        },
            .
            .
            .
        {  
            "user_id": 100,
            "username": "Trekker234",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/100",   
            "p_difficulty": 1,  
            "p_distanceApprox": 120,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "MALAGA"  
        } 
    }  
}
```
####  GetAllMeetings
Devuelve una ArrayList de todas las quedadas (usando un MeetingDto).
URL: https://121.0.0.1:8080/api/v1/meetings  
Ejemplo:
```json
[
    {  
        "meeting_id": 1,  
        "date": "19/08/2024 17:00",  
        {  
            "route_id": 1,  
            "name": "Caminito del Rey"
        },  
        {  
            {  
                "user_id": 1,
                "username": "Trekker123"  
            },  
            {  
                "user_id": 100,
                "username": "Trekker234"  
            }  
        }  
    }
]
```
####  GetAllActiveMeetings
Devuelve una ArrayList de todas las quedadas activas (usando un MeetingDto).
URL: https://121.0.0.1:8080/api/v1/meetings/active  
Ejemplo:
```json
[
    {  
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",  
        {  
            "route_id": 1,  
            "name": "Caminito del Rey"
        },  
        {  
            {  
                "user_id": 1,
                "username": "Trekker123"  
            },  
            {  
                "user_id": 100,
                "username": "Trekker234"  
            }  
        }  
    },
    {  
        "meeting_id": 2,  
        "date": "20/08/2024 11:00",  
        {  
            "route_id": 5,  
            "name": "Laguna Negra"
        },  
        {  
            {  
                "user_id": 6,
                "username": "Trekker6"  
            },  
            {  
                "user_id": 50,
                "username": "Trekker50"  
            }  
        },
        {  
            "meeting_id": 3,  
            "date": "20/08/2024 17:00",  
            {  
                "route_id": 1,  
                "name": "Caminito del Rey"
            },  
            {  
                {  
                    "user_id": 8,
                    "username": "Tre123"  
                },  
                {  
                    "user_id": 10,
                    "username": "ker234"  
                } 
            }     
        }  
     },
    {  
        "meeting_id": 4,  
        "date": "21/08/2024 17:00",  
        {  
            "route_id": 15,  
            "name": "Benahavis"
        },  
        {  
            {  
                "user_id": 34,
                "username": "Rocio1"  
            },  
            {  
                "user_id": 50,
                "username": "Trekker50"  
            }  
        }  
    }

]
```
####  FindMeetingsByDate
Devuelve una ArrayList de las quedadas (MeetingsDto) a partir de una fecha.  
URL: https://121.0.0.1:8080/api/v1/meetings?date={date}  
Ejemplo:
```json
[
    {  
        "meeting_id": 1,  
        "date": "19/08/2024 17:00",  
        {  
            "route_id": 1,  
            "name": "Caminito del Rey"
        },  
        {  
            {  
                "user_id": 1,
                "username": "Trekker123"  
            },  
            {  
                "user_id": 100,
                "username": "Trekker234"  
            }    
        },
        {  
            "meeting_id": 4,  
            "date": "19/08/2024 17:00",  
            {  
                "route_id": 5,  
                "name": "Laguna Negra"
            },  
            {  
                {  
                    "user_id": 6,
                    "username": "Trekker6"  
                },  
                {  
                    "user_id": 50,
                    "username": "Trekker50"
                }
            }  
        }  
    }
]
```
## POST
### post_Route
Crea un nuevo objeto ruta, dado un cuerpo Json.  
POST URL: https://121.0.0.1:8080/api/v1/route/  
Cuerpo Json que enviar:
```json
{  
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 2,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```  
Respuestas posibles:  
201(OK):
```json
{
    "route_id": 20,
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta", 
    "url_resources": "/ROUTES/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```
406(No aceptable):
```json
{
    message:"Incorrect or Incomplete Json body Fields",
    incorrectFields: "Lista de campos incorrectos"
}
```
409(Conflicto):
```json
{
    message:"The route already exists, please indicate a different dates for: name or difficulty or distance or starting_point or country or province or area.",
    {
    "route_id": 11,
    "name": "Montes de MALAGA",  
    "description": "Zona alborada cercana a la ciudad, apto para pasear en perro  y con niños", 
    "url_resources": "/ROUTES/11",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
    }
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### post_User
Crea un nuevo objeto de usuario, dado un cuerpo Json.

POST URL: https://121.0.0.1:8080/api/v1/user/  
Cuerpo Json que mandar:
```json
{  
    "username": "Jonatan0",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",    
    "p_difficulty": 3,  
    "p_distanceApprox": 8000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
}
```  
Respuestas posibles:  
201(OK):
```json
{
    "user_id": 15,
    "username": "Jonatan0",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/15",   
    "p_difficulty": 3,  
    "p_distanceApprox": 8000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "MALAGA"  
}
```
406(No aceptable):
```json
{
    message:"Incorrect or Incomplete Json body Fields",
    incorrectFields: "Lista de campos incorrectos"
}
```
409(Conflicto):
```json
{
    message:"The user already exists, Change the user's name"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### post_Meeting
Crea un nuevo objeto de quedada, dado un cuerpo Json, usando la Id de una ruta y una ArrayList de las Ids de los usuarios.  
POST URL: https://121.0.0.1:8080/api/v1/meeting  
Cuerpo Json que mandar: 
```json
{  
    "date": "19/08/2024 17:00",  
    "route_id": 1,
    "user_id": 15,
}
```  
Respuestas posibles:  
201(OK):
```json
{  
    "meeting_id": 300,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/ROUTES/1",  
        "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
        "difficulty": 2,  
        "distance": 8720,  
        "country": "SPAIN",  
        "province": "MALAGA",  
        "area": "Ardales"  
    },  
    {  
        {  
            "user_id": 15,
            "username": "ker12",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/15",   
            "p_difficulty": 5,  
            "p_distanceApprox": 18000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "Ardales"  
        }
    }
}
```
406(No aceptable):
```json
{
    message:"Incorrect or Incomplete Json body Fields",
    incorrectFields: "Lista de campos incorrectos"
}
```
409(Conflicto):
```json
{
    message:"The date for this route meeting already selected, chose another minute",
    "selectedRoute": 1,
    "selectedDate":  "19/08/2024 17:00"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
## PUT
### put_Route
Edita un objeto ruta existente, dado un cuerpo Json y habiendo especificado su Id (PK).
PUT url: https://121.0.0.1:8080/api/v1/route/{Id}  
Cuerpo Json que mandar:
```json
{  
    "route_id": 20,
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/ROUTES/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```  
Respuestas posibles:  
201(OK):
```json
{
    "route_id": 20,
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/ROUTES/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```
406(No aceptable):
```json
{
    message:"route_Id o Incorrect or Incomplete Json Fields",
    incorrectFields:  "route_Id not exist"  o "List of incorrect fields"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### put_User
Edita un objeto usuario existente, dado un cuerpo Json y habiendo especificado su Id (PK).
PUT URL: https://121.0.0.1:8080/api/v1/user/{Id}  
Cuerpo Json que mandar: 
```json
{  
    "username": "Jonatan0",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",    
    "p_difficulty": 3,  
    "p_distanceApprox": 9000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "Antequera"  
}
```  
Respuestas posibles:  
201(OK):
```json
{
    "user_id": 15,
    "username": "Jonatan0",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/15",   
    "p_difficulty": 3,  
    "p_distanceApprox": 9000,  
    "p_country": "SPAIN",  
    "p_province": "MALAGA",  
    "p_area": "Antequera"  
}
```
406(No aceptable):
```json
{
    message:"User_id = Incorrect or Incomplete Json body Fields",
    incorrectFields: "user_id no exist" o "Lista de campos incorrectos"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### put_Meeting
Edita un objeto quedada existente, dado un cuerpo Json y habiendo especificado su Id (PK).
PUT URL: https://121.0.0.1:8080/api/v1/meeting/{Id}  
Cuerpo Json que mandar: 
```json
{  
    "date": "19/08/2024 19:00",  
    "route_id": 1,
}
```  
Respuestas posibles:  
201(OK):
```json
{  
    "meeting_id": 300,  
    "date": "19/08/2024 19:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/ROUTES/1",  
        "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
        "difficulty": 2,  
        "distance": 8720,  
        "country": "SPAIN",  
        "province": "MALAGA",  
        "area": "Ardales"  
    },  
    {  
        {  
            "user_id": 15,
            "username": "ker12",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/15",   
            "p_difficulty": 5,  
            "p_distanceApprox": 18000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "Ardales"  
        },
        .
        .
        {  
            "user_id": 10,
            "username": "Maite5",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/10",   
            "p_difficulty": 4,  
            "p_distanceApprox": 12000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "Ardales"  
        },
    }
}
```
406(No aceptable):
```json
{
    message:"Meeting_Id = Incorrect or Incomplete Json body Fields",
    incorrectFields: "Meeting_Id no exist" o "Lista de campos incorrectos"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### put_user_in_Meeting
Añade un usuario a una quedada.  
POST URL: https://121.0.0.1:8080/api/v1/meeting?meeting_id={Id}&user_id={Id}
Example: https://121.0.0.1:8080/api/v1/meeting?meeting_id=1&user_id=15  
Respuestas posibles:

201(OK):
```json
{  
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/ROUTES/1",  
        "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
        "difficulty": 2,  
        "distance": 8720,  
        "country": "SPAIN",  
        "province": "MALAGA",  
        "area": "Ardales"  
    },  
    {  
        {  
            "user_id": 10,
            "username": "Clara12",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/10",   
            "p_difficulty": 3,  
            "p_distanceApprox": 7000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "Ardales"  
        }
        .
        .
        .
        {  
            "user_id": 15,
            "username": "ker12",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/15",   
            "p_difficulty": 5,  
            "p_distanceApprox": 18000,  
            "p_country": "SPAIN",  
            "p_province": "MALAGA",  
            "p_area": "Ardales"  
        }
    }
}
```
406(No aceptable):
```json
{
    message:"Incorrect Id",
    incorrectFields: "Meeting_Id no exist", "User_id no exist" o "User_id and Meeting_Id not exist"
}
```
409(Conflicto):
```json
{
    message:"Este usuario ya se ha unido a esta quedada",
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",
    "route_id": 1,
    "user_id": 15,
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
## DELETE
### delete_Route 
Borra un objeto ruta existente, habiendo especificado su Id (PK).
DELETE URL: https://121.0.0.1:8080/api/v1/route/{Id}
example: https://121.0.0.1:8080/api/v1/route/20  
Respuestas posibles:  
201(OK):
```json
{
    "message": "La ruta 20 ha sido eliminada con éxito", 
}
```
406(No aceptable):
```json
{
    "message": "route_Id no exist"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### delete_User
Borra un objeto usuario existente, habiendo especificado su Id (PK).
DELETE URL: https://121.0.0.1:8080/api/v1/user/{Id}
example: https://121.0.0.1:8080/api/v1/user/15  
Respuestas posibles:  
201(OK):
```json
{
    "message": "El usuario 15 ha sido eliminado con éxito",
}
```
406(No aceptable):
```json
{
    "message":"User_id no existe,
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### delete_Meeting
Borra un objeto de quedada existente, habiendo especificado su Id (PK).
DELETE URL: https://121.0.0.1:8080/api/v1/meeting/{Id}
example: https://121.0.0.1:8080/api/v1/meeting/25  
Respuestas posibles:  
201(OK):
```json
{
    "message": "La quedada 25 ha sido eliminada con éxito",
}
```
406(No aceptable):
```json
{
    "message":"meeting_id no exist",
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```
### delete_user_from_Meeting
Quita a un usuario de una quedada
DELETE URL: https://121.0.0.1:8080/api/v1/meeting?meetingId={Id}&userId={Id}
example: https://121.0.0.1:8080/api/v1/meeting?meetingId=25&userId=10  
Respuestas posibles:  
201(OK):
```json
{
    "message": "User 10 leaves meeting 25",
}
```
406(No aceptable):
```json
{
    "message":"meeting_id no exist" o "User 10 is nor registered in meeting 25"
}
```
501(Error interno de servidor):
```json
{
    "message": "Saturation on server, try again later"
}
```