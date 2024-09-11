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
    @NotBlank
    private String shortDescription;
    private String portrait;
    private List<String> resources;
    private String fullDescription;
    @NotBlank
    private String startingPoint;
    private Byte difficulty;
    private int distance;
    private String country;
    private String province;
    private String area;
}