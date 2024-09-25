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

@SuppressWarnings("unused")
@Controller
@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = "http://localhost:5173/")
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

    @GetMapping("users/{userId}/savedRoutes")
    public ResponseEntity<?> getSavedRoutes(@PathVariable Long userId) {
        boolean exists = userService.existUserById(userId);
        //System.out.println("userId: " + userId + ", routeId: " + routeId + ", exists: " + exists);
        if(!exists)
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseMessage("User with id " + userId + " was not found."));
        }

        return ResponseEntity.ok(userService.getSavedRoutersByUser(userId));
    }

    @PostMapping("users/{userId}/savedRoutes")
    public ResponseEntity<ResponseMessage> saveRoute(@PathVariable Long userId, @RequestParam Long routeId) {

        int count= userService.countSavedRoutesByUser(userId, routeId);
        //System.out.println("-----------------userId: " + userId + ", routeId: " + routeId + ", exists: " + count+"----------------");
       if (count == 0)
        {
            userService.saveRoute(userId,routeId);
        }
        return ResponseEntity.status(200).body(new ResponseMessage("The route with id " + routeId +
                " has been saved to the user with id " + userId + "."));
    }

    @DeleteMapping("/users/{userId}/savedRoutes")
    public ResponseEntity<ResponseMessage> deleteSavedRoute(@PathVariable Long userId, @RequestParam Long routeId) {
        int count= userService.countSavedRoutesByUser(userId,routeId);
        if(count == 0)
        {
            return ResponseEntity.status(404).body(new ResponseMessage("The route with id " + routeId +
                    " was not found to be in the saved routes of the user with id " + userId + "."));
        }
        System.out.println("---------------DELETE-------------- userId: " + userId + ", routeId: " + routeId +
                ", ---------------------------------");
        boolean deleted = userService.deleteSavedRoute(userId,routeId);
        System.out.println("userId: " + userId + ", routeId: " + routeId + ", deleted: " + deleted);
        if(deleted) {
            return ResponseEntity.status(200).body(new ResponseMessage("The route with id " + routeId +
                    " has been removed from the saved routes of the user with id " + userId + "."));
        }
        return ResponseEntity.status(500).body(new ResponseMessage("Action can't be done."));
    }

}
