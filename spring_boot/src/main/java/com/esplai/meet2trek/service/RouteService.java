package com.esplai.meet2trek.service;

import com.esplai.meet2trek.repository.RouteRepository;
import com.esplai.meet2trek.model.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RouteService {
    @Autowired
     private RouteRepository routeRepository;
    public Route createNewRoute(Route route)
    {
        return routeRepository.save(route);
    }
}
