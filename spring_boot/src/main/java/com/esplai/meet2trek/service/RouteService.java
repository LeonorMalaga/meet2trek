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
    public void deleteRoute(long id){ routeRepository.deleteById(id);}
    public Route updateRoute(Route route){ return routeRepository.save(route);}
    public boolean existsByrouteId(Long routeId){ return routeRepository.existsByrouteId(routeId);}
    public boolean routeExists(String name, String province, String country, String area, int distance) {
        return routeRepository.routeExists(name, province, country, area, distance);
    }
}
