package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "ug_programmes")
public class UgProgramme {
    @Id
    private String code;
    private String name;
    @JoinColumn(name = "degree_code", referencedColumnName = "code", nullable = false, foreignKey = @ForeignKey(name = "fk_programme_degree_code"))
    @ManyToOne(cascade = CascadeType.ALL)
    private UgDegree ugDegree;
    @JoinTable(
            name = "ug_programme_core_departments",
            foreignKey = @ForeignKey(name = "fk_programme_core_department_code"),
            inverseForeignKey = @ForeignKey(name = "fk_department_programme")
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Department> coreDepartments;
}
