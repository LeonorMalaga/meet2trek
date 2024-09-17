package com.esplai.meet2trek.service;

import com.esplai.meet2trek.dto.MeetingDto;
import com.esplai.meet2trek.model.Meeting;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.repository.MeetingRepository;
import com.esplai.meet2trek.repository.RouteRepository;
import com.esplai.meet2trek.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MeetingService {
    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    UserRepository userRepository;

    public MeetingDto createMeeting(Long routeId, LocalDate meetingDate, LocalTime meetingTime, String meetingPoint) { // C
        Route route = routeRepository.findById(routeId)
                .orElseThrow(() -> new IllegalArgumentException("Route not found."));

        Meeting meeting = new Meeting();
        meeting.setRoute(route);
        meeting.setMeetingDate(meetingDate);
        meeting.setMeetingTime(meetingTime);
        meeting.setMeetingPoint(meetingPoint);

        return new MeetingDto(meetingRepository.save(meeting));
    }

    public Optional<MeetingDto> getMeeting(Long meetingId) { // R
        Meeting meeting = meetingRepository.findById(meetingId).orElse(null);
        if (meeting == null) {
            throw new IllegalArgumentException("Meeting not found.");
        } else {
            return Optional.of(new MeetingDto(meeting));
        }
    }

    public MeetingDto editMeeting(Long meetingId, Long routeId, LocalDate meetingDate,
                               LocalTime meetingTime, String meetingPoint) { // U
        Route route = routeRepository.findById(routeId)
                .orElseThrow(() -> new IllegalArgumentException("Route not found."));

        Meeting meeting = meetingRepository.findById(meetingId).orElse(null);
        if (meeting == null) {
            throw new IllegalArgumentException("Meeting not found.");
        } else {
            meeting.setRoute(route);
            meeting.setMeetingDate(meetingDate);
            meeting.setMeetingTime(meetingTime);
            meeting.setMeetingPoint(meetingPoint);

            return new MeetingDto(meetingRepository.save(meeting));
        }
    }

    public void deleteMeeting(Long meetingId) { // D
        Meeting meeting = meetingRepository.findById(meetingId).orElse(null);
        if (meeting == null) {
            throw new IllegalArgumentException("Meeting not found.");
        } else {
            meetingRepository.deleteById(meetingId);
        }
    }

    public List<MeetingDto> listMeetings() {
        List<Meeting> meetingList = meetingRepository.findAll();
        List<MeetingDto> meetingDtoList = new ArrayList<>();
        for (Meeting meeting : meetingList) {
            meetingDtoList.add(new MeetingDto(meeting));
        }
        return meetingDtoList;
    }

    public List<MeetingDto> getMeetingsByRoute(Long routeId) {
        List<Meeting> meetingList = meetingRepository.findByRoute_RouteId(routeId);
        List<MeetingDto> meetingDtoList = new ArrayList<>();
        for (Meeting meeting : meetingList) {
            meetingDtoList.add(new MeetingDto(meeting));
        }
        return meetingDtoList;
    }

    public List<MeetingDto> getMeetingsByUser(Long userId) {
        List<Meeting> meetingList = meetingRepository.findByUsers_UserId(userId);
        List<MeetingDto> meetingDtoList = new ArrayList<>();
        for (Meeting meeting : meetingList) {
            meetingDtoList.add(new MeetingDto(meeting));
        }
        return meetingDtoList;
    }

    public MeetingDto addUserToMeeting(Long meetingId, Long userId) {
        Meeting meeting = meetingRepository.findById(meetingId)
                .orElseThrow(() -> new IllegalArgumentException("Meeting not found."));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
        boolean userAlreadyInMeeting = meeting.getUsers().stream()
                .anyMatch(existingUser -> existingUser.getUserId().equals(userId));
        if (userAlreadyInMeeting) {
            throw new IllegalArgumentException("This user is already part of this meeting.");
        } else {
            meeting.getUsers().add(user);
            return new MeetingDto(meetingRepository.save(meeting));
        }
    }

    public MeetingDto removeUserFromMeeting(Long meetingId, Long userId) {
        Meeting meeting = meetingRepository.findById(meetingId)
                .orElseThrow(() -> new IllegalArgumentException("Meeting not found."));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
        boolean userAlreadyInMeeting = meeting.getUsers().stream()
                .anyMatch(existingUser -> existingUser.getUserId().equals(userId));
        if (userAlreadyInMeeting) {
            meeting.getUsers().remove(user);
            return new MeetingDto(meetingRepository.save(meeting));
        } else {
            throw new IllegalArgumentException("This user is not in this meeting.");
        }
    }

    public List<MeetingDto> getMeetingByDate(LocalDate meetingDate) {
        List<Meeting> meetingList = meetingRepository.findByMeetingDate(meetingDate);
        List<MeetingDto> meetingDtoList = new ArrayList<>();
        for (Meeting meeting : meetingList) {
            meetingDtoList.add(new MeetingDto(meeting));
        }
        if (meetingList.isEmpty()) {
            throw new IllegalArgumentException("There are no meetings for this date.");
        } else {
            return meetingDtoList;
        }
    }

    public List<MeetingDto> getMeetingByDateAndTime(LocalDate meetingDate, LocalTime meetingTime) {
        List<Meeting> meetingList = meetingRepository.findByMeetingDateAndMeetingTime(meetingDate, meetingTime);
        List<MeetingDto> meetingDtoList = new ArrayList<>();
        for (Meeting meeting : meetingList) {
            meetingDtoList.add(new MeetingDto(meeting));
        }
        if (meetingList.isEmpty()) {
            throw new IllegalArgumentException("There are no meetings for this date and time.");
        } else {
            return meetingDtoList;
        }
    }
}
