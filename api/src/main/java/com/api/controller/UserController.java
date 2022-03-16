package com.api.controller;

import com.api.model.Response;
import com.api.model.User;
import com.api.service.UserService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/user")
public class UserController {

    @Setter(onMethod = @__({@Autowired}))
    private UserService userService;

    @GetMapping("/temp")
    public Response hello(@RequestParam long id){
        return userService.temp(id);
    }

    @GetMapping("/checkEmail")
    public Response checkEmail(@RequestParam String email, @RequestParam String socialType) {
        //  url:
        //      /api/user/checkEmail
        //  status:
        //      200: absence
        //      400: error
        //      411: existence & same social type
        //      412: existence & different social type
        //  obj:
        //      socialType (only when 412 occurs)
        return userService.checkEmail(email, socialType);
    }

    @GetMapping
    public Response getUser(@RequestParam String email) {
        //  url:
        //      /api/user
        //  status:
        //      200: success
        //      400: failure
        //  obj:
        //      user
        return userService.getUser(email);
    }

    @PostMapping
    public Response postUser(@RequestBody User user) {
        //  url:
        //      /api/user
        //  status:
        //      200: success
        //      400: failure
        return userService.postUser(user);
    }

    @PutMapping("/lastName")
    public Response putUserLastName(@RequestBody User user) {
        //  url:
        //      /api/user/firstName
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserLastName(user);
    }

    @PutMapping("/firstName")
    public Response putUserFirstName(@RequestBody User user) {
        //  url:
        //      /api/user/firstName
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserFirstName(user);
    }

    @PutMapping("/dob")
    public Response putUserDob(@RequestBody User user) {
        //  url:
        //      /api/user/dob
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserDob(user);
    }

    @PutMapping("/gender")
    public Response putUserGender(@RequestBody User user) {
        //  url:
        //      /api/user/gender
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserGender(user);
    }

    @PutMapping("/bio")
    public Response putUserBio(@RequestBody User user) {
        //  url:
        //      /api/user/bio
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserBio(user);
    }

    @PutMapping("/notification")
    public Response putUserNotification(@RequestBody User user) {
        //  url:
        //      /api/user/notification
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserNotifiaction(user);
    }

    @PutMapping("/preferredGender")
    public Response putUserPreferredGender(@RequestBody User user) {
        //  url:
        //      /api/user/preferredGender
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserPreferredGender(user);
    }

    @PutMapping("/preferredAgeRange")
    public Response putUserPreferredAgeRange(@RequestBody User user) {
        //  url:
        //      /api/user/preferredAgeRange
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserPreferredAgeRange(user);
    }

    @PutMapping("/preferredMaxRange")
    public Response putUserPreferredMaxRange(@RequestBody User user) {
        //  url:
        //      /api/user/preferredMaxRange
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserPreferredMaxRange(user);
    }

    @PutMapping("/socialType")
    public Response putUserSocialType(@RequestBody User user) {
        //  url:
        //      /api/user/socialType
        //  status:
        //      200: success
        //      400: failure
        return userService.putUserSocialType(user);
    }

    @DeleteMapping
    public Response deleteUser(@RequestParam String email) {
        //  url:
        //      /api/user
        //  status:
        //      200: success
        //      400: failure
        return userService.deleteUser(email);
    }

}
