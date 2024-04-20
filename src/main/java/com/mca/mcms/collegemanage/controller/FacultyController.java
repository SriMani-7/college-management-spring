package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.Auth;
import com.mca.mcms.collegemanage.entity.Faculty;
import com.mca.mcms.collegemanage.entity.UserType;
import com.mca.mcms.collegemanage.repo.FacultyRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/api/faculty")
public class FacultyController {

    private final FacultyRepo facultyRepo;

    @Autowired
    public FacultyController(FacultyRepo facultyRepo) {
        this.facultyRepo = facultyRepo;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getFaculties() {
        return ResponseEntity.ok(facultyRepo.findAll());
    }

    @GetMapping
    public ResponseEntity<?> getFaculty(HttpSession httpSession) {
        if (Auth.hasLogin(UserType.FACULTY, httpSession)) {
            Object userName = httpSession.getAttribute(Auth.USERNAME_ATTR);
            if (userName != null) {
                String email = userName.toString();
                Optional<Faculty> byEmail = facultyRepo.findByContactDetails_Email(email);
                if (byEmail.isPresent()) return ResponseEntity.ok(byEmail.get());
                else return ResponseEntity.notFound().build();
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unknown user");
    }
}