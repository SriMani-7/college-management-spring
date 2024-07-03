package com.mca.mcms.collegemanage.dto;

import com.mca.mcms.collegemanage.entity.embed.EducationXii;
import com.mca.mcms.collegemanage.entity.embed.StudentAddress;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.BeanUtils;

@Getter
@Setter
@ToString
public class StudentDto {
    private long admissionNumber;
    private String academicYear;
    private String address;
    private String city;
    private String email;
    private String firstName;
    private String lastName;
    private String mobile;
    private String programme;
    private String region;
    private String state;
    private int pincode;
    private long xiiHallticket;
    private String xiiCollege;
    private String xiiCollegeLocation;
    private String xiiCourse;
    private int xiiMarks;
    private String xiiType;
    private int xiiYear;

    public EducationXii getEducation() {
        var xii = new EducationXii();
        BeanUtils.copyProperties(this, xii);
        return xii;
    }

    public StudentAddress getStudentAddress() {
        var address = new StudentAddress();
        BeanUtils.copyProperties(this, address);
        return address;
    }
}
