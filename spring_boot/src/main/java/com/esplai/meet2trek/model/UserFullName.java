package com.esplai.meet2trek.model;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter @Setter
public class UserFullName {
    private String name;
    private String surname;
}
