package com.esplai.meet2trek.filters;
import com.esplai.meet2trek.model.Route;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
public class RouteFilterQuery {
    public static Specification<Route> withFilters(RouterFilters filter) {
        return (root, query, criteriaBuilder) -> {
            Predicate predicate = criteriaBuilder.conjunction(); // Always true

            if (filter.getName() != null)
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.like(root.get("name"), "%" + filter.getName() + "%"));

            if (filter.getCountry() != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("country"), filter.getCountry()));
            }

            if (filter.getProvince() != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("province"), filter.getProvince()));
            }

            if (filter.getArea() != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("area"), filter.getArea()));
            }

            if (filter.getDistance() != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("distance"), filter.getDistance()));
            }

            if (filter.getDifficulty() != null) {
                predicate = criteriaBuilder.and(predicate, criteriaBuilder.equal(root.get("difficulty"), filter.getDifficulty()));
            }
            return predicate;
        };
    }

}

