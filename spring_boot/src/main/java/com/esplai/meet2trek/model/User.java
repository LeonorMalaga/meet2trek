package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String icon;
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
}
