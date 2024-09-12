package com.esplai.meet2trek.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.w3c.dom.Text;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long routeId;
    @NotBlank
    private String name;
    private String shortDescription;
    private String resourcesUrl;
    @Size(max = 8000)
    private String fullDescription;
    @NotBlank
    @Size(max = 500)
    private String startingPoint;
    private Byte difficulty;
    private int distance;
    private String country = "SPAIN";
    private String province = "MALAGA";
    private String area;
}