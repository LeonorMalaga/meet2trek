package com.esplai.meet2trek.model;

import com.esplai.meet2trek.embeddedid.MeetingId;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meetingId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private Route route;

    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate meetingDate;

    @JsonFormat(pattern="hh:mm")
    private LocalDate meetingTime;

    private String meetingPoint;
}

