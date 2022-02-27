package com.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController @RequestMapping("/")
public class Temp {

    @GetMapping("/api")
    public void home() {
        System.out.println("HELLO");
    };

}
