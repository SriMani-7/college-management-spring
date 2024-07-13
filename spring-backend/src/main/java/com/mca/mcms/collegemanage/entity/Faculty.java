package com.mca.mcms.collegemanage.entity;

import com.mca.mcms.collegemanage.dto.FacultyDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "faculties")
@NoArgsConstructor
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    @Column(nullable = false)
    private String address;
    private long mobileNumber;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String designation;

    public Faculty(FacultyDto facultyDto) {
        name = facultyDto.getName();
        email = facultyDto.getEmail();
        address = facultyDto.getAddress();
        mobileNumber = facultyDto.getMobileNumber();
        gender = facultyDto.getGender();
        designation = facultyDto.getDesignation();
    }
}
