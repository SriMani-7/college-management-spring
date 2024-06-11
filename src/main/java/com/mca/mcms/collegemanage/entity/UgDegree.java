package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "ug_degrees")
public class UgDegree {
    @Id
    private String code;
    @Column(unique = true)
    private String name;
    @OneToMany(mappedBy = "ugDegree", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<UgProgramme> ugProgrammes = new ArrayList<>();
}
