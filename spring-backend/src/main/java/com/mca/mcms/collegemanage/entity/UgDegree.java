package com.mca.mcms.collegemanage.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "ug_degrees")
public class UgDegree {
    @Id
    private String code;
    @Column(unique = true)
    private String name;
    @OneToMany(mappedBy = "ugDegree", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<UgProgramme> ugProgrammes = new ArrayList<>();
}
