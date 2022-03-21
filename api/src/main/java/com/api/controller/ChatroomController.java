package com.api.controller;

import com.api.model.Response;
import com.api.service.ChatroomService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequestMapping("/api/chatroom")
public class ChatroomController {

    @Setter(onMethod = @__({@Autowired}))
    private ChatroomService chatroomService;

    @GetMapping
    public Response getChatroom(@RequestParam long id) {
        //  url:
        //      /api/chatroom
        //  status:
        //      200: success
        //      400: failure
        //  obj:
        //      chatroom list
        return chatroomService.getChatroom(id);
    }

}
