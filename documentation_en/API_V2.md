# API
***
***
# Table of Contents

## GET
- [Route](#route)
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
- [post_Route](#post_route)
- [post_User](#post_user)
- [post_Meeting](#post_meeting)

## PUT
- [put_Route](#put_route)
- [put_User](#put_user)
- [put_Meeting](#put_meeting)
- [put_user_in_Meeting](#put_user_in_meeting)

## DELETE
- [delete_Route](#delete_route)
- [delete_User](#delete_user)
- [delete_Meeting](#delete_meeting)
- [delete_user_from_Meeting](#delete_user_from_meeting)

***
***


## GET 
Gets Json Objects.
### Route
####  RouteFindById
Gets a Json Route Object by its Id.

URL: https://121.0.0.1:8080/api/v1/routes/{route_Id}  
Sample result:
```json
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/1",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Caminito del Rey"  
}
```
 
####  RouteList
Returns a Json ArrayList of routes. You can filter them by the following variables: difficulty, distance, country, province, area. 
You can filter for one, two o more variables.

#####  FindAll
Gets all routes without any filters.

URL: https://121.0.0.1:8080/api/v1/routes  
Sample result:  
```json
[
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/1",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Caminito del Rey"  
},
{  
    "route_id": 2,  
    "name": "Caminito del Rey acceso Norte",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/2",  
    "starting_point": "https://maps.app.goo.gl/U7BB8LSMW13LNdc29",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Caminito del Rey"  
},
.
.
.
{  
    "route_id": 3000,  
    "name": "Los Cahorros del Rio Chillar",  
    "description": "Caminar dentro de un rio",  
    "url_resources": "/Routes/3000",  
    "starting_point": "https://maps.app.goo.gl/sKeceJMropWTW7S27",  
    "difficulty": 4,  
    "distance": 8720,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Rio Chillar"  
}

]
```
Examples Filters:
####  FindByDifficulty
Filters routes by their difficulty.

URL: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}
####  FindByDistance
Filters routes by their distance.

URL: https://121.0.0.1:8080/api/v1/routes?distance={distanceaprox}&range={range}
####  FindByCountry
Filters routes by their country.

URL: https://121.0.0.1:8080/api/v1/routes?country={country}
####  FindByProvince
Filters routes by their province

URL: https://121.0.0.1:8080/api/v1/routes?province={province}
####  FindByArea
Filters routes by their area.

URL: https://121.0.0.1:8080/api/v1/routes?area={area}
####  All Filters
The combination of every filter.

URL: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}&distance={distanceaprox}&range={range}&country={country}&province={province}&area={area}

### User

####  ExistUser
Get a true o false.

URL: https://121.0.0.1:8080/api/v1/users/{Username}

Sample result for (Username = Trekker123) using a Dto: 
```json
{
    "Username" = Trekker123;
    "exist" = true;
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
{  
    "user_id": 2,
    "username": "Trekker111",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
{  
    "user_id": 2,
    "username": "Trekker111",  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
        "country": "Spain",  
        "province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
            "p_area": "Malaga"  
        },
        {  
            "user_id": 2,
            "username": "Trekker111",  
            "password": "\*\*\*\*\*\*\*\*",  
            "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
            "icon": "/Users/2",   
            "p_difficulty": 1,  
            "p_distanceApprox": 500,  
            "p_country": "Spain",  
            "p_province": "Malaga",  
            "p_area": "Malaga"  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
            "p_area": "Malaga"  
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
### post_Route
Creates a new Route object, given a Json body.  
POST URL: https://121.0.0.1:8080/api/v1/route/  
Json Body to send:
```json
{  
    "name": "Montes de Malaga",  
    "description": "Ruta apta par ir en bicicleta",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 2,  
    "distance": 12000,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Montes de Malaga"  
}
```  
Possible responses:  
201(OK):
```json
{
    "route_id": 20,
    "name": "Montes de Malaga",  
    "description": "Ruta apta par ir en bicicleta", 
    "url_resources": "/Routes/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Montes de Malaga"  
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
    message:"The route already exists, please indicate a different dates for: name, difficulty, distance,  starting_point, country, province or area.",
    {
    "route_id": 11,
    "name": "Montes de Malaga",  
    "description": "Zona alborada cercana a la ciudad, apto para pasear en perro  y con niños", 
    "url_resources": "/Routes/11",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Montes de Malaga"  
    }
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
}
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
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
        "country": "Spain",  
        "province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
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
    "name": "Montes de Malaga",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/Routes/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Montes de Malaga"  
}
```  
Possible responses:  
201(OK):
```json
{
    "route_id": 20,
    "name": "Montes de Malaga",  
    "description": "Ruta apta par ir en bicicleta y con niños", 
    "url_resources": "/Routes/20",  
    "starting_point": "https://maps.app.goo.gl/jPsaPmnpNTyu8KiB6,  
    "difficulty": 3,  
    "distance": 12000,  
    "country": "Spain",  
    "province": "Malaga",  
    "area": "Montes de Malaga"  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
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
    "p_country": "Spain",  
    "p_province": "Malaga",  
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
        "country": "Spain",  
        "province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
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
        "country": "Spain",  
        "province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
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
            "p_country": "Spain",  
            "p_province": "Malaga",  
            "p_area": "Ardales"  
        }
    }
}
```
406(Not Acceptable):
```json
{
    message:"Incorrect Id",
    incorrectFields: "Meeting_Id does not exist", "User_id does not exist" or "Neither User_Id nor Meeting_Id exist"
}
```
409(Conflict):
```json
{
    message:"This User has already joined this meeting",
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
### delete_Route 
Deletes an existing Route object, having specified its Id (PK).
DELETE URL: https://121.0.0.1:8080/api/v1/route/{Id}  
example: https://121.0.0.1:8080/api/v1/route/20  
Possible responses:  
201(OK):
```json
{
    "message": "Route 20 has succesfully been deleted", 
}
```
406(Not Acceptable):
```json
{
    "message": "route_Id does not exist"
}
```
501(Internal Server Error):
```json
{
    "message": "The server is currently saturated. Please try again later."
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