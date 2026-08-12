package com.careermartbackend.controller;

import com.careermartbackend.dto.LoginRequest;
import com.careermartbackend.entity.User;
import com.careermartbackend.service.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    // REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(
            @RequestBody User user
    ) {

        try {

            User savedUser =
                    userService.registerUser(user);

            return ResponseEntity.ok(savedUser);

        } catch (RuntimeException e) {

            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }


    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody LoginRequest request
    ) {

        Optional<User> user =
                userService.loginUser(
                        request.getEmail(),
                        request.getPassword()
                );

        if (user.isPresent()) {

            return ResponseEntity.ok(user.get());

        }

        return ResponseEntity
                .status(401)
                .body("Invalid email or password");
    }


    // GET ALL USERS
    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }
}
