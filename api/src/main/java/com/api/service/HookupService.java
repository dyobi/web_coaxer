package com.api.service;

import com.api.model.Chatroom;
import com.api.model.Hookup;
import com.api.wrapper.Overview;
import com.api.wrapper.Response;
import com.api.model.User;
import com.api.repository.ChatroomRepository;
import com.api.repository.HookupRepository;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class HookupService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private HookupRepository hookupRepository;

    @Setter(onMethod = @__({@Autowired}))
    private ChatroomRepository chatroomRepository;

    public Response getHookupOverview(long id) {
        try {
            ArrayList<User> fromMe = userRepository.getHookupFromMe(id);
            ArrayList<User> fromOther = userRepository.getHookupFromOther(id);
            ArrayList<User> matched = userRepository.getHookupMatched(id);

            Overview overview = new Overview(fromMe, fromOther, matched);

            return new Response(200, overview);
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response postHookup(long from, long to) {
        try {
            User from_user = userRepository.findById(from).orElse(null);
            User to_user = userRepository.findById(to).orElse(null);
            Hookup hookup = new Hookup();
            hookup.setFrom(from_user);
            hookup.setTo(to_user);

            if (from_user == null || to_user == null || from == to ||
                    hookupRepository.existsByFromAndTo(from_user, to_user)) {
                return new Response(400);
            } else {
                hookupRepository.save(hookup);

                if (!chatroomRepository.existsByUsers(from, to) &&
                        hookupRepository.existsByUsers(from, to)) {

                    Chatroom chatroom = new Chatroom();
                    chatroom.setUser1(from_user);
                    chatroom.setUser2(to_user);
                    chatroomRepository.save(chatroom);
                }

                return new Response(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
