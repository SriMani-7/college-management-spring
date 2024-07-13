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

    public Student(long admissionNumber, String email, String firstName, String lastName) {
        this.admissionNumber = admissionNumber;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Column(unique = true)
    private String email;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;

}
