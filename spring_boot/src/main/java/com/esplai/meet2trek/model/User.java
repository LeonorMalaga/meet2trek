package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    /*@Embedded
    private UserFullName fullName;
    private String slogan;
    private String aboutMe;
    private Byte preferredDifficulty;
    private int preferredDistance;
    @Embedded
    private UserPreferredLocation preferredLocation;
    @Embedded
    private UserPreferredCharacteristics preferredCharacteristics;*/
}
