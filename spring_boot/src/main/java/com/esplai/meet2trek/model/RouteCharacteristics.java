package com.esplai.meet2trek.model;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter @Setter
public class RouteCharacteristics {
    private boolean circular;
    private boolean climbPath;
    private boolean restStop;
    private boolean swimmingArea;
    private boolean kidFriendly;
    private boolean picnicArea;
    private boolean photographicView;
    private boolean petFriendly;
    private boolean willNotGetWet;
}
