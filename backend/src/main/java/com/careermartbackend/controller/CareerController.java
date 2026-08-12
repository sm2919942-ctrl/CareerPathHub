package com.careermartbackend.controller;

import com.careermartbackend.entity.Career;
import com.careermartbackend.repository.CareerRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class CareerController {

    private final CareerRepository repository;

    public CareerController(
            CareerRepository repository
    ) {
        this.repository = repository;
    }

    // GET ALL
    @GetMapping
    public List<Career> getAllCareers() {
        return repository.findAll();
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Career> getCareer(
            @PathVariable Long id
    ) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // GET BY CATEGORY
    @GetMapping("/category/{category}")
    public List<Career> getByCategory(
            @PathVariable String category
    ) {
        return repository.findByCategory(category);
    }

    // ADD
    @PostMapping
    public Career addCareer(
            @RequestBody Career career
    ) {
        return repository.save(career);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Career> updateCareer(
            @PathVariable Long id,
            @RequestBody Career newCareer
    ) {

        return repository.findById(id)
                .map(career -> {

                    career.setTitle(
                            newCareer.getTitle()
                    );

                    career.setCategory(
                            newCareer.getCategory()
                    );

                    career.setType(
                            newCareer.getType()
                    );

                    career.setDuration(
                            newCareer.getDuration()
                    );

                    career.setFees(
                            newCareer.getFees()
                    );

                    career.setDescription(
                            newCareer.getDescription()
                    );

                    career.setEligibility(
                            newCareer.getEligibility()
                    );

                    return ResponseEntity.ok(
                            repository.save(career)
                    );

                })
                .orElse(
                        ResponseEntity.notFound().build()
                );
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCareer(
            @PathVariable Long id
    ) {

        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
