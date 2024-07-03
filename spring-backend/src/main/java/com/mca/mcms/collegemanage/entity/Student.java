package com.mca.mcms.collegemanage.entity;

import com.mca.mcms.collegemanage.entity.embed.EducationXii;
import com.mca.mcms.collegemanage.entity.embed.StudentAddress;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "students")
@NoArgsConstructor
public class Student {
    @Id
    @Column(name = "admission_number")
    private long admissionNumber;
    @Column(name = "academic_year")
    private String academicYear;
    @Column(unique = true)
    private String email;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_student_programme_code"))
    @ManyToOne(cascade = CascadeType.ALL)
    private UgProgramme ugProgramme;
    private String region;
    @Embedded
    private EducationXii educationXii;
    @Embedded
    private StudentAddress address;

}
