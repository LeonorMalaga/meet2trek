# API

## GET
Gets Json Objects.
### Route
Gets a Json Route Object by its Id.

Url: https://121.0.0.1:8080/api/v1/routes/{Id}

Sample result for Id = 1:  
{  
    "id": 1,  
    "name": "Caminito del Rey",  
    "description": "Precioso camino sobre un rio",  
    "url_resources": "/Routes/1",  
    "starting_point": "https://maps.app.goo.gl/W1kaNRYSE45TMHqr6",  
    "difficulty": 2,  
    "distance": 8720,  
    "country": "España",  
    "province": "Malaga",  
    "area": "Ardales"  
}
### RouteList
Returns a Json ArrayList of all routes, filtering them by the following variables: difficulty, distance, country, province, area. 
You can filter for one, two o more variables.

Examples:
#### FindAll
Gets all routes without any filters.

Url: https://121.0.0.1:8080/api/v1/routes
#### FindByDifficulty
Filters routes by their difficulty.

Url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}
#### FindByDistance
Filters routes by their distance.

Url: https://121.0.0.1:8080/api/v1/routes?distance={distanceaprox}&range={range}
#### FindByCountry
Filters routes by their country.

Url: https://121.0.0.1:8080/api/v1/routes?country={country}
#### FindByProvince
Filters routes by their province

Url: https://121.0.0.1:8080/api/v1/routes?province={province}
#### FindByArea
Filters routes by their area.

Url: https://121.0.0.1:8080/api/v1/routes?area={area}
#### All Filters
The combination of every filter.

Url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}&distance={distanceaprox}&range={range}&country={country}&province={province}&area={area}

### User 
Gets a Json UserDto Object by its Id.

Url: https://121.0.0.1:8080/api/v1/users/{Id}

Sample result for Username = Trekker123 using a Dto: 
{  
    "username": Trekker123,  
    "password": "\*\*\*\*\*\*\*\*",  
    "email": "\*\*\*\*\*\*\*\*@\*\*\*\*\*.\*\*\*",  
    "icon": "/Users/Trekker123",  ,  
    "p_difficulty": 1,  
    "p_distance": 3000,  
    "p_country": "España",  
    "p_province": "Malaga",  
    "p_area": "Malaga"  
}
### UserList
Returns a Json ArrayList of all users (UserDto), filtering them by meeting.
#### FindAllUsers
Returns an ArrayList of all registered users (UserDto).

Url: https://121.0.0.1:8080/api/v1/users
#### UserListByMeeting
Get a list of all users (UserDto) who joined a specific meeting in a specific Route.

Url: https://121.0.0.1:8080/api/v1/routes/{Id}/meetings/{Meeting_Id}

## POST
### Route
Creates a new Route object, given a Json body.
### User
Creates a new User object, given a Json body.
### Meeting
Creates a new Meeting object, given a Json body, using a Route's ID and an ArrayList of Users' usernames.

## PUT
### Route
Edits an existing Route object, given a Json body and having specified its Id (PK).
### User
Edits an existing User object, given a Json body and having specified its Username (PK).
### Meeting
Edits an existing Meeting object, given a Json body and having specified its Id (PK).

## DELETE
### Route
Deletes an existing Route object, having specified its Id (PK).
### User
Deletes an existing User object, having specified its Username (PK).
### Meeting
Deletes an existing Meeting object, having specified its Id (PK).