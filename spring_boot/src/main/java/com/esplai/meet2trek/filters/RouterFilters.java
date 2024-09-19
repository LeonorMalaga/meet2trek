package com.esplai.meet2trek.filters;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class RouterFilters {
    private String name;
    private String country;
    private String province;
    private String area;
    private Integer distance;
    private String difficulty;
}
