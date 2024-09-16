package com.esplai.meet2trek.service;

import com.esplai.meet2trek.repository.RouteRepository;
import com.esplai.meet2trek.model.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.esplai.meet2trek.filters.RouterFilters;
import com.esplai.meet2trek.filters.RouteFilterQuery;
import java.util.Optional;
import java.util.List;
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
    public boolean routeExists(String name, String province, String country, String area, Integer distance) {
        //System.out.println("RouteExists:" + name+", Province: " + province+",Country: " + country +", area:" + area+ ",distance :"+ distance);
        return routeRepository.routeExists(name, province, country, area, distance);
    }
    public Long findRouteIdByParams(String name, String province, String country, String area, Integer distance) {
        System.out.println("RouteExists:" + name+", Province: " + province+",Country: " + country +", area:" + area+ ",distance :"+ distance);
        return routeRepository.findRouteIdByParams(name, province, country, area, distance);
    }
   public Optional<Route> findRouteById(Long id)
   {
       Route mRoute = routeRepository.findById(id).orElse(null);
       if(mRoute == null)
       {
           return Optional.empty();
       } else {
           return Optional.of(mRoute);
       }
   }
    public List<Route> getAllRoutes()
    {
       return routeRepository.findAll();
    }
    public List<Route> getFilteredRoutes(RouterFilters filter)
    {
        return routeRepository.findAll(RouteFilterQuery.withFilters(filter));
    }
}
