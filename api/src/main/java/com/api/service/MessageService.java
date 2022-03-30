package com.api.service;

import com.api.model.Chatroom;
import com.api.model.Message;
import com.api.model.User;
import com.api.repository.ChatroomRepository;
import com.api.repository.MessageRepository;
import com.api.repository.UserRepository;
import com.api.wrapper.Response;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MessageService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private ChatroomRepository chatroomRepository;

    @Setter(onMethod = @__({@Autowired}))
    private MessageRepository messageRepository;

    public ArrayList<Message> getMessage(long chat_id, long visible_id) {
        try {
            return messageRepository.findByVisible(chat_id, visible_id);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public void postMessage(long chat_id, long user_id, String content) {
        Chatroom chatroom = chatroomRepository.findById(chat_id).orElse(null);
        User user = userRepository.findById(user_id).orElse(null);

        if (chatroom != null && user != null) {
            Message message1 = new Message();
            Message message2 = new Message();

            message1.setRoom(chatroom);
            message1.setSender(user);
            message1.setContent(content);
            message1.setVisible(chatroom.getUser1());
            messageRepository.save(message1);

            message2.setRoom(chatroom);
            message2.setSender(user);
            message2.setContent(content);
            message2.setVisible(chatroom.getUser2());
            messageRepository.save(message2);
        }
    }

    public Response deleteMesssage(long user_id, long chat_id) {
        try {
            User visible = userRepository.findById(user_id).orElse(null);
            Chatroom room = chatroomRepository.findById(chat_id).orElse(null);

            messageRepository.deleteAllByRoomAndVisible(room, visible);
            return new Response(200);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }
}
