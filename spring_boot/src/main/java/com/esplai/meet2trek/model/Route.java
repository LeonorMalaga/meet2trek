package com.esplai.meet2trek.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long route_id;
    @NotBlank
    private String name;
    @NotBlank
    private String short_description;
    private String portrait;
    private String resources;
    private String full_description;
    @NotBlank
    private String starting_point;
    private Byte difficulty;
    private int distance;
    //Tiene que ser compuesto
    private String country;
    private String province;
    private String area;
    //Otro compuesto
    private boolean circular;
    private boolean climb_path;
    private boolean rest_stop;
    private boolean swimming_area;
    private boolean kid_friendly;
    private boolean picnic_area;
    private boolean photographic_view;
    private boolean pet_friendly;
    private boolean will_not_get_wet;
}