package com.api.service;

import com.api.model.Picture;
import com.api.model.Response;
import com.api.model.User;
import com.api.repository.PictureRepository;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.Objects;
import java.util.UUID;

@Service
public class PictureService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private PictureRepository pictureRepository;

    public Response getPicture(long id) {
        try {
            ArrayList<Picture> obj = pictureRepository.findByUserId(id);

            return new Response(200, obj);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response postPicture(long id, MultipartFile data) {
        User user = userRepository.findById(id).orElse(null);
        Picture picture = new Picture();

        String name = UUID.randomUUID().toString();
        String type = Objects.requireNonNull(data.getContentType()).split("/")[1];
        String path = System.getProperty("user.dir") + "/../client/public/tmp";
        String filePath = path + "/" + name + "." + type;
        File desc = new File(filePath);

        try {
            if (user == null || (!desc.exists() && !desc.mkdirs())) {
                return new Response(400);
            } else {
                picture.setUser(user);
                picture.setName(name);
                picture.setPath(path);
                picture.setType(type);
                pictureRepository.save(picture);
                data.transferTo(desc);

                return new Response(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response deletePicture(String name) {
        String path = System.getProperty("user.dir") + "/../client/public/tmp";

        try {
            Picture picture = pictureRepository.findByName(name);
            String filePath = path + "/" + name + "." + picture.getType();
            File file = new File(filePath);

            if (file.exists()) file.delete();
            pictureRepository.deleteByName(name);

            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
