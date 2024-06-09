package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.RestUtils;
import com.mca.mcms.collegemanage.dto.DepartmentDto;
import com.mca.mcms.collegemanage.entity.Department;
import com.mca.mcms.collegemanage.repo.DepartmentRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/departments")
public class DepartmentController {
    private final DepartmentRepository departmentRepository;

    @Autowired
    public DepartmentController(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
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
}
