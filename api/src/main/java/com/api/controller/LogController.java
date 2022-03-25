package com.api.controller;

import com.api.model.Log;
import com.api.service.LogService;
import com.api.wrapper.Response;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/log")
public class LogController {

    @Setter(onMethod = @__({@Autowired}))
    private LogService logService;

    @GetMapping
    public Response getLog(@RequestParam long id) {
        //  url:
        //      /api/log
        //  status:
        //      200: success
        //      400: failure
        //  obj:
        //      log list
        return logService.getLog(id);
    }

    @PostMapping
    public Response postLog(@RequestBody Log log) {
        //  url:
        //      /api/log
        //  status:
        //      200: success
        //      400: failure
        return logService.postLog(log);
    }

}
