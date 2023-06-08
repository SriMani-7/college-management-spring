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
@Table(name = "faculty")
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JoinColumn(referencedColumnName = "id")
    @OneToOne(cascade = CascadeType.ALL)
    private ContactDetails contactDetails;
    private String firstName;
    private String lastName;
    @JoinColumn(referencedColumnName = "id", nullable = false, foreignKey = @ForeignKey(name = "fk_facultyCourse"))
    @ManyToOne
    private Course course;
    @JoinColumn(referencedColumnName = "subjectId")
    @ManyToOne
    private Subject subject;
    private LocalDate joiningDate;
    private FacultyType facultyType;
    private LocalDate dob;

    public String getName() {
        return firstName+" "+lastName;
    }
}