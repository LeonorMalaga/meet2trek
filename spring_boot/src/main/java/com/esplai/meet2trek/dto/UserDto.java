package com.esplai.meet2trek.dto;

import com.esplai.meet2trek.model.User;
//import com.esplai.meet2trek.model.UserFullName;
//import com.esplai.meet2trek.model.UserPreferredCharacteristics;
//import com.esplai.meet2trek.model.UserPreferredLocation;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class UserDto {
    private Long userId;
    private String username;
    private String password;
    private String email;
    private String icon;
    /*private UserFullName fullName;
    private String slogan;
    private String aboutMe;
    private Byte preferredDifficulty;
    private int preferredDistance;
    private UserPreferredLocation preferredLocation;
    private UserPreferredCharacteristics preferredCharacteristics;*/

    public UserDto(User user) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.icon = user.getIcon();
        /*this.fullName = user.getFullName();
        this.slogan = user.getSlogan();
        this.aboutMe = user.getAboutMe();
        this.preferredDifficulty = user.getPreferredDifficulty();
        this.preferredDistance = user.getPreferredDistance();
        this.preferredLocation = user.getPreferredLocation();
        this.preferredCharacteristics = user.getPreferredCharacteristics();*/
    }

    public String getPassword() {
        return "********";
    }
}
