package com.api.service;

import com.api.model.Hookup;
import com.api.model.Response;
import com.api.model.User;
import com.api.repository.HookupRepository;
import com.api.repository.UserRepository;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HookupService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private HookupRepository hookupRepository;

    public Response postHookup(long from, long to) {
        try {
            User from_user = userRepository.findById(from).orElse(null);
            User to_user = userRepository.findById(to).orElse(null);

            if (from_user == null || to_user == null) {
                return new Response(400);
            } else {
                Hookup hookup = new Hookup();
                hookup.setFrom(from_user);
                hookup.setTo(to_user);
                hookupRepository.save(hookup);

                return new Response(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
