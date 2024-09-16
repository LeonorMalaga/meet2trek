package com.esplai.meet2trek.service;

import com.esplai.meet2trek.embeddedid.MeetingId;
import com.esplai.meet2trek.model.Meeting;
import com.esplai.meet2trek.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MeetingService {
    @Autowired
    MeetingRepository meetingRepository;

    public Meeting createMeeting(Meeting meeting) { // C
        return meetingRepository.save(meeting);
    }

    public Optional<Meeting> getMeeting(MeetingId meetingId) { // R
        Meeting meeting = meetingRepository.findById(meetingId).orElse(null);
        if (meeting == null) {
            return Optional.empty();
        } else {
            return Optional.of(meeting);
        }
    }

    public Meeting editMeeting(MeetingId meetingId, Meeting meeting) { // U
        meetingRepository.findById(meetingId).orElseThrow(() -> new IllegalArgumentException("Meeting not found."));
        return meetingRepository.save(meeting);
    }

    public void deleteMeeting(MeetingId meetingId) { // D
        meetingRepository.deleteById(meetingId);
    }

    public List<Meeting> listMeetings() {
        return meetingRepository.findAll();
    }
}
