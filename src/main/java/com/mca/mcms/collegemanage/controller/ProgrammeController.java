package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.repo.UgDegreeRepository;
import com.mca.mcms.collegemanage.repo.UgProgrammeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/programmes")
public class ProgrammeController {

    private final UgProgrammeRepository programmeRepository;
    private final UgDegreeRepository degreeRepository;

    @Autowired
    public ProgrammeController(UgProgrammeRepository programmeRepository, UgDegreeRepository degreeRepository) {
        this.programmeRepository = programmeRepository;
        this.degreeRepository = degreeRepository;
    }

    @GetMapping
    public ResponseEntity<?> getProgrammes() {
        return ResponseEntity.ofNullable(degreeRepository.findAllDegrees());
    }

}
