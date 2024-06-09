package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "departments")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;
    @Column(unique = true)
    private String name;
    @Column(nullable = false)
    private String vision;
}
