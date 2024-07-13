package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.dto.CourseDto;
import com.mca.mcms.collegemanage.entity.Course;
import com.mca.mcms.collegemanage.repo.CourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/courses")
public class CourseController {
    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody CourseDto dto) {
        var course = new Course();
        course.setName(dto.getName());
        course.setDescription(dto.getDescription());
        var sCourse = courseRepository.save(course);
        return ResponseEntity.ofNullable(sCourse);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.ofNullable(courseRepository.findAll());
    }
}
