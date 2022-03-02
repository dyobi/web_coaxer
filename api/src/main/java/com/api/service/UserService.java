package com.api.service;

import com.api.model.Response;
import com.api.model.User;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    public Response checkEmail(String email, String socialType) {
        try {
            User user = userRepository.findByEmail(email);
            if (user == null) {
                return new Response(200);
            } else {
                return new Response(user.getSocialType().equals(socialType) ? 411 : 412, user.getSocialType());
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response postUser(User user) {
        try {
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response deleteUser(String email) {
        try {
            userRepository.deleteByEmail(email);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
