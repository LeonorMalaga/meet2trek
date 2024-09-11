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
    private String name;
    private String surname;
    private String slogan;
    private String aboutMe;
    private Byte preferredDifficulty;
    private int preferredDistance;
    private String preferredCountry;
    private String preferredProvince;
    private String preferredArea;

    public UserDto(User user) {
        this.userId = user.getUserId();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.icon = user.getIcon();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.slogan = user.getSlogan();
        this.aboutMe = user.getAboutMe();
        this.preferredDifficulty = user.getPreferredDifficulty();
        this.preferredDistance = user.getPreferredDistance();
        this.preferredCountry = user.getPreferredCountry();
        this.preferredProvince = user.getPreferredProvince();
        this.preferredArea = user.getPreferredArea();
    }

    public String getPassword() {
        return "********";
    }
}
