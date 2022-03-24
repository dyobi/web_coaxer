package com.api.controller;

import com.api.wrapper.Response;
import com.api.service.HookupService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController @RequestMapping("/api/hookup")
public class HookupController {

    @Setter(onMethod = @__({@Autowired}))
    private HookupService hookupService;

    @GetMapping
    public Response getHookupOverview(@RequestParam long id) {
        //  url:
        //      /api/hookup
        //  status:
        //      200: success
        //      400: failure
        //  obj:
        //      fromMe, fromOther, matched
        return hookupService.getHookupOverview(id);
    }

    @PostMapping
    public Response postHookup(@RequestParam("from") long from, @RequestParam("to") long to) {
        //  url:
        //      /api/hookup
        //  status:
        //      200: success
        //      400: failure
        return hookupService.postHookup(from, to);
    }

}
