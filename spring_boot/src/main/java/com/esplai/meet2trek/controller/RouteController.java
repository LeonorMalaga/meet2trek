package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.ResponseMessage;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.service.RouteService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
@Data
@RestController
public class RouteController {
    private static final Logger log = LoggerFactory.getLogger(RouteController.class);
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private RouteService routeService;
    @PostMapping("/routes")
    public ResponseEntity<ResponseMessage> createRoute(@RequestBody Route route) throws JsonProcessingException {
        boolean exists = routeService.routeExists(
                route.getName(),
                route.getProvince(),
                route.getCountry(),
                route.getArea(),
                route.getDistance()
        );
        if(exists)
        {
            return ResponseEntity.status(409).body(new ResponseMessage("Route already exist"));
        }
        System.out.println("Received JSON:" + route);
        log.info("Received Route: {}", route);
        // Create the route
        Route createdRoute = routeService.createNewRoute(route);
        try {
            String createdJson = objectMapper.writeValueAsString(createdRoute);
            return ResponseEntity.status(200).body(new ResponseMessage("Route Create: "+ createdJson));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }
    @DeleteMapping("/routes/{id}")
    public ResponseEntity<ResponseMessage> deleteRoute(@PathVariable Long id){
        boolean exists= routeService.existsByrouteId(id);
        if(!exists)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("Not found"));
        }
        routeService.deleteRoute(id);
        return ResponseEntity.status(200).body(new ResponseMessage("Route with id: " +id+ " deleted."));
    }
    @PutMapping("/routes/{id}")
    public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route route)
    { route.setRouteId(id);
       return ResponseEntity.ok(routeService.updateRoute(route));
    }
}
