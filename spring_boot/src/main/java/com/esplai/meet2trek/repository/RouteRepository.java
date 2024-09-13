package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.model.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {
    boolean existsByname(String name);
    boolean existsByrouteId(Long routeId);
    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END " +
            "FROM Route r WHERE r.name = :name AND r.province = :province " +
            "AND r.country = :country AND r.area = :area AND r.distance = :distance")
    boolean routeExists(@Param("name") String name,
                        @Param("province") String province,
                        @Param("country") String country,
                        @Param("area") String area,
                        @Param("distance") int distance);
}