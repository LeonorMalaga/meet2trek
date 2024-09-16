package com.esplai.meet2trek.embeddedid;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Embeddable
public class MeetingId implements Serializable {
    private Long userId;
    private Long routeId;
}
