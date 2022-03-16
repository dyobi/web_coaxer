package com.api.service;

import com.api.model.Picture;
import com.api.model.Response;
import com.api.model.User;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;

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

    public Response getIdealUsers(long id) {
        try {
            User user = userRepository.findById(id).orElse(null);

            if (user == null) {
                return new Response(400);
            } else {
                ArrayList<User> idealUsers = userRepository.getIdealUsers(user);
                return new Response(200, idealUsers);
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

    public Response putUserLastName(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setLastName(value.getLastName());
            userRepository.save(user);

            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserFirstName(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setFirstName(value.getFirstName());
            userRepository.save(user);

            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserDob(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setDateOfBirth(value.getDateOfBirth());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserGender(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setGender(value.isGender());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserBio(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setBio(value.getBio());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserNotifiaction(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setNotification(value.isNotification());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserPreferredGender(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setPreferredGender(value.isPreferredGender());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserPreferredAgeRange(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setPreferredMinAge(value.getPreferredMinAge());
            user.setPreferredMaxAge(value.getPreferredMaxAge());
            userRepository.save(user);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response putUserPreferredMaxRange(User value) {
        try {
            User user = userRepository.findByEmail(value.getEmail());

            user.setPreferredMaxRange(value.getPreferredMaxRange());
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
        String path = System.getProperty("user.home") + "/Desktop/tmp";

        try {
            User user = userRepository.findByEmail(email);

            for (Picture pic : user.getPictures()) {
                String filePath = path + "/" + pic.getName() + "." + pic.getType();
                File file = new File(filePath);
                if (file.exists()) file.delete();
            }

            userRepository.deleteByEmail(email);

            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
