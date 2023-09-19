package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.RestUtils;
import com.mca.mcms.collegemanage.dto.CourseDto;
import com.mca.mcms.collegemanage.dto.FacultyDto;
import com.mca.mcms.collegemanage.dto.StudentDto;
import com.mca.mcms.collegemanage.dto.SubjectDto;
import com.mca.mcms.collegemanage.entity.*;
import com.mca.mcms.collegemanage.fee.*;
import com.mca.mcms.collegemanage.repo.*;
import jakarta.validation.Valid;
import org.hibernate.InvalidMappingException;
import org.hibernate.boot.jaxb.Origin;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
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
    private final UserRepo userRepo;
    private final CourseFeeRepo courseFeeRepo;
    private final StudentFeeRepo studentRepo;

    @Autowired
    public CourseController(CoursesRepo coursesRepo, SubjectRepo subjectRepo, FacultyRepo facultyRepo, StudentRepo studentsRepo, UserRepo userRepo, CourseFeeRepo courseFeeRepo, StudentFeeRepo studentRepo) {
        this.coursesRepo = coursesRepo;
        this.subjectRepo = subjectRepo;
        this.facultyRepo = facultyRepo;
        this.studentsRepo = studentsRepo;
        this.userRepo = userRepo;
        this.courseFeeRepo = courseFeeRepo;
        this.studentRepo = studentRepo;
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
        CourseFee courseFee = new CourseFee();
        courseFee.setCourse(save);
        courseFee.setPrice(courseFee.getPrice());
        courseFee.setAcademicYear(courseDto.getAcademicYear());
        courseFeeRepo.save(courseFee);
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
            if (!subjectRepo.existsById(subject.getId())) {
                subject.setCourse(coursesRepo.findById(courseId).orElseThrow());
                System.out.println(subject.getSubjectId() + " " + subject.getName());
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
            faculty.setJoiningDate(LocalDate.now());
            faculty.setContactDetails(contactDetails);
            Optional<Course> byId = coursesRepo.findById(courseId);
            faculty.setCourse(byId.orElseThrow());
            facultyRepo.save(faculty);
            User user = new User(UserType.FACULTY);
            user.setUserName(faculty.getContactDetails().getEmail());
            userRepo.save(user);
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
            student.setJoiningDate(LocalDate.now());
            student.setContactDetails(contactDetails);
            Optional<Course> byId = coursesRepo.findById(courseId);
            student.setCourse(byId.orElseThrow());
            studentsRepo.save(student);
            User user = new User(UserType.STUDENT);
            user.setUserName(Long.toString(student.getAdmissionNumber()));
            userRepo.save(user);
            return ResponseEntity.ok("Saved");
        } else return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{courseId}/{type}/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long courseId, @PathVariable String type, @PathVariable Long id) {
        if (coursesRepo.existsById(courseId)) {
            switch (type) {
                case "students" -> {
                    if (studentsRepo.existsById(id)) {
                        studentsRepo.deleteById(id);
                        userRepo.deleteById(id.toString());
                        return ResponseEntity.ok("successfully deleted");
                    }
                }
                case "faculty" -> {
                    if (facultyRepo.existsById(id)) {
                        var optional = facultyRepo.findById(id);
                        if (optional.isPresent()) {
                            facultyRepo.deleteById(id);
                            userRepo.deleteById(optional.get().getContactDetails().getEmail());
                            return ResponseEntity.ok("successfully deleted");
                        }
                    }
                }
                case "subjects" -> {
                    if (subjectRepo.existsById(id)) {
                        subjectRepo.deleteById(id);
                        return ResponseEntity.ok("successfully deleted");
                    }
                }
                default -> throw new InvalidMappingException("Invalid path",Origin.UNKNOWN_FILE_PATH, "");
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{courseId}/fee")
    public ResponseEntity<?> fee(@PathVariable Long courseId) {
        if (courseFeeRepo.existsById(courseId)) {
            var optional = courseFeeRepo.findAllByCourse_Id(courseId);
            if (optional.isPresent()) {
                return ResponseEntity.ok(optional.get());
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{courseId}/fee/students")
    public ResponseEntity<?> studentFee(@PathVariable Long courseId) {
        if (courseFeeRepo.existsById(courseId)) {
            var optional = studentRepo.findAllByCourseFee_Course_Id(courseId);
            if (optional.isPresent()) {
                var studentFees = optional.get();
                return ResponseEntity.ok(studentFees);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/{courseId}/fee/students")
    public ResponseEntity<?> addStudentFee(@RequestBody @Valid StudentFeeDto studentFeeDto, BindingResult bindingResult, @PathVariable Long courseId) {
        if (bindingResult.hasErrors()) RestUtils.bindingErrors(bindingResult);
        if (courseFeeRepo.existsById(courseId)) {
            StudentFee studentFee = new StudentFee();
            studentFee.setStudent(studentsRepo.findById(studentFeeDto.getAdmissionNumber()).orElseThrow());
            studentFee.setCourseFee(courseFeeRepo.findByCourse_IdAndAcademicYear(courseId, studentFeeDto.getAcademicYear()).orElseThrow());
            studentFee.setTransactionId(studentFeeDto.getTransactionId());
            studentFee.setAmount(studentFeeDto.getAmount());
            studentFee.setPaidDate(studentFeeDto.getDate());
            studentFee.setSemester(studentFeeDto.getSemester());
            studentRepo.save(studentFee);
            return ResponseEntity.ok("Successfully added");
        }
        return ResponseEntity.notFound().build();
    }
}