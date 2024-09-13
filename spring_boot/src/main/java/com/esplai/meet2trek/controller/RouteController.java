package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.ResponseMessage;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.service.RouteService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Controller
@Data
@RestController
@RequestMapping("/route")
public class RouteController {
    private static final Logger log = LoggerFactory.getLogger(RouteController.class);
    @Autowired
    private RouteService routeService;
    @PostMapping("/")
    public Route createRoute(@RequestBody Route route)
    {
        System.out.println("Received JSON:" + route);
        log.info("Received Route: {}", route);
        // Create the route
        Route createdRoute = routeService.createNewRoute(route);
        // Log the response body (created Route)
        log.info("Response Route: {}", createdRoute);
        return createdRoute;
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseMessage> deleteRoute(@PathVariable Long id){
        boolean exists= routeService.existsById(id);
        if(!exists)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("Not found"));
        }
        routeService.deleteRoute(id);
        return ResponseEntity.status(200).body(new ResponseMessage("Route with id:" +id+ "deleted"));
    }
    @PutMapping("/{id}")
    public ResponseEntity<Route> updateRoute(@PathVariable Long id, @RequestBody Route route)
    { route.setRouteId(id);
       return ResponseEntity.ok(routeService.updateRoute(route));
    }
}
