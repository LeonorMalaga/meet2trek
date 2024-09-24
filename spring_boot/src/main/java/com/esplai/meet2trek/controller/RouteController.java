package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.ResponseMessage;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.service.RouteService;
import com.esplai.meet2trek.filters.RouterFilters;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@SuppressWarnings("unused")
@Controller
@Data
@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = "http://localhost:5173/")
@RestController
@RequestMapping("/api")
public class RouteController {
    private static final Logger log = LoggerFactory.getLogger(RouteController.class);
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private RouteService routeService;

    @PostMapping("/routes")
    public ResponseEntity<ResponseMessage> createRoute(@RequestBody Route route) {
        try {
            boolean exists = routeService.routeExists(
                    route.getName(),
                    route.getProvince(),
                    route.getCountry(),
                    route.getArea(),
                    route.getDistance()
            );

            if (exists) {
                return ResponseEntity.status(409).body(new ResponseMessage("Route already exists"));
            }

            // Create the route
            Route createdRoute = routeService.createNewRoute(route);
            return ResponseEntity.ok(new ResponseMessage("Route created with id: " + createdRoute.getRouteId()));
        }catch(Exception e){
            //System.out.println("Caught exception: " + e.getMessage());
            return ResponseEntity.status(406).body(new ResponseMessage("The fields : name, startingPoint, distance; are mandatory. ERROR: " + e.getLocalizedMessage()));
        }
    }
    @GetMapping("/routes/getId")
    public ResponseEntity<ResponseMessage> getRouteId(@RequestBody Route route){
        Long routeId = routeService.findRouteIdByParams(
                route.getName(),
                route.getProvince(),
                route.getCountry(),
                route.getArea(),
                route.getDistance()
        );
        if(routeId == null)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("Route not found"));
        }
        return ResponseEntity.status(200).body(new ResponseMessage("Route ID: " + routeId));
    }
    @GetMapping("/routes/{id}")
    public  Optional<Route> getRoutes(@PathVariable Long id){
        return routeService.findRouteById(id);
    }
    @GetMapping("/routes")
    public ResponseEntity<List<Route>> getAllRoutes() {
        return ResponseEntity.ok(routeService.getAllRoutes());
    }
    @GetMapping("/routes/getByFilter")
    public List<Route> getFilteredRoutes(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String country,
            @RequestParam(required = false) String province,
            @RequestParam(required = false) String area,
            @RequestParam(required = false) Integer distance,
            @RequestParam(required = false) String difficulty
    ){
        RouterFilters filter = new RouterFilters();
        filter.setName(name);
        filter.setCountry(country);
        filter.setProvince(province);
        filter.setArea(area);
        filter.setDistance(distance);
        filter.setDifficulty(difficulty);
        // System.out.println("name: " + name +", difficulty:"+ difficulty+",country:"+ country+", distance:"+ distance+",area: "+area+ ", province :"+ province);

        return routeService.getFilteredRoutes(filter);
    }
    @DeleteMapping("/routes/{id}")
    public ResponseEntity<ResponseMessage> deleteRoute(@PathVariable Long id){
        boolean exists= routeService.existsByRouteId(id);
        if(!exists)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("Route not found"));
        }
        routeService.deleteRoute(id);
        return ResponseEntity.status(200).body(new ResponseMessage("The route with id " + id + " has been deleted."));
    }
    @PutMapping("/routes/{id}")
    public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route route)
    { route.setRouteId(id);
       return ResponseEntity.ok(routeService.updateRoute(route));
    }

}
