# API

## GET
Get Json Objects.
### Route
Get a Json Route Object by {Id}.
url: https://121.0.0.1:8080/api/v1/routes/{Id}
sample result for ({Id} = 1) :
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
Return a Json arrayList filtering by the next variables: difficulty, distance, country, province, area. 
You can filter for one, two o more variables.

examples:
#### FindAll
Get all routes. 
url: https://121.0.0.1:8080/api/v1/routes/
#### FindByDifficulty
url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}
#### FindBydistance
url: https://121.0.0.1:8080/api/v1/routes?distance={distanceaprox}&range={range}
#### CompleteFilter
url: https://121.0.0.1:8080/api/v1/routes?difficulty={difficulty}&distance={distanceaprox}&range={range}&area={area}&province={province}&country={country}

#### Find

### UserList
### UserListByMeeting

## POST
### Route
### User
### Meeting

## PUT
### Route
### User
### Meeting

## DELETE
### Route
### User
### Meeting