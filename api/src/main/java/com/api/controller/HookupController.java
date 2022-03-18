package com.api.controller;

import com.api.model.Response;
import com.api.service.HookupService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/hookup")
public class HookupController {

    @Setter(onMethod = @__({@Autowired}))
    private HookupService hookupService;

    @PostMapping
    public Response postHookup(@RequestParam("from") long from, @RequestParam("to") long to) {
        //  url:
        //      /api/hookup
        //  status:
        //      200: success
        //      400: failure
        return hookupService.postHookup(from, to);
    }

    @GetMapping
    public Response getHookupByFrom(@RequestParam long from) {
        return hookupService.getHookupByFrom(from);
    }

}
