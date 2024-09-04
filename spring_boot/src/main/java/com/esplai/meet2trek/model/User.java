package com.esplai.meet2trek.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    private String icon;
    private String slogan;
    private String about_me;
    private Byte preferred_difficulty;
    private int preferred_distance;
    // Compuesto
    private String preferred_country;
    private String preferred_province;
    private String preferred_area;
    // Otro compuesto
    private boolean prefer_circular;
    private boolean prefer_climb_path;
    private boolean prefer_rest_stop;
    private boolean prefer_swimming_area;
    private boolean prefer_kid_friendly;
    private boolean prefer_picnic_area;
    private boolean prefer_photographic_view;
    private boolean prefer_pet_friendly;
    private boolean prefer_will_not_get_wet;
}
