package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

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
    @NotBlank
    private String shortDescription;
    private String portrait;
    private String resources;
    private String fullDescription;
    @NotBlank
    private String startingPoint;
    private Byte difficulty;
    private int distance;
    @Embedded
    private RouteLocation Location;
    @Embedded
    private RouteCharacteristics Characteristics;
}