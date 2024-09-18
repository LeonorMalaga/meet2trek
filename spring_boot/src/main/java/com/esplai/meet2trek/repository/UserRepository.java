package com.esplai.meet2trek.repository;

import com.esplai.meet2trek.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUserId(Long userId);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findByMeetings_MeetingId(Long meetingId);
    /**
     * Custom query to determinate if a route is saved by a user
     * */
    @Query("SELECT CASE WHEN COUNT(u) > 0 THEN true ELSE false END FROM User u JOIN u.savedRoutes r WHERE u.userId = :userId AND r.routeId = :routeId")
    boolean userSavedRoute(@Param("userId") Long userId, @Param("routeId") Long routeId);
}
