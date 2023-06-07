package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.RestUtils;
import com.mca.mcms.collegemanage.dto.CourseDto;
import com.mca.mcms.collegemanage.dto.FacultyDto;
import com.mca.mcms.collegemanage.dto.StudentDto;
import com.mca.mcms.collegemanage.dto.SubjectDto;
import com.mca.mcms.collegemanage.entity.*;
import com.mca.mcms.collegemanage.repo.*;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CoursesRepo coursesRepo;
    private final SubjectRepo subjectRepo;
    private final FacultyRepo facultyRepo;
    private final StudentRepo studentsRepo;
    private final ContactDetailsRepo contactDetailsRepo;
    private final UserRepo userRepo;

    public CourseController(CoursesRepo coursesRepo, SubjectRepo subjectRepo, FacultyRepo facultyRepo, StudentRepo studentsRepo, ContactDetailsRepo contactDetailsRepo, UserRepo userRepo) {
        this.coursesRepo = coursesRepo;
        this.subjectRepo = subjectRepo;
        this.facultyRepo = facultyRepo;
        this.studentsRepo = studentsRepo;
        this.contactDetailsRepo = contactDetailsRepo;
        this.userRepo = userRepo;
    }

    @GetMapping
    public ResponseEntity<List<Course>> getCourses() {
        return ResponseEntity.ok(coursesRepo.findAll());
    }

    @PostMapping
    public ResponseEntity<Object> newCourse(@RequestBody @Valid CourseDto courseDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) RestUtils.bindingErrors(bindingResult);
        else if (coursesRepo.existsByShortName(courseDto.getShortName())) {
            bindingResult.addError(new FieldError("courseDto", "shortName", "Course already existed"));
            return ResponseEntity.internalServerError().body("The course already existed");
        }
        Course save = coursesRepo.save(courseDto.getCourse());
        return ResponseEntity.ok(save);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<Object> course(@PathVariable Long courseId) {
        if (coursesRepo.existsById(courseId)) {
            return ResponseEntity.ok(coursesRepo.findById(courseId));
        } else return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<Object> deleteCourse(@PathVariable Long courseId) {
        if (coursesRepo.existsById(courseId)) {
            Course course = coursesRepo.findById(courseId).orElseThrow();
            coursesRepo.deleteById(courseId);
            return ResponseEntity.ok(course);
        } else return ResponseEntity.notFound().build();
    }

    @GetMapping("/{courseId}/subjects")
    public ResponseEntity<Object> subjects(@PathVariable Long courseId) {
        if (coursesRepo.existsById(courseId)) {
            return ResponseEntity.ok(subjectRepo.findByCourse_Id(courseId));
        } else return ResponseEntity.notFound().build();
    }

    @PostMapping("/{courseId}/subjects")
    public ResponseEntity<Object> addSubject(
            @PathVariable Long courseId,
            @RequestBody @Valid SubjectDto subjectDto,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }
        if (coursesRepo.existsById(courseId)) {
            Subject subject = subjectDto.getSubject();
            if (!subjectRepo.existsById(subject.getSubjectId())) {
                subject.setCourse(coursesRepo.findById(courseId).orElseThrow());
                System.out.println(subject.getSubjectId()+" "+subject.getName());
                subjectRepo.save(subject);
                return ResponseEntity.ok(subject);
            } else return ResponseEntity.badRequest().body("Subject " + subject.getSubjectId() + " already existed");
        } else return ResponseEntity.notFound().build();
    }

    @GetMapping("/{courseId}/faculty")
    public ResponseEntity<Object> faculties(@PathVariable Long courseId) {
        var facu = facultyRepo.findByCourse_Id(courseId);
        return ResponseEntity.ok(facu);
    }

    @PostMapping("/{courseId}/faculty")
    public ResponseEntity<?> faculties(@PathVariable Long courseId, @RequestBody @Valid FacultyDto facultyDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) return RestUtils.bindingErrors(bindingResult);
        if (coursesRepo.existsById(courseId)) {
            Faculty faculty = new Faculty();
            ContactDetails contactDetails = new ContactDetails();
            BeanUtils.copyProperties(facultyDto, contactDetails);
            BeanUtils.copyProperties(facultyDto, faculty);
            contactDetailsRepo.save(contactDetails);
            faculty.setJoiningDate(LocalDate.now());
            faculty.setContactDetails(contactDetails);
            Optional<Course> byId = coursesRepo.findById(courseId);
            faculty.setCourse(byId.orElseThrow());
            try {
                facultyRepo.save(faculty);
                User user = new User(UserType.FACULTY);
                user.setUserName(faculty.getContactDetails().getEmail());
                userRepo.save(user);
            } catch (Exception ex) {
                contactDetailsRepo.delete(contactDetails);
            }
            return ResponseEntity.ok(faculty);
        } else return ResponseEntity.notFound().build();
    }

    @GetMapping("/{courseId}/students")
    public ResponseEntity<?> getStudents(@PathVariable Long courseId) {
        return ResponseEntity.ok(studentsRepo.findByCourse_Id(courseId));
    }

    @PostMapping("/{courseId}/students")
    public ResponseEntity<?> getStudents(@RequestBody @Valid StudentDto studentDto, BindingResult bindingResult, @PathVariable Long courseId) {
        if (bindingResult.hasErrors()) RestUtils.bindingErrors(bindingResult);
        if (coursesRepo.existsById(courseId) && !studentsRepo.existsById(studentDto.getAdmissionNumber())) {
            Student student = new Student();
            ContactDetails contactDetails = new ContactDetails();
            BeanUtils.copyProperties(studentDto, contactDetails);
            BeanUtils.copyProperties(studentDto, student);
            contactDetailsRepo.save(contactDetails);
            student.setJoiningDate(LocalDate.now());
            student.setContactDetails(contactDetails);
            student.setAcademicYear(1);
            Optional<Course> byId = coursesRepo.findById(courseId);
            student.setCourse(byId.orElseThrow());
            try {
                studentsRepo.save(student);
                User user = new User(UserType.STUDENT);
                user.setUserName(Long.toString(student.getAdmissionNumber()));
                userRepo.save(user);
            } catch (Exception ex) {
                contactDetailsRepo.delete(contactDetails);
            }
            return ResponseEntity.ok("Saved");
        } else return ResponseEntity.notFound().build();
    }
}