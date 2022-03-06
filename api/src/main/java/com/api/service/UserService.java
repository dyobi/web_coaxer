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
            } else if (user.getSocialType().equals(socialType)) {
                return new Response(411);
            } else {
                return new Response(412, user.getSocialType());
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response getUser(String email) {
        try {
            User user = userRepository.findByEmail(email);
            if (user == null) {
                return new Response(400);
            } else {
                return new Response(200, user);
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

    public Response putUserSocialType(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());
            user.setSocialType(value.getSocialType());
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
