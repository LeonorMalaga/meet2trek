package com.esplai.meet2trek.dto;

import com.esplai.meet2trek.model.Meeting;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.model.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter @Setter
public class MeetingDto {
    private Long meetingId;

    @DateTimeFormat(pattern="dd/MM/yyyy")
    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate meetingDate;

    @DateTimeFormat(pattern="HH:mm")
    @JsonFormat(pattern="HH:mm")
    private LocalTime meetingTime;

    private String meetingPoint;

    private Route route;

    private List<UserDto> users;


    public MeetingDto(Meeting meeting) {
        this.meetingId = meeting.getMeetingId();
        this.meetingDate = meeting.getMeetingDate();
        this.meetingTime = meeting.getMeetingTime();
        this.meetingPoint = meeting.getMeetingPoint();
        this.route = meeting.getRoute();
        List<User> userList = meeting.getUsers();
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(new UserDto(user));
        }
        this.users = userDtoList;
    }
}
