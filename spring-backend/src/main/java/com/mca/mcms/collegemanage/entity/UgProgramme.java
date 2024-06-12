package com.mca.mcms.collegemanage.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "ug_programmes")
@NoArgsConstructor
@Getter
@Setter
public class UgProgramme {
    @Id
    private String code;
    private String name;
    @JoinColumn(name = "degree_code", referencedColumnName = "code", nullable = false, foreignKey = @ForeignKey(name = "fk_programme_degree_code"))
    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JsonBackReference
    private UgDegree ugDegree;
    @JoinTable(
            name = "ug_programme_core_departments",
            foreignKey = @ForeignKey(name = "fk_programme_core_department_code"),
            inverseForeignKey = @ForeignKey(name = "fk_department_programme")
    )
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Department> coreDepartments;

    public UgProgramme(String code, String name) {
        this.code = code;
        this.name = name;
    }
}
