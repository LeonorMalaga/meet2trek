package com.esplai.meet2trek.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    private String icon = "../USERS/Default.jpg";
    private String name;
    private String surname;
    @Size(max = 120)
    private String slogan;
    @Size(max = 500)
    private String aboutMe;
    private Byte preferredDifficulty;
    private Integer preferredDistance;
    private String preferredCountry;
    private String preferredProvince;
    private String preferredArea;

    @ManyToMany(mappedBy = "users")
    @JsonIgnore
    private List<Meeting> meetings = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "user_saved_routes", // This is the name of the join table
            joinColumns = @JoinColumn(name = "user_id"), // Foreign key in join table for User
            inverseJoinColumns = @JoinColumn(name = "route_id") // Foreign key in join table for Route
    )
    private Set<Route> savedRoutes;

}
