package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findByMeetings_MeetingId(Long meetingId);
}
