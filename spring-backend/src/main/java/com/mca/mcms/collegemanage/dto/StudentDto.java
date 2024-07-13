package com.mca.mcms.collegemanage.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StudentDto {
    private long admissionNumber;
    private String address;
    private String city;
    private String email;
    private String firstName;
    private String lastName;
    private String mobile;
    private String state;
    private int pincode;
    private long course;
}
