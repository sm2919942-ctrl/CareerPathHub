package com.careermartbackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "careers")
public class Career {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    private String type;
    private String duration;
    private String fees;

    @Column(length = 2000)
    private String description;

    private String eligibility;
}
