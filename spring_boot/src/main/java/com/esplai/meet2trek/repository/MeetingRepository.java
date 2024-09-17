package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {
    List<Meeting> findByRoute_RouteId(Long routeId);
    List<Meeting> findByUsers_UserId(Long userId);
    List<Meeting> findByMeetingDate(LocalDate meetingDate);
    List<Meeting> findByMeetingDateAndMeetingTime(LocalDate meetingDate, LocalTime meetingTime);
}
