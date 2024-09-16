package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.embeddedid.MeetingId;
import com.esplai.meet2trek.model.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, MeetingId> {
}
