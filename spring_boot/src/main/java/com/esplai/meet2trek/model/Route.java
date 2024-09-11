package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long routeId;
    @NotBlank
    private String name;
    private String shortDescription;
    private String resourcesUrl;
    private String fullDescription;
    @NotBlank
    private String startingPoint;
    private Byte difficulty;
    private int distance;
    private String country;
    private String province;
    private String area;
}