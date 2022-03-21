package com.api.controller;

import com.api.model.Message;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StompController {

    @MessageMapping("/{roomId}") @SendTo("/room/{roomId}")
    public void sendMessage(
            @DestinationVariable long roomId,
//            @JsonProperty("sender") long senderId,
//            @JsonProperty("content") String content
            Message message
    ) {
        System.out.println("roomId : " + roomId);
        System.out.println("senderId : " + message.getSender());
        System.out.println("content : " + message.getContent());
    }

}
