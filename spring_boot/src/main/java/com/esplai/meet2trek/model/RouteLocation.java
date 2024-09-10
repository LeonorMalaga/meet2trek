package com.esplai.meet2trek.model;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter @Setter
public class RouteLocation {
    private String country;
    private String province;
    private String area;
}
