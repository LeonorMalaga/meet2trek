# API
***
***
# Table of Contents

## GET
- [Route](#route)
  - [FindAll](#findall)
  - [FindByDifficulty](#findbydifficulty)
  - [FindByDistance](#findbydistance)
  - [FindByCountry](#findbycountry)
  - [FindByProvince](#findbyprovince)
  - [FindByArea](#findbyarea)
  - [All Filters](#all-filters)
- [User](#user)
  - [FindAllUsers](#findallusers)
  - [UserListByMeeting](#userlistbymeeting)

## POST
- [post_Route](#post_route)
- [post_User](#post_user)
- [post_Meeting](#post_meeting)

## PUT
- [put_Route](#put_route)
- [put_User](#put_user)
- [put_Meeting](#put_meeting)

## DELETE
- [delete_Route](#delete_route)
- [delete_User](#delete_user)
- [delete_Meeting](#delete_meeting)

***
***


## GET 
Gets Json Objects.
### Route
#### RouteFindById
Gets a Json Route Object by its Id.

Url: https://121.0.0.1:8080/api/v1/routes/{route_Id}
Sample result:
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/1",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "España",  
    "province": "Malaga",  
    "area": "Caminito del Rey"  
}
 
#### RouteList
Returns a Json ArrayList of routes. You can filter them by the following variables: difficulty, distance, country, province, area. 
You can filter for one, two o more variables.

##### FindAll
Gets all routes without any filters.

Url: https://121.0.0.1:8080/api/v1/routes
Sample result:  

[
{  
    "route_id": 1,  
    "name": "Caminito del Rey acceso Sur",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/1",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "España",  
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
    "country": "España",  
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
    "country": "España",  
    "province": "Malaga",  
    "area": "Rio Chillar"  
}

]

Examples Filters:
##### FindByDifficulty
Filters routes by their difficulty.

Url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}
##### FindByDistance
Filters routes by their distance.

Url: https://121.0.0.1:8080/api/v1/routes?distance={distanceaprox}&range={range}
##### FindByCountry
Filters routes by their country.

Url: https://121.0.0.1:8080/api/v1/routes?country={country}
##### FindByProvince
Filters routes by their province

Url: https://121.0.0.1:8080/api/v1/routes?province={province}
##### FindByArea
Filters routes by their area.

Url: https://121.0.0.1:8080/api/v1/routes?area={area}
##### All Filters
The combination of every filter.

Url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}&distance={distanceaprox}&range={range}&country={country}&province={province}&area={area}

### User 
#### UserFindById
Gets a Json UserDto Object by its Id.

Url: https://121.0.0.1:8080/api/v1/users/{Id}

Sample result for (Username = Trekker123) using a Dto: 
{  
    "user_id": 1,
    "username": Trekker123,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/Trekker123",   
    "p_difficulty": 1,  
    "p_distanceApprox": 3000,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
}

#### FindAllUsers
Returns an ArrayList of all registered users (UserDto).

Url: https://121.0.0.1:8080/api/v1/users
Sample result:
[
{  
    "user_id": 1,
    "username": Trekker123,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1",   
    "p_difficulty": 1,  
    "p_distanceApprox": 3000,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
{  
    "user_id": 2,
    "username": Trekker111,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
    .
    .
    .
{  
    "user_id": 100,
    "username": Trekker234,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/100",   
    "p_difficulty": 1,  
    "p_distanceApprox": 120,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
}
]
#### UserListByMeeting
Get a list of all users (UserDto) who joined a specific meeting in a specific Route.

Url: https://121.0.0.1:8080/api/v1/users/meeting/{Meeting_Id}
Sample result:
[
{  
    "user_id": 1,
    "username": Trekker123,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1",   
    "p_difficulty": 1,  
    "p_distanceApprox": 3000,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
{  
    "user_id": 2,
    "username": Trekker111,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
    .
    .
    .
{  
    "user_id": 100,
    "username": Trekker234,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/100",   
    "p_difficulty": 1,  
    "p_distanceApprox": 120,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
}
]

### Meeting
#### MeetingFindById
Gets a Json Meeting Object by its Id.

Url: https://121.0.0.1:8080/api/v1/meetings/{meeting_Id}
Sample result:

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
"country": "España",  
"province": "Malaga",  
"area": "Ardales"  
},  
{  
{  
    "user_id": 1,
    "username": Trekker123,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/1",   
    "p_difficulty": 1,  
    "p_distanceApprox": 3000,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
{  
    "user_id": 2,
    "username": Trekker111,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/2",   
    "p_difficulty": 1,  
    "p_distanceApprox": 500,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
},
    .
    .
    .
{  
    "user_id": 100,
    "username": Trekker234,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/100",   
    "p_difficulty": 1,  
    "p_distanceApprox": 120,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
} 
}  
}

#### GetAllMeetings
Returns an ArrayList of all meetings (MeetingsDto).
Url: https://121.0.0.1:8080/api/v1/meetings
Sample result:
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

#### GetAllActiveMeetings
Returns an ArrayList of all active meetings (MeetingsDto).
Url: https://121.0.0.1:8080/api/v1/meetings/active
Sample result:
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
#### FindMeetingsByDate
Returns an ArrayList meetings (MeetingsDto) from a date.
Url: https://121.0.0.1:8080/api/v1/meetings?date={date}
Sample result:
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
]

## POST
### post_Route
Creates a new Route object, given a Json body.
### post_User
Creates a new User object, given a Json body.
### put_Meeting
Creates a new Meeting object, given a Json body, using a Route's ID and an ArrayList of Users' usernames.

## PUT
### put_Route
Edits an existing Route object, given a Json body and having specified its Id (PK).
### put_User
Edits an existing User object, given a Json body and having specified its Username (PK).
### put_Meeting
Edits an existing Meeting object, given a Json body and having specified its Id (PK).

## DELETE
### delete_Route 
Deletes an existing Route object, having specified its Id (PK).
### delete_User
Deletes an existing User object, having specified its Username (PK).
### delete_Meeting
Deletes an existing Meeting object, having specified its Id (PK).
