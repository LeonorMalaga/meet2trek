package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    @Size(max = 500)
    private String shortDescription;
    private String resourcesPath;
    private String portraitPath;
    private String videoUrl;
    @Size(max = 8000)
    private String fullDescription;
    @NotBlank
    @Size(max = 500)
    private String startingPoint;
    private Byte difficulty;
    private Integer distance;
    private String country = "SPAIN";
    private String province = "MALAGA";
    private String area;
}