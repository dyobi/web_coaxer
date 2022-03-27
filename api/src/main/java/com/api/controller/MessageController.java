package com.api.controller;

import com.api.wrapper.Stomp;
import com.api.service.MessageService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @Setter(onMethod = @__({@Autowired}))
    private MessageService messageService;

    @Setter(onMethod = @__({@Autowired}))
    private SimpMessagingTemplate smt;

    @MessageMapping("/msg")
    public void sendMessage(Stomp stomp) {
        messageService.postMessage(stomp.getRoomId(), stomp.getSender(), stomp.getContent());
        smt.convertAndSend("/room/" + stomp.getRoomId(), stomp);
    }

}
