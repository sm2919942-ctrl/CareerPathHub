package com.careermartbackend.controller;

import com.careermartbackend.entity.SavedCareer;
import com.careermartbackend.repository.SavedCareerRepository;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/saved")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class SavedCareerController {

    private final SavedCareerRepository repository;

    public SavedCareerController(
            SavedCareerRepository repository
    ) {
        this.repository = repository;
    }

    @PostMapping
    public SavedCareer saveCareer(
            @RequestBody SavedCareer savedCareer
    ) {

        boolean alreadySaved =
                repository.existsByUserIdAndCareerId(
                        savedCareer.getUserId(),
                        savedCareer.getCareerId()
                );

        if (alreadySaved) {
            return savedCareer;
        }

        return repository.save(savedCareer);
    }

    @GetMapping("/{userId}")
    public List<SavedCareer> getSavedCareers(
            @PathVariable Long userId
    ) {
        return repository.findByUserId(userId);
    }

    @Transactional
    @DeleteMapping("/{userId}/{careerId}")
    public String removeCareer(
            @PathVariable Long userId,
            @PathVariable Long careerId
    ) {

        repository.deleteByUserIdAndCareerId(
                userId,
                careerId
        );

        return "Career removed";
    }
}
