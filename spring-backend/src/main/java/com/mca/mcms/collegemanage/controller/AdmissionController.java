package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.dto.StudentDto;
import com.mca.mcms.collegemanage.entity.Student;
import com.mca.mcms.collegemanage.repo.CourseRepository;
import com.mca.mcms.collegemanage.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/admissions")
public class AdmissionController {

    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    @Autowired
    public AdmissionController(StudentRepository studentRepository, CourseRepository courseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }

    @PostMapping("/{cid}")
    public ResponseEntity<?> addStudent(@PathVariable("cid") Long courseId, @RequestBody StudentDto studentDto) {
        var student = new Student(studentDto.getAdmissionNumber(), studentDto.getEmail(), studentDto.getFirstName(), studentDto.getLastName());
        var course = courseRepository.findById(courseId).orElseThrow();
        student.setCourse(course);
        var dStudent = studentRepository.save(student);
        return ResponseEntity.ofNullable(dStudent);
    }
}
