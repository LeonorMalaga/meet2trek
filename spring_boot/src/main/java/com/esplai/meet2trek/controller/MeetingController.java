package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.MeetingDto;
import com.esplai.meet2trek.model.Meeting;
import com.esplai.meet2trek.repository.MeetingRepository;
import com.esplai.meet2trek.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Controller
@RestController
@RequestMapping("/api")
public class MeetingController {
    @Autowired
    MeetingService meetingService;

    @PostMapping("/meetings")
    public MeetingDto createMeeting(@RequestParam Long routeId,
                                    @RequestParam LocalDate meetingDate,
                                    @RequestParam LocalTime meetingTime,
                                    @RequestParam(required = false) String meetingPoint) {
        return meetingService.createMeeting(routeId, meetingDate, meetingTime, meetingPoint);
    }

    @GetMapping("/meetings")
    public List<MeetingDto> listMeetings() {
        return meetingService.listMeetings();
    }

    @DeleteMapping("/meetings/{meetingId}")
    public void deleteMeeting(@PathVariable Long meetingId) {
        meetingService.deleteMeeting(meetingId);
    }

    @GetMapping("/meetings/{meetingId}")
    @ResponseBody
    public Optional<MeetingDto> meetingInfo(@PathVariable Long meetingId) {
        return meetingService.getMeeting(meetingId);
    }

    @PutMapping("/meetings/{meetingId}")
    public MeetingDto editMeeting(@PathVariable Long meetingId, Meeting meeting,
                               @RequestParam Long routeId,
                               @RequestParam LocalDate meetingDate,
                               @RequestParam LocalTime meetingTime,
                               @RequestParam(required = false) String meetingPoint) {
        meeting.setMeetingId(meetingId);
        return meetingService.editMeeting(meetingId, routeId, meetingDate, meetingTime, meetingPoint);
    }

    @GetMapping("/routes/{routeId}/meetings")
    public List<MeetingDto> getMeetingsByRoute(@PathVariable Long routeId) {
        return meetingService.getMeetingsByRoute(routeId);
    }

    @GetMapping("/users/{userId}/meetings")
    public List<MeetingDto> getMeetingsByUser(@PathVariable Long userId) {
        return meetingService.getMeetingsByUser(userId);
    }

    @PostMapping("/meetings/{meetingId}/users")
    public MeetingDto addUserToMeeting(@PathVariable Long meetingId, @RequestParam Long userId) {
        return meetingService.addUserToMeeting(meetingId, userId);
    }

    @DeleteMapping("/meetings/{meetingId}/users")
    public MeetingDto removeUserFromMeeting(@PathVariable Long meetingId, @RequestParam Long userId) {
        return meetingService.removeUserFromMeeting(meetingId, userId);
    }

    @GetMapping("/meetings/findByDate")
    public List<MeetingDto> findMeetingByDate(@RequestParam LocalDate meetingDate) {
        return meetingService.getMeetingByDate(meetingDate);
    }

    @GetMapping("/meetings/findByDateAndTime")
    public List<MeetingDto> findMeetingByDateAndTime(@RequestParam LocalDate meetingDate,
                                                     @RequestParam LocalTime meetingTime) {
        return meetingService.getMeetingByDateAndTime(meetingDate, meetingTime);
    }

    @GetMapping("/meetings/activeMeetings")
    public List<MeetingDto> findActiveMeetings() {
        return meetingService.getActiveMeetings();
    }

    @GetMapping("/meetings/{meetingId}/users/{userId}")
    public boolean isUserInMeeting(@PathVariable Long meetingId, @PathVariable Long userId) {
        return meetingService.isUserInMeeting(meetingId, userId);
    }
}
