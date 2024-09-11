package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.service.RouteService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
        log.info("Received Route: {}", route);
        // Create the route
        Route createdRoute = routeService.createNewRoute(route);

        // Log the response body (created Route)
        log.info("Response Route: {}", createdRoute);

        return createdRoute;

    }

}
