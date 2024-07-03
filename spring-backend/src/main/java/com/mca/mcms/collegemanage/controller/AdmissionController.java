package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.dto.StudentDto;
import com.mca.mcms.collegemanage.entity.Student;
import com.mca.mcms.collegemanage.repo.StudentRepository;
import com.mca.mcms.collegemanage.repo.UgProgrammeRepository;
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
    private final UgProgrammeRepository programmeRepository;

    @Autowired
    public AdmissionController(StudentRepository studentRepository, UgProgrammeRepository programmeRepository) {
        this.studentRepository = studentRepository;
        this.programmeRepository = programmeRepository;
    }

    @PostMapping
    public ResponseEntity<?> addStudent(@RequestBody StudentDto studentDto) {
        var student = new Student(studentDto.getAdmissionNumber(), studentDto.getAcademicYear(), studentDto.getEmail(), studentDto.getFirstName(), studentDto.getLastName(), studentDto.getRegion());
        student.setEducationXii(studentDto.getEducation());
        student.setAddress(studentDto.getStudentAddress());
        var programme = programmeRepository.findById(studentDto.getProgramme());
        student.setUgProgramme(programme.orElseThrow());
        var dStudent = studentRepository.save(student);
        return ResponseEntity.ofNullable(dStudent);
    }
}
