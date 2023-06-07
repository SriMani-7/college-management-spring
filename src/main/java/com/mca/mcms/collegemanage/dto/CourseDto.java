package com.mca.mcms.collegemanage.dto;

import com.mca.mcms.collegemanage.entity.Course;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CourseDto {
    @NotBlank
    private String name;
    @Size(min = 20, max = 250)
    private String description;
    @NotBlank
    private String shortName;

    public Course getCourse() {
        Course course = new Course();
        course.setName(name);
        course.setShortName(shortName);
        course.setDescription(description);
        return course;
    }
}
