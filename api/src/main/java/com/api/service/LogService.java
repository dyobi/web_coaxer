package com.api.service;

import com.api.model.Log;
import com.api.model.User;
import com.api.repository.LogRepository;
import com.api.repository.UserRepository;
import com.api.wrapper.Response;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LogService {

    @Setter(onMethod = @__({@Autowired}))
    private UserRepository userRepository;

    @Setter(onMethod = @__({@Autowired}))
    private LogRepository logRepository;

    public Response getLog(long id) {
        try {
            User user = userRepository.findById(id).orElse(null);

            if (user == null) {
                return new Response(400);
            } else {
                ArrayList<Log> logs = logRepository.findAllByUserOrderByLogDateDesc(user);

                return new Response(200, logs);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

    public Response postLog(Log value) {
        try {
            User user = userRepository.findById(value.getId()).orElse(null);

            if (user == null) {
                return new Response(400);
            } else {
                Log log = new Log();
                log.setUser(user);
                log.setDeviceType(value.getDeviceType());
                log.setInfo(value.getInfo());
                logRepository.save(log);

                return new Response(200);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new Response(400);
        }
    }

}
