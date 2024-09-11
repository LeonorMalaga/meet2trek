package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/user")
    public UserDto createUser (@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    public List<UserDto> listUsers() {
        return userService.listUsers();
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/user/{id}")
    @ResponseBody
    public Optional<UserDto> userInfo(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/user/{id}")
    public UserDto editUser(@PathVariable long userId, User user) {
        user.setUserId(userId);
        return userService.editUser(user);
    }

    @GetMapping("/user/check/{username}")
    public boolean usernameExists(@PathVariable String username) {
        return userService.usernameExists(username);
    }
}
