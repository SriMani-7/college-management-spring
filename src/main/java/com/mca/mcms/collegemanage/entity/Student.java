package com.mca.mcms.collegemanage.entity;

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
    private String address;
    private String city;
    @JoinColumn(name = "degree_code", foreignKey = @ForeignKey(name = "fk_student_degree_code"))
    @ManyToOne(cascade = CascadeType.ALL)
    private UgDegree ugdegree;
    private String email;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    private String mobile;
    private int pincode;
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_student_programme_code"))
    @ManyToOne(cascade = CascadeType.ALL)
    private UgProgramme ugProgramme;
    private String region;
    private String state;
    @Column(name = "xii_college")
    private String xiiCollege;
    @Column(name = "xii_college_location")
    private String xiiCollegeLocation;
    @Column(name = "xii_course")
    private String xiiCourse;
    @Column(name = "xii_hallticket")
    private String xiiHallticket;
    @Column(name = "xii_marks")
    private int xiiMarks;
    @Column(name = "xii_type")
    private String xiiType;
    @Column(name = "xii_year")
    private int xiiYear;
}
