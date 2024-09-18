package com.esplai.meet2trek.controller;

import com.esplai.meet2trek.dto.UserDto;
import com.esplai.meet2trek.dto.ResponseMessage;

import com.esplai.meet2trek.model.User;
import com.esplai.meet2trek.model.Route;
import com.esplai.meet2trek.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Controller
@RestController
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

    @GetMapping("users/{userId}/savedRoutes")
    public ResponseEntity<?> getSavedRoutes(@PathVariable Long userId) {
        boolean exists= userService.existUserById(userId);
        // System.out.println("userId: " + userId +", routeId:"+ routeId +",exists:"+ exists);
        if(!exists)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseMessage("User with id: " + userId + ", not found"));
        }

        return ResponseEntity.ok(userService.getSavedRoutersByUser(userId));
    }

    @PostMapping("users/{userId}/savedRoutes")
    public ResponseEntity<ResponseMessage> saveRoute(@PathVariable Long userId, @RequestParam Long routeId) {
        userService.saveRoute(userId,routeId);
        boolean exists= userService.userSavedRoute(userId, routeId);
       // System.out.println("userId: " + userId +", routeId:"+ routeId +",exists:"+ exists);
        if(exists)
        {
            return ResponseEntity.status(409).body(new ResponseMessage("Route: "+routeId+", already saved by user:"+ userId));
        }
        return ResponseEntity.status(200).body(new ResponseMessage("The route with id: " + routeId + ", has been saved for the user with id:"+ userId ));
    }

    @DeleteMapping("/users/{userid}/savedRoutes")
    public ResponseEntity<ResponseMessage> deleteRoute(@PathVariable Long id){
        boolean exists= routeService.existsByRouteId(id);
        if(!exists)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("Route not found"));
        }
        routeService.deleteRoute(id);
        return ResponseEntity.status(200).body(new ResponseMessage("The route with id: " + id + " has been deleted."));
    }

}
