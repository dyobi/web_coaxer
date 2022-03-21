package com.api.service;

import com.api.model.Chatroom;
import com.api.model.Message;
import com.api.model.Response;
import com.api.model.User;
import com.api.repository.ChatroomRepository;
import com.api.repository.MessageRepository;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private ChatroomRepository chatroomRepository;

    @Setter(onMethod = @__({@Autowired}))
    private MessageRepository messageRepository;

    public Response postMessage(long chat_id, long user_id, String content) {
        try {
            Chatroom chatroom = chatroomRepository.findById(chat_id).orElse(null);
            User user =  userRepository.findById(user_id).orElse(null);

            if (chatroom == null || user == null) {
                return new Response(400);
            } else {
                Message message = new Message();

                message.setRoom(chatroom);
                message.setSender(user);
                message.setContent(content);
                messageRepository.save(message);

                return new Response(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }
}
