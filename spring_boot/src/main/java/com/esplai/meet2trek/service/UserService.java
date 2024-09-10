package com.esplai.meet2trek.service;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public UserDto createUser(User user) { // C
        user = userRepository.save(user);
        return new UserDto(user);
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
        user = userRepository.save(user);
        return new UserDto(user);
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
}
