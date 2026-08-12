package com.careermartbackend.repository;

import com.careermartbackend.entity.SavedCareer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SavedCareerRepository
        extends JpaRepository<SavedCareer, Long> {

    List<SavedCareer> findByUserId(Long userId);

    boolean existsByUserIdAndCareerId(
            Long userId,
            Long careerId
    );

    void deleteByUserIdAndCareerId(
            Long userId,
            Long careerId
    );
}
