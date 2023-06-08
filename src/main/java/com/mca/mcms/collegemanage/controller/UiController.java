package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.Auth;
import com.mca.mcms.collegemanage.entity.UserType;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UiController {

    @GetMapping("admin")
    public String adminDashboard(HttpSession httpSession) {
        return Auth.hasLogin(UserType.ADMIN, httpSession) ? "admin/dashboard.html" : "error/403.html";
    }

    @GetMapping("admin-courses")
    public String adminCourses(HttpSession httpSession) {
        return Auth.hasLogin(UserType.ADMIN, httpSession) ? "admin/courses.html" : "error/403.html";
    }


    @GetMapping("student")
    public String studentDashboard(HttpSession httpSession) {
        return Auth.hasLogin(UserType.STUDENT, httpSession) ? "student/dashboard.html" : "error/403.html";
    }

    @GetMapping("faculty")
    public String facultyDashboard(HttpSession httpSession) {
        return Auth.hasLogin(UserType.FACULTY, httpSession) ? "faculty/dashboard.html" : "error/403.html";
    }

    @GetMapping("faculty-register")
    public String facultyRegister(HttpSession httpSession) {
        return Auth.hasLogin(UserType.ADMIN, httpSession) ? "admin/faculty-register.html" : "error/403.html";
    }

    @GetMapping("student-register")
    public String studentRegister(HttpSession httpSession) {
        return Auth.hasLogin(UserType.ADMIN, httpSession) ? "admin/student-register.html" : "error/403.html";
    }

}
