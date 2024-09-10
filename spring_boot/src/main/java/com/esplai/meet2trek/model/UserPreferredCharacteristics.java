package com.esplai.meet2trek.model;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter @Setter
public class UserPreferredCharacteristics {
    private boolean preferCircular;
    private boolean preferClimbPath;
    private boolean preferRestStop;
    private boolean preferSwimmingArea;
    private boolean preferKidFriendly;
    private boolean preferPicnicArea;
    private boolean preferPhotographicView;
    private boolean preferPetFriendly;
    private boolean preferWillNotGetWet;
}
