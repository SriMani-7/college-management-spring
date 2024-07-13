package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.dto.StudentDto;
import com.mca.mcms.collegemanage.entity.Student;
import com.mca.mcms.collegemanage.repo.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/admissions")
public class AdmissionController {

    private final StudentRepository studentRepository;

    @Autowired
    public AdmissionController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping
    public ResponseEntity<?> addStudent(@RequestBody StudentDto studentDto) {
        var student = new Student(studentDto.getAdmissionNumber(), studentDto.getEmail(), studentDto.getFirstName(), studentDto.getLastName());
        var dStudent = studentRepository.save(student);
        return ResponseEntity.ofNullable(dStudent);
    }
}
