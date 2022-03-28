package com.api.service;

import com.api.model.Chatroom;
import com.api.wrapper.Response;
import com.api.model.User;
import com.api.repository.ChatroomRepository;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ChatroomService {

    @Setter(onMethod = @__({@Autowired}))
    private MessageService messageService;

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private ChatroomRepository chatroomRepository;

    public Response getChatroom(long id) {
        try {
            User user = userRepository.findById(id).orElse(null);

            if (user == null) {
                return new Response(400);
            } else {
                ArrayList<Chatroom> res = chatroomRepository.findAllByUserId(id);

                for (Chatroom room : res) {
                    room.setMessages(null);
                    room.setMessages(messageService.getMessage(room.getId(), id));
                }
                return new Response(200, res);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
