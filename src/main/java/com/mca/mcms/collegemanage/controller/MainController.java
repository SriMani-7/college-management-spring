package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.RestUtils;
import com.mca.mcms.collegemanage.dto.ForgetPassword;
import com.mca.mcms.collegemanage.dto.UserDto;
import com.mca.mcms.collegemanage.entity.User;
import com.mca.mcms.collegemanage.repo.FacultyRepo;
import com.mca.mcms.collegemanage.repo.StudentRepo;
import com.mca.mcms.collegemanage.repo.UserRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api")
public class MainController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private FacultyRepo facultyRepo;

    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<?> login(@RequestBody @Valid UserDto userDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) RestUtils.bindingErrors(bindingResult);
        switch (userDto.getUserType()) {
            case ADMIN -> {
                if (userDto.getPassword().equals("1234567890")) {
                    return message(OK, "Login as admin");
                } else return message(UNAUTHORIZED, "Invalid password");
            }
            case STUDENT, FACULTY -> {
                if (userRepo.existsByUserNameAndPassword(userDto.getUserName(), userDto.getPassword())) {
                    return message(OK, "Login as " + userDto.getUserType().toString().toLowerCase());
                } else if (userRepo.existsById(userDto.getUserName())) {
                    return message(HttpStatus.UNAUTHORIZED, "Invalid password");
                } else return message(UNAUTHORIZED, "Invalid username");
            }
        }
        return message(CONFLICT, "Unknown authority");
    }

    private ResponseEntity<Map<String, String>> message(HttpStatusCode status, String message) {
        return ResponseEntity.status(status).body(Map.of("message", message));
    }

    @PostMapping("/reset")
    public ResponseEntity<?> resetPassword(@RequestBody @Valid ForgetPassword forgetPassword, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) return RestUtils.bindingErrors(bindingResult);
        if (userRepo.existsById(forgetPassword.getUserName())) {
            Optional<User> byId = userRepo.findById(forgetPassword.getUserName());
            if (byId.isPresent()) {
                User user = byId.get();
                if (forgetPassword.getPassword() != null && forgetPassword.isPasswordMatch()) {
                    switch (user.getUserType()) {
                        case STUDENT -> {
                            if (!studentRepo.existsByAdmissionNumberAndDob(Long.parseLong(forgetPassword.getUserName()), forgetPassword.getDob())) {
                                bindingResult.addError(new FieldError("forgetPassword", "userName", "invalid credentials"));
                                return RestUtils.bindingErrors(bindingResult);
                            }
                        }
                        case FACULTY -> {
                            if (!facultyRepo.existsByContactDetails_EmailAndDob(forgetPassword.getUserName(), forgetPassword.getDob())) {
                                bindingResult.addError(new FieldError("forgetPassword", "userName", "invalid credentials"));
                                return RestUtils.bindingErrors(bindingResult);
                            }
                        }
                    }
                    user.setPassword(forgetPassword.getConfirmPassword());
                    userRepo.save(user);
                    return ResponseEntity.ok("Password changed successfully");
                } else bindingResult.addError(new FieldError("forgetPassword", "confirmPassword", "Password did not match"));
            } else bindingResult.addError(new FieldError("forgetPassword", "userName", "invalid credentials"));
        } else bindingResult.addError(new FieldError("forgetPassword", "userName", "invalid credentials"));
        return RestUtils.bindingErrors(bindingResult);
    }
}