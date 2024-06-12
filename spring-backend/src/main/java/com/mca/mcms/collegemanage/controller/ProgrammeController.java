package com.mca.mcms.collegemanage.controller;

import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mca.mcms.collegemanage.dto.ProgrammeDto;
import com.mca.mcms.collegemanage.entity.Department;
import com.mca.mcms.collegemanage.entity.UgDegree;
import com.mca.mcms.collegemanage.entity.UgProgramme;
import com.mca.mcms.collegemanage.projection.DegreeDto;
import com.mca.mcms.collegemanage.repo.DepartmentRepository;
import com.mca.mcms.collegemanage.repo.UgDegreeRepository;
import com.mca.mcms.collegemanage.repo.UgProgrammeRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;

@Controller
@RequestMapping("/api/programmes")
public class ProgrammeController {

    private final UgProgrammeRepository programmeRepository;
    private final UgDegreeRepository degreeRepository;
    private final DepartmentRepository departmentRepository;

    @Autowired
    public ProgrammeController(UgProgrammeRepository programmeRepository, UgDegreeRepository degreeRepository, DepartmentRepository departmentRepository) {
        this.programmeRepository = programmeRepository;
        this.degreeRepository = degreeRepository;
        this.departmentRepository = departmentRepository;
    }

    @GetMapping
    public ResponseEntity<?> getProgrammes() {
        return ResponseEntity.ofNullable(degreeRepository.findAllDegrees());
    }

    @PostMapping
    public ResponseEntity<?> createProgramme(@RequestBody ProgrammeDto programmeDto) {
        // Validate and Retrieve the degree from the database
        Optional<UgDegree> degreeOptional = degreeRepository.findById(programmeDto.getDegree());
        if (degreeOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid degree code: " + programmeDto.getDegree());
        }

        // Create the UgProgramme entity
        UgProgramme ugProgramme = new UgProgramme(programmeDto.getCode(), programmeDto.getName());
        ugProgramme.setUgDegree(degreeOptional.get());

        // Retrieve and associate the departments
        List<Department> departments = new ArrayList<>();
        for (ProgrammeDto.Department departmentDto : programmeDto.getDepartments()) {
            Optional<Department> departmentOptional = departmentRepository.findById(departmentDto.getId());
            if (departmentOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid department id: " + departmentDto.getId());
            }
            departments.add(departmentOptional.get());
        }
        ugProgramme.setCoreDepartments(departments);

        // Save the UgProgramme entity
        UgProgramme savedProgramme = programmeRepository.save(ugProgramme);
        var map = new HashMap<String, Object>();
        map.put("code", savedProgramme.getCode());
        map.put("name", savedProgramme.getName());
        map.put("degree", degreeOptional.get().getCode());
        map.put("departments", savedProgramme
                .getCoreDepartments()
                .stream()
                .map(department ->
                        Map.of("id", department.getId(), "name", department.getName())
                ).toList()
        );
        return ResponseEntity.ok(map);
    }

    @GetMapping("/departments")
    public ResponseEntity<?> getAvailableDepartments() {
        return ResponseEntity.ofNullable(departmentRepository.getAvailableDepts());
    }

}
