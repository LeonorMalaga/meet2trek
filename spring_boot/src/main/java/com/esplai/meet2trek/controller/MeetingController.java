package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.embeddedid.MeetingId;
import com.esplai.meet2trek.model.Meeting;
import com.esplai.meet2trek.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
public class MeetingController {
    @Autowired
    MeetingService meetingService;

    @PostMapping("/meetings")
    public Meeting createMeeting(@RequestBody Meeting meeting) {
        return meetingService.createMeeting(meeting);
    }

    @GetMapping("/meetings")
    public List<Meeting> listMeetings() {
        return meetingService.listMeetings();
    }

    @DeleteMapping("/meetings/{meetingId}")
    public void deleteMeeting(@PathVariable MeetingId meetingId) {
        meetingService.deleteMeeting(meetingId);
    }

    @GetMapping("/meetings/{meetingId}")
    @ResponseBody
    public Optional<Meeting> meetingInfo(@PathVariable MeetingId meetingId) {
        return meetingService.getMeeting(meetingId);
    }

    @PutMapping("/meetings/{meetingId}")
    public Meeting editMeeting(@PathVariable MeetingId meetingId, @RequestBody Meeting meeting) {
        meeting.setMeetingId(meetingId);
        return meetingService.editMeeting(meetingId, meeting);
    }
}
