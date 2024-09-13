package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    boolean existsByname(String name);
    boolean existsByrouteId(Long routeId);
}