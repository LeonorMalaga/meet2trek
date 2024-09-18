package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/users")
    public UserDto createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    public List<UserDto> listUsers() {
        return userService.listUsers();
    }

    @DeleteMapping("/users/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/users/{userId}")
    @ResponseBody
    public Optional<UserDto> userInfo(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/users/{userId}")
    public UserDto editUser(@PathVariable Long userId, @RequestBody User user) {
        user.setUserId(userId);
        return userService.editUser(userId, user);
    }

    @GetMapping("meetings/{meetingId}/users")
    public List<UserDto> getUsersByMeeting(@PathVariable Long meetingId) {
        return userService.getUsersByMeeting(meetingId);
    }

    @GetMapping("/users/check/{username}")
    public boolean usernameExists(@PathVariable String username) {
        return userService.usernameExists(username);
    }

    @PatchMapping("users/{userId}")
    public UserDto editUserProfile(@PathVariable Long userId, @RequestBody User user) {
        return userService.partialEdit(userId, user);
    }

    /*@PatchMapping("user/{userId}")
    public UserDto editUserIcon(@PathVariable Long userId, @RequestParam MultipartFile icon) {
        userService.editUserIcon(userId, String.valueOf(icon));
    }*/
}
