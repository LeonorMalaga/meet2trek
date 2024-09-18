package com.esplai.meet2trek.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
    @NotNull
    private Integer distance;
    private String country = "SPAIN";
    private String province = "MALAGA";
    private String area;

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Meeting> meetings = new ArrayList<>();
    @ManyToMany(mappedBy = "savedRoutes")
    private Set<User> Users;
}