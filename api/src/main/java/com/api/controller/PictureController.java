package com.api.controller;

import com.api.wrapper.Response;
import com.api.service.PictureService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController @RequestMapping("/api/picture")
public class PictureController {

    @Setter(onMethod = @__({@Autowired}))
    private PictureService pictureService;

    @GetMapping
    public Response getPicture(@RequestParam long id) {
        //  url:
        //      /api/picture
        //  status:
        //      200: success
        //      400: failure
        //  obj:
        //      picture array
        return pictureService.getPicture(id);
    }

    @PostMapping
    public Response postPicture(@RequestParam("id") long id, @RequestParam("picture") MultipartFile picture) {
        //  url:
        //      /api/picture
        //  status:
        //      200: success
        //      400: failure
        return pictureService.postPicture(id, picture);
    }

    @DeleteMapping
    public Response deletePicture(@RequestParam String name) {
        //  url:
        //      /api/picture
        //  status:
        //      200: success
        //      400: failure
        return pictureService.deletePicture(name);
    }

}
