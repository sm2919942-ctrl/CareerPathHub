package com.careermartbackend.service;

import com.careermartbackend.entity.User;
import com.careermartbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }

        return userRepository.save(user);
    }

    public Optional<User> loginUser(
            String email,
            String password
    ) {

        return userRepository
                .findByEmail(email)
                .filter(user ->
                        user.getPassword().equals(password)
                );
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
