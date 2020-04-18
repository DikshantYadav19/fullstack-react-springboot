package com.todo.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {
    @GetMapping(path = "/basic-auth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("You are authenticated");
    }
}
