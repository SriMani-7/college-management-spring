package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "students")
public class Student {
    @Id
    private long admissionNumber;
    @JoinColumn(referencedColumnName = "id")
    @Embedded
    ContactDetails contactDetails;
    private String firstName;
    private String lastName;
    @Column(nullable = false)
    private Integer semester = 1;
    @JoinColumn(referencedColumnName = "id", nullable = false, foreignKey = @ForeignKey(name = "fk_studentCourse"))
    @ManyToOne
    private Course course;
    private long rollNumber;
    private LocalDate completionDate;
    private LocalDate joiningDate;
    private LocalDate dob;
}