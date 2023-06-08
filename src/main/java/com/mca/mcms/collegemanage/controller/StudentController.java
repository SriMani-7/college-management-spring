package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.entity.Student;
import com.mca.mcms.collegemanage.entity.UserType;
import com.mca.mcms.collegemanage.repo.StudentRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    private final StudentRepo studentRepo;

    @Autowired
    public StudentController(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getStudents() {
        return ResponseEntity.ok(studentRepo.findAll());
    }

    @GetMapping
    public ResponseEntity<?> getStudent(HttpSession httpSession) {
        Object userType = httpSession.getAttribute(MainController.USERTYPE_ATTR);
//        System.out.println(userType);
        if (userType != null && userType.equals(UserType.STUDENT)) {
            Object userName = httpSession.getAttribute(MainController.USERNAME_ATTR);
//            System.out.println(userName);
            if (userName != null) {
                long id = Long.parseLong(userName.toString());
                Optional<Student> byId = studentRepo.findById(id);
                if (byId.isPresent()) return ResponseEntity.ok(byId.get());
                else return ResponseEntity.notFound().build();
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unknown user");
    }
}