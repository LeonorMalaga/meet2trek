package com.esplai.meet2trek.dto;

import com.esplai.meet2trek.model.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter @Setter
public class UserDto {
    private Long userId;
    private String username;
    @SuppressWarnings("unused")
    private String password;
    @SuppressWarnings("unused")
    private String email;
    private String icon;
    private String name;
    private String surname;
    private String slogan;
    private String aboutMe;
    private Byte preferredDifficulty;
    private Integer preferredDistance;
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

    public String getEmail() {
        return "********@*****.***";
    }
}
