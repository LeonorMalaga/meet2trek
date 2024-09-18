# API
***
***
# Table of Contents

## GET
- [savedRoutes](#savedroutes) 
  - [getSaveRouteById](#getsaveroutebyid)
  - [getAllSaveRoutes](#getallsaveroutes)
  - [getSaveRoutesByUser](#getsaveroutebyid)
- [Route](#route)
 - [findRouteIdByParams](#findrouteidbyparams)
  - [RouteFindById](#routefindbyid)
  - [RouteList](#routelist)
    - [FindAll](#findall)
    - [FindByDifficulty](#findbydifficulty)
    - [FindByDistance](#findbydistance)
    - [FindByCountry](#findbycountry)
    - [FindByProvince](#findbyprovince)
    - [FindByArea](#findbyarea)
    - [All Filters](#all-filters)
- [User](#user)
  - [ExistUser](#existuser)
  - [UserFindById](#userfindbyid)
  - [FindAllUsers](#findallusers)
  - [UserListByMeeting](#userlistbymeeting)
- [Meeting](#meeting)
    - [MeetingsFindByUser](#meetingsfindbyuser)
    - [GetMeetingsByRoute](#getmeetingsbyroute)
    - [MeetingFindById](#meetingfindbyid)
    - [GetAllMeetings](#getallmeetings)
    - [GetAllActiveMeetings](#getallactivemeetings)
    - [FindMeetingsByDate](#findmeetingsbydate)

## POST
- [post_SaveRoute](#post_saveroute)
- [post_Route](#post_route)
- [post_User](#post_user)
- [post_Meeting](#post_meeting)

## PUT
- [put_Route](#put_route)
- [put_User](#put_user)
- [put_Meeting](#put_meeting)
- [put_user_in_Meeting](#put_user_in_meeting)

## DELETE
- [delete_save_route](#delete_save_route)
- [delete_Route](#delete_route)
- [delete_User](#delete_user)
- [delete_Meeting](#delete_meeting)
- [delete_user_from_Meeting](#delete_user_from_meeting)

***
***


## GET 
Gets Json Objects.
### savedRoutes
 
#### getSaveRouteById
URL: https://121.0.0.1:8080/api/v1/save_routes/{route_Id}
#### getAllSaveRoutes
URL: https://121.0.0.1:8080/api/v1/save_routes

#### getSaveRoutesByUser
URL: http://localhost:8080/users/{userId}/savedRoutes
ex: http://localhost:8080/users/1/savedRoutes

200 OK:
```json
[
    {
        "routeId": 2,
        "name": "Rio_Chillar",
        "shortDescription": "Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso. ",
        "resourcesPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar",
        "portraitPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=aYRW6SMR8usY",
        "fullDescription": "Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido <br>Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos más altos y es una escalada difícil.<br>Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso.<br>En la cima se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la Guerra Civil Española. Los soldados de Franco pudieron observar movimientos de tropas republicanas desde esta posición a 1,779 metros. Cuando vea las vistas, se dará cuenta de por qué lo construyeron.",
        "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses",
        "difficulty": 6,
        "distance": 280,
        "country": "SPAIN",
        "province": "MALAGA",
        "area": "CHILLAR"
    },
    {
        "routeId": 5,
        "name": "Cruz_de_pino",
        "shortDescription": " La ruta circular Frigiliana - Acequia de Lizar - Río Higuerón - Acequia Batán es un sendero de baja dificultad que se desarrolla en el entorno natural de Frigiliana, Málaga. ",
        "resourcesPath": "../ROUTES/SPAIN/MALAGA/FRIGILIANA/5_Acequias_Rio_Higueron",
        "portraitPath": "../ROUTES/SPAIN/MALAGA/FRIGILIANA/5_Acequias_Rio_Higueron/img/ditch.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=fqRiHaA08bc",
        "fullDescription": "La ruta comienza en el pueblo de Frigiliana y transcurre paralela al cauce del río Higuerón hasta llegar a los impresionantes estrechamientos conocidos como 'cahorros' o 'cajorros'.<br>En el trayecto, se cruza la Acequia de Lizar, un canal de riego que lleva agua desde el Pozo Lízar hasta el Pozo Batán.<br>El Pozo Batán es una alberca de aguas cristalinas construida en el siglo XIX, ubicada en la margen izquierda del río Higuerón. Originalmente, alimentaba una fábrica de papel (Batán) que se menciona en documentos del año 1752 y 1847<br>La ruta incluye un bosque de pinos y ofrece vistas panorámicas del entorno.<br>La ruta puede ser realizada en ambos sentidos, pero se recomienda seguir el trazado original para disfrutar de las mejores vistas y parajes.<br>Es importante tener en cuenta que la señalización puede ser limitada en algunos tramos, por lo que es recomendable llevar un mapa y GPS.<br>La ruta es apta para senderistas con experiencia, pero no para personas con problemas de altura o miedo a precipicios, debido a los estrechos pasos y profundas acequias.",
        "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4518.821255118616!2d-3.898152291971107!3d36.78761704899499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225ab5a1501e5%3A0xae3f9112b202b3c4!2sMirador%20Barranco%20del%20Rio%20Higueron!5e0!3m2!1ses!2ses!4v1726563355805!5m2!1ses!2ses",
        "difficulty": 7,
        "distance": 20500,
        "country": "SPAIN",
        "province": "MALAGA",
        "area": "FRIGILIANA"
    }
]
´´´
There is no routes asociated with the user
```json
[]
´´´
404:
```json
{
    "message": "User with ID 10 not found"
}
´´´

### Route
#### findRouteIdByParams
Get a Route Id.
URL:http://localhost:8080/routes/getId
BODY:
```json
{
    "area": "CAMINITO",
    "province":"MALAGA",
    "country":"SPAIN",
    "name":"Caminito_del_rey",
    "distance":8650
}
```
Sample result:
200 OK:
```json
{
    "message": "Route  id: 2"
}
```
404 NOT FOUND:
```json
{
    "message": "Not Found"
}
```
####  RouteFindById
Gets a Json Route Object by its Id.

URL: https://121.0.0.1:8080/routes/{route_Id}  
Sample result:GET http://localhost:8080/routes/1
```json
{  
{
    "routeId": 1,
    "name": "Rio_Chillar",
    "shortDescription": "Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso. ",
    "resourcesPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar",
    "portraitPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg",
    "videoUrl": "https://www.youtube.com/watch?v=aYRW6SMR8usY",
    "fullDescription": "Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido <br>Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos más altos y es una escalada difícil.<br>Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso.<br>En la cima se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la Guerra Civil Española. Los soldados de Franco pudieron observar movimientos de tropas republicanas desde esta posición a 1,779 metros. Cuando vea las vistas, se dará cuenta de por qué lo construyeron.",
    "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses",
    "difficulty": 6,
    "distance": 280,
    "country": "SPAIN",
    "province": "MALAGA",
    "area": "CHILLAR"
} 
}
```
 
####  RouteList
Returns a Json ArrayList of routes. You can filter them by the following variables: difficulty, distance, country, province, area. 
You can filter for one, two o more variables.

#####  FindAll
Gets all routes without any filters.

URL: https://121.0.0.1:8080/routes  
Sample result:  
```json
[
    {
        "routeId": 1,
        "name": "Rio_Chillar",
        "shortDescription": "Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco. ",
        "resourcesPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar",
        "portraitPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=aYRW6SMR8usY",
        "fullDescription": "Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido <br>Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos más altos y es una escalada difícil",
        "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses",
        "difficulty": 6,
        "distance": 280,
        "country": "SPAIN",
        "province": "MALAGA",
        "area": "CHILLAR"
    },
    {
        "routeId": 2,
        "name": "Caminito_del_Rey",
        "shortDescription": "Caminata difícil. Se necesita buena forma física. ",
        "resourcesPath": "../ROUTES/SPAIN/MALAGA/CAMINITO/1_Caminito_del_Rey",
        "portraitPath": "../ROUTES/SPAIN/MALAGA/CAMINITO/1_Caminito_del_Rey/img/Caminito_del_Rey.jpg",
        "videoUrl": "https://youtu.be/enmed/AUjtuNOZe4Y",
        "fullDescription": "El Caminito del Rey es un senda aérea construida en las paredes del Desfiladero de los Gaitanes en El Chorro. Es un camino adosado al citado desfiladero con una longitud de 3 kilómetros que cuenta con largos tramos y con una anchura de apenas 1 metro. Se inicia en el término municipal de Ardales, atraviesa terrenos de Antequera y concluye en El Chorro, perteneciente a Álora.<br>Este camino está colgado en las paredes verticales del desfiladero y a una distancia media de 100 metros sobre el río.<br>Este sendero se construyó porque la Sociedad Hidroeléctrica del Chorro, propietaria del Salto del Gaitanejo y del Salto del Chorro, necesitaba un acceso entre ambos “saltos de agua“ para facilitar tanto el paso de los operarios de mantenimiento como el transporte de materiales y la vigilancia de los mismos.<br>Las obras se iniciaron en 1901 y concluyeron en 1905. El camino comenzaba junto a las vías del tren de Renfe y recorría el Desfiladero de los Gaitanes, comunicando y facilitando el paso entre ambos lados. i",
        "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18041.690409557472!2d-4.7954183316169985!3d36.9297929996558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72be9311fa8f01%3A0x599abbe8aafbd4b8!2sCaminito%20del%20Rey%20-%20Acceso%20Norte!5e0!3m2!1ses!2ses!4v1726132950970!5m2!1ses!2ses",
        "difficulty": 5,
        "distance": 8650,
        "country": "SPAIN",
        "province": "MALAGA",
        "area": "CAMINITO"
    }
]
```
Examples Filters:
####  FindByDifficulty
Filters routes by their difficulty.

URL: http://localhost:8080/routes/getByFilter?difficulty={difficulty}
####  FindByDistance
Filters routes by their distance, going to locate the route with distance between (distance +1000m and distance-1000m).

URL: http://localhost:8080/routes/getByFilter?distance={distanceaprox}
####  FindByCountry
Filters routes by their country.

URL: http://localhost:8080/routes/getByFilter?country={country}
####  FindByProvince
Filters routes by their province

URL: http://localhost:8080/routes/getByFilter?province={province}
####  FindByArea
Filters routes by their area.

URL: http://localhost:8080/routes/getByFilter?area={area}
####  All Filters
The combination of every filter.

URL: http://localhost:8080/routes/getByFilter?country=SPAIN&province=MALAGA&area=CHILLAR&name=Rio_Chillar&difficulty=6&distance=280
Sample result:
[
    {
        "routeId": 1,
        "name": "Rio_Chillar",
        "shortDescription": "Tiene todos los ingredientes para una caminata clásica. ",
        "resourcesPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar",
        "portraitPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg",
        "videoUrl": "https://www.youtube.com/watch?v=aYRW6SMR8usY",
        "fullDescription": "Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. ",
        "startingPoint": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses",
        "difficulty": 6,
        "distance": 280,
        "country": "SPAIN",
        "province": "MALAGA",
        "area": "CHILLAR"
    }
]
### User

####  ExistUser
Get a true o false.

URL: https://121.0.0.1:8080/api/v1/users/{Username}

Sample result for (Username = Trekker123) using a Dto: 
```json
{
    "Username" : "Trekker123",
    "exist" : true
}
```
####  UserFindById
Gets a Json UserDto Object by its Id.

URL: https://121.0.0.1:8080/api/v1/users/{Id}

Sample result for (Username = Trekker123, user_id = 1) using a Dto: 
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
Returns an ArrayList of all registered users (using UserDto).

URL: https://121.0.0.1:8080/api/v1/user

Sample result:
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
Get a list of all users (UserDto) who joined a specific meeting in a specific Route.

URL: https://121.0.0.1:8080/api/v1/users/meeting/{Meeting_Id}  
Sample result:
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
#### MeetingsFindByUser
Get al Meetings by UserId
URL: https://121.0.0.1:8080/api/v1/meetings/{user_Id}
####  MeetingFindById
Gets a Json Meeting Object by its Id.

URL: https://121.0.0.1:8080/api/v1/meetings/{meeting_Id}  
Sample result:
```json
{  
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/Routes/1",  
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
Returns an ArrayList of all meetings (MeetingDto).
URL: https://121.0.0.1:8080/api/v1/meetings  
 Sample result
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
#### GetMeetingsByroute
Retuns and ArrayList of all meeting asociate to a Route.
URL: https://121.0.0.1:8080/api/v1/meetings?route={route_id}
####  GetAllActiveMeetings
Returns an ArrayList of all active meetings (MeetingDto).
URL: https://121.0.0.1:8080/api/v1/meetings/active  
Sample result:
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
Returns an ArrayList meetings (MeetingDto) from a date.  
URL: https://121.0.0.1:8080/api/v1/meetings?date={date}  
Sample result:
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

#### post_SaveRoute
Save a route to a user.
URL: http://localhost:8080/users/{userId}/savedRoutes?routeId={routeId}
ex: http://localhost:8080/users/1/savedRoutes?routeId=2

Possible responses:  
201(OK):
```json
{
    "message": "The route with id: 2, has been save for the user with id:1"
}
```
409(Conflict):
```json
{
    "message": "Route: 2, already saved by user:1"
}

```

### post_Route
Creates a new Route object, given a Json body.  
POST URL: http://localhost:8080/routes  
Json Body to send:
```json
{
    "name": "Rio_Chillar",
    "shortDescription": "Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso. ",
    "fullDescription": "Después de llegar a las estribaciones de la Sierra Tejeda desde Nerja se llega al pueblo de Acebuchal, destruido después de que terminara la Guerra Civil. Afortunadamente, ha sido reconstruido <br>Una caminata de 2 km en un lecho de río seco (rambla) da paso a un camino de tierra desde donde se asoma la desalentadora vista de Cisne como un monstruo prehistórico. Aunque no está entre los puntos más altos y es una escalada difícil.<br>Tiene todos los ingredientes para una caminata clásica: la variedad, la necesidad de cuidados para la transición al barranco, la lucha y el sentido de llegada a una cumbre espectacular, refugio para almorzar y una corriente para lavar el sudor después del descenso.<br>En la cima se encuentran las ruinas de un puesto avanzado de la Guardia Civil que data de la Guerra Civil Española. Los soldados de Franco pudieron observar movimientos de tropas republicanas desde esta posición a 1,779 metros. Cuando vea las vistas, se dará cuenta de por qué lo construyeron.",
    "startingPoint":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102254.50054410713!2d-3.954936180733223!3d36.783684382177064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7225167826ddb3%3A0x53bbce5d36620e0f!2zUsOtbyBDaMOtbGxhcg!5e0!3m2!1ses!2ses!4v1726141095705!5m2!1ses!2ses",
    "resourcesPath": "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar",
    "portraitPath" : "../ROUTES/SPAIN/MALAGA/CHILLAR/2_Rio_Chillar/img/Rio_chilla.jpg",
    "videoUrl" : "https://www.youtube.com/watch?v=aYRW6SMR8usY",
    "difficulty": 6,
    "distance": 280,
    "area": "CHILLAR"
}
```  
Possible responses:  
200(OK):
```json
{
    "message": "Route Create with id: 1"
}
```
409(Conflict):
```json
{
    "message": "Route already exist"
}
```

```
### post_User
Creates a new User object, given a Json body.

POST URL: https://121.0.0.1:8080/api/v1/user/  
Json Body to send:
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
Possible responses:  
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
406(Not Acceptable):
```json
{
    message:"Incorrect or Incomplete Json body Fields",
    incorrectFields: "List of incorrect fields"
}
```
409(Conflict):
```json
{
    message:"The user already exists. Please use a different username."
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### post_Meeting
Creates a new Meeting object, given a Json body, using a Route's Ids and an ArrayList of Users' Ids.  
POST URL: https://121.0.0.1:8080/api/v1/meeting  
Json Body to send: 
```json
{  
    "date": "19/08/2024 17:00",  
    "route_id": 1,
    "user_id": 15,
}
```  
Possible responses:  
201(OK):
```json
{  
    "meeting_id": 300,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/Routes/1",  
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
406(Not Acceptable):
```json
{
    message:"Incorrect or Incomplete Json body Fields",
    incorrectFields: "List of incorrect fields"
}
```
409(Conflict):
```json
{
    message:"The date and time for this route's meeting has already been selected. Please select another one.",
    "selectedRoute": 1,
    "selectedDate":  "19/08/2024 17:00"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
## PUT
### put_Route
Edits an existing Route object, given a Json body and having specified its Id (PK).
PUT url: https://121.0.0.1:8080/api/v1/route/{Id}  
Json Body to send:
```json
{  
    "route_id": 20,
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/Routes/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```  
Possible responses:  
201(OK):
```json
{
    "route_id": 20,
    "name": "Montes de MALAGA",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/Routes/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "SPAIN",  
    "province": "MALAGA",  
    "area": "Montes de MALAGA"  
}
```
406(Not Acceptable):
```json
{
    message:"route_Id = Incorrect or Incomplete Json Fields",
    incorrectFields: "route_Id does not exist" or "List of incorrect fields"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### put_User
Edits an existing User object, given a Json body and having specified its Username (PK).
PUT URL: https://121.0.0.1:8080/api/v1/user/{Id}  
Json Body to send: 
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
Possible responses:  
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
406(Not Acceptable):
```json
{
    message:"User_id = Incorrect or Incomplete Json body Fields",
    incorrectFields: "user_id does not exist" or "List of incorrect fields"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### put_Meeting
Edits an existing Meeting object, given a Json body and having specified its Id (PK).
PUT URL: https://121.0.0.1:8080/api/v1/meeting/{Id}  
Json Body to send: 
```json
{  
    "date": "19/08/2024 19:00",  
    "route_id": 1,
}
```  
Possible responses:  
201(OK):
```json
{  
    "meeting_id": 300,  
    "date": "19/08/2024 19:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/Routes/1",  
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
406(Not Acceptable):
```json
{
    message:"Meeting_Id = Incorrect or Incomplete Json body Fields",
    incorrectFields: "Meeting_Id does not exist" or "List of incorrect fields"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### put_user_in_Meeting
Add an user to a meeting.  
POST URL: https://121.0.0.1:8080/api/v1/meeting?meeting_id={Id}&user_id={Id}  
Example: https://121.0.0.1:8080/api/v1/meeting?meeting_id=1&user_id=15  
Possible responses:

201(OK):
```json
{  
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",  
    {  
        "route_id": 1,  
        "name": "Caminito del Rey",  
        "description": "Precioso camino sobre un rio",  
        "url_resources": "/Routes/1",  
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
406(Not Acceptable):
```json
{
    "message":"Incorrect Id",
    "incorrectFields": "Meeting_Id does not exist", "User_id does not exist" or "Neither User_Id nor Meeting_Id exist"
}
```
409(Conflict):
```json
{
    "message":"This User has already joined this meeting",
    "meeting_id": 1,  
    "date": "19/08/2024 17:00",
    "route_id": 1,
    "user_id": 15,
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
## DELETE
#### delete_save_route
Save a route to a user.
URL: http://localhost:8080/users/{userId}/savedRoutes?routeId={routeId}
ex: http://localhost:8080/users/1/savedRoutes?routeId=10

Possible responses:  
201(OK):
```json
{
    "message": "The route with id: 2 has been removed from the user: 1 in the saved_routed table."
}
```
404(Not Faund):
```json
{
    "message": "Route not found"
}
```

### delete_Route 
Deletes an existing Route object, having specified its Id (PK).
DELETE URL: https://121.0.0.1:8080/api/routes/{Id}  
example: http://localhost:8080/routes/7
Possible responses:  
201(OK):
```json
{
    "message": "Route with id: 7 deleted."
}
```
404(Not Faund):
```json
{
    "message": "Not found"
}
```

### delete_User
Deletes an existing User object, having specified its Id (PK).  
DELETE URL: https://121.0.0.1:8080/api/v1/user/{Id}  
example: https://121.0.0.1:8080/api/v1/user/15  
Possible responses:  
201(OK):
```json
{
    "message": "User 15 has succesfully been deleted",
}
```
406(Not Acceptable):
```json
{
    "message":"User_id does not exist",
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### delete_Meeting
Deletes an existing Meeting object, having specified its Id (PK).  
DELETE URL: https://121.0.0.1:8080/api/v1/meeting/{Id}  
example: https://121.0.0.1:8080/api/v1/meeting/25  
Possible responses:  
201(OK):
```json
{
    "message": "Meeting 25 has succesfully been deleted",
}
```
406(Not Acceptable):
```json
{
    "message":"meeting_id does not exist",
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```
### delete_user_from_Meeting
Removes an user from a meeting
DELETE URL: https://121.0.0.1:8080/api/v1/meeting?meetingId={Id}&userId={Id}  
example: https://121.0.0.1:8080/api/v1/meeting?meetingId=25&userId=10  
Possible responses:    
201(OK):
```json
{
    "message": "User 10 has been removed from Meeting 25",
}
```
406(Not Acceptable):
```json
{
    "message":"meeting_id does not exist" or "User 10 has not joined meeting 25"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
```