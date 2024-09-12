package com.esplai.meet2trek.service;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// import org.springframework.web.multipart.MultipartFile;

// import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public UserDto createUser(User user) { // C
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username already exists.");
        } else {
            user = userRepository.save(user);
            return new UserDto(user);
        }
    }

    public Optional<UserDto> getUser(Long userId) { // R
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return Optional.empty();
        } else {
            return Optional.of(new UserDto(user));
        }
    }

    public UserDto editUser(User user) { // U
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new IllegalArgumentException("Username already exists.");
        } else {
            user = userRepository.save(user);
            return new UserDto(user);
        }
    }

    public void deleteUser(Long userId) { // D
        userRepository.deleteById(userId);
    }

    public List<UserDto> listUsers() {
        List<User> userList = userRepository.findAll();
        List<UserDto> userDtoList = new ArrayList<>();
        for (User user : userList) {
            userDtoList.add(new UserDto((user)));
        }
        return userDtoList;
    }

    public boolean usernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    /*public UserDto uploadUserIcon(Long userId, MultipartFile file) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            throw new IllegalArgumentException("User not found.");
        } else {
            User user = userOptional.get();
            String fileName = saveImage(userId, file);
            user.setIcon(fileName);
            return new UserDto(userRepository.save(user));
        }
    }

    private String saveImage(Long userId, MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Can't upload an empty file!");
        } else {
            Path uploadPath = Paths.get(String.valueOf(userId));
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }
        }
    }*/
}
