package com.esplai.meet2trek.service;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.error.ConflictErrorResponse;
import com.esplai.meet2trek.error.NotFoundErrorResponse;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.repository.MeetingRepository;
import com.esplai.meet2trek.repository.UserRepository;
import com.esplai.meet2trek.repository.RouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@SuppressWarnings("unused")
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    RouteRepository routeRepository;

    public UserDto createUser(User user) { // C
        if (userRepository.existsByUsername(user.getUsername()) && userRepository.existsByEmail(user.getEmail())) {
            throw new ConflictErrorResponse("Username already exists, and this email is already in use.");
        } else if (userRepository.existsByUsername(user.getUsername())) {
            throw new ConflictErrorResponse("Username already exists.");
        } else if (userRepository.existsByEmail(user.getEmail())) {
            throw new ConflictErrorResponse("This email is already in use.");
        } else {
            user = userRepository.save(user);
            return new UserDto(user);
        }
    }

    public Optional<UserDto> getUser(Long userId) { // R
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new NotFoundErrorResponse("User not found.");
        } else {
            return Optional.of(new UserDto(user));
        }
    }

    public UserDto editUser(Long userId, User user) { // U
        if (userRepository.existsByUsername(user.getUsername()) && userRepository.existsByEmail(user.getEmail())) {
            throw new ConflictErrorResponse("Username already exists, and this email is already in use.");
        } else if (userRepository.existsByUsername(user.getUsername())) {
            throw new ConflictErrorResponse("Username already exists.");
        } else if (userRepository.existsByEmail(user.getEmail())) {
            throw new ConflictErrorResponse("This email is already in use.");
        } else {
            userRepository.findById(userId).orElseThrow(() -> new NotFoundErrorResponse("User not found."));
            user = userRepository.save(user);
            return new UserDto(user);
        }
    }

    public void deleteUser(Long userId) { // D
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new NotFoundErrorResponse("User not found.");
        } else {
            userRepository.deleteById(userId);
        }
    }

    public List<UserDto> listUsers() {
        List<User> userList = userRepository.findAll();
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(new UserDto(user));
        }
        return userDtoList;
    }

    public boolean usernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    public UserDto partialEdit(Long userId, User user) {

        User existingUser = userRepository.findById(userId).orElseThrow(() ->
                new NotFoundErrorResponse("User not found."));
        mergeUser(existingUser, user);

        return new UserDto(userRepository.save(existingUser));
    }

    private void mergeUser(User existingUser, User user) {

        if (userRepository.existsByUsername(user.getUsername()) && userRepository.existsByEmail(user.getEmail())) {
            throw new ConflictErrorResponse("Username already exists, and email is already in use.");
        }

        if (user.getUsername() != null) {
            if (userRepository.existsByUsername(user.getUsername())) {
                throw new ConflictErrorResponse("Username already exists.");
            } else {
                existingUser.setUsername(user.getUsername());
            }
        }

        if (user.getPassword() != null) {
            existingUser.setPassword(user.getPassword());
        }

        if (user.getEmail() != null) {
            if (userRepository.existsByEmail(user.getEmail())) {
                throw new ConflictErrorResponse("Email is already in use.");
            } else {
                existingUser.setEmail(user.getEmail());
            }
        }

        if (user.getIcon() != null) {
            existingUser.setIcon(user.getIcon());
        }

        if (user.getName() != null) {
            existingUser.setName(user.getName());
        }

        if (user.getSurname() != null) {
            existingUser.setSurname((user.getSurname()));
        }

        if (user.getSlogan() != null) {
            existingUser.setSlogan(user.getSlogan());
        }

        if (user.getAboutMe() != null) {
            existingUser.setAboutMe(user.getAboutMe());
        }

        if (user.getPreferredDifficulty() != null) {
            existingUser.setPreferredDifficulty(user.getPreferredDifficulty());
        }

        if (user.getPreferredDistance() != null) {
            existingUser.setPreferredDistance(user.getPreferredDistance());
        }

        if (user.getPreferredCountry() != null) {
            existingUser.setPreferredCountry(user.getPreferredCountry());
        }

        if (user.getPreferredProvince() != null) {
            existingUser.setPreferredProvince(user.getPreferredProvince());
        }

        if (user.getPreferredArea() != null) {
            existingUser.setPreferredArea(user.getPreferredArea());
        }
    }

    public List<UserDto> getUsersByMeeting(Long meetingId) {
        meetingRepository.findById(meetingId).orElseThrow(() -> new NotFoundErrorResponse("Meeting not found."));
        List<User> userList = userRepository.findByMeetings_MeetingId(meetingId);
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(new UserDto(user));
        }
        if (userList.isEmpty()) {
            throw new NotFoundErrorResponse("This meeting is empty.");
        } else {
            return userDtoList;
        }
    }

    /*public UserDto uploadUserIcon(Long userId, MultipartFile file) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new NotFoundErrorResponse("User not found.");
        } else {
            User user = userOptional.get();
            String fileName = saveImage(userId, file);
            user.setIcon(fileName);
            return new UserDto(userRepository.save(user));
        }
    }

    private String saveImage(Long userId, MultipartFile file) {
        if (file.isEmpty()) {
            throw new ConflictErrorResponse("Can't upload an empty file!");
        } else {
            Path uploadPath = Paths.get(String.valueOf(userId));
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
        }
    }*/

    public boolean existUserById(Long userId){
        return userRepository.existsByUserId(userId);
    }
    public Set<Route> getSavedRoutersByUser(Long userId){
       User user = userRepository.findById(userId).orElseThrow(() -> new NotFoundErrorResponse("User not found"));
       return user.getSavedRoutes();
   }
    public void saveRoute(Long userId, Long routeId){
       User user = userRepository.findById(userId).orElseThrow(() -> new NotFoundErrorResponse("User not found"));
       Route route = routeRepository.findById(routeId).orElseThrow(() -> new NotFoundErrorResponse("Route not found"));
       user.getSavedRoutes().add(route);
       userRepository.save(user);
    }

    public boolean userSavedRoute(Long userId, Long routeId) {
        return userRepository.userSavedRoute(userId, routeId);
    }

    public boolean deleteSavedRoute(Long userId, Long routeId) {
        int rowsAffected = userRepository.deleteSavedRoute(userId, routeId);
        return rowsAffected > 0;
    }
}
