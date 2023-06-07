package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.repo.FacultyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/faculty")
public class FacultyController {

    private final FacultyRepo facultyRepo;

    @Autowired
    public FacultyController(FacultyRepo facultyRepo) {
        this.facultyRepo = facultyRepo;
    }

    @GetMapping
    public ResponseEntity<?> getFaculties() {
        return ResponseEntity.ok(facultyRepo.findAll());
    }
}
