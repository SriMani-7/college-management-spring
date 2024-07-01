package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.RestUtils;
import com.mca.mcms.collegemanage.dto.DepartmentDto;
import com.mca.mcms.collegemanage.dto.FacultyDto;
import com.mca.mcms.collegemanage.entity.Department;
import com.mca.mcms.collegemanage.entity.Faculty;
import com.mca.mcms.collegemanage.repo.DepartmentRepository;
import com.mca.mcms.collegemanage.repo.FacultyRepository;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/departments")
public class DepartmentController {
    private static final Logger log = LoggerFactory.getLogger(DepartmentController.class);
    private final DepartmentRepository departmentRepository;
    private final FacultyRepository facultyRepository;

    @Autowired
    public DepartmentController(DepartmentRepository departmentRepository, FacultyRepository facultyRepository) {
        this.departmentRepository = departmentRepository;
        this.facultyRepository = facultyRepository;
    }

    @GetMapping
    public ResponseEntity<List<Department>> departments() {
        return ResponseEntity.ok(departmentRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<?> createDepartment(
            @RequestBody @Valid DepartmentDto departmentDto,
            BindingResult bindingResult
    ) {
        if (bindingResult.hasErrors()) return RestUtils.bindingErrors(bindingResult);

        if (departmentRepository.existsByName(departmentDto.getName())) {
            bindingResult.addError(new FieldError("departmentDto", "name", "Department already exists"));
            return RestUtils.bindingErrors(bindingResult);
        }

        var dept = new Department();
        dept.setName(departmentDto.getName());
        dept.setVision(departmentDto.getVision());
        Department saved = departmentRepository.save(dept);
        return ResponseEntity.ofNullable(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDepartment(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ofNullable(departmentRepository.findById(id));
    }

    @GetMapping("/{id}/faculty")
    public ResponseEntity<?> getDepartmentFaculty(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ofNullable(facultyRepository.findAllByDepartmentId(id));
    }

    @PostMapping("/{id}/faculty")
    public ResponseEntity<?> addFaculty(@PathVariable(name = "id") Long id, @RequestBody FacultyDto facultyDto) {
        var faculty = new Faculty(id, facultyDto);
        return ResponseEntity.ofNullable(facultyRepository.save(faculty));
    }
}
