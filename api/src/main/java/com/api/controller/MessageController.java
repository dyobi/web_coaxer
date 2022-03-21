package com.api.controller;

import com.api.model.Response;
import com.api.service.MessageService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequestMapping("/api/message")
public class MessageController {

    @Setter(onMethod = @__({@Autowired}))
    private MessageService messageService;

    @PostMapping
    public Response postMessage(
            @RequestParam("chatroom_id") long chatroom_id,
            @RequestParam("user_id") long user_id,
            @RequestParam("content") String content
            ) {
        return messageService.postMessage(chatroom_id, user_id, content);
    }
}
