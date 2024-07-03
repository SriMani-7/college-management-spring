package com.mca.mcms.collegemanage.entity.embed;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class EducationXii {
    @Column(name = "xii_hallticket", unique = true)
    private long xiiHallticket;
    @Column(name = "xii_college")
    private String xiiCollege;
    @Column(name = "xii_college_location")
    private String xiiCollegeLocation;
    @Column(name = "xii_course")
    private String xiiCourse;
    @Column(name = "xii_marks")
    private int xiiMarks;
    @Column(name = "xii_type")
    private String xiiType;
    @Column(name = "xii_year")
    private int xiiYear;
}
