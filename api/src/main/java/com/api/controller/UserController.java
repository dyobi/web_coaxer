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

    @PostMapping
    public Response postUser(@RequestBody User user) {
        //  url:
        //      /api/user
        //  status:
        //      200: success
        //      400: failure
        return userService.postUser(user);
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
