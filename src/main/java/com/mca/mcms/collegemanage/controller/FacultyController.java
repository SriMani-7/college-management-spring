package com.mca.mcms.collegemanage.controller;

import com.mca.mcms.collegemanage.dto.FacultyDto;
import com.mca.mcms.collegemanage.entity.Faculty;
import com.mca.mcms.collegemanage.repo.FacultyRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/faculty")
public class FacultyController {
    private final FacultyRepository facultyRepository;

    public FacultyController(FacultyRepository facultyRepository) {
        this.facultyRepository = facultyRepository;
    }

    @GetMapping("/{id}/faculty")
    public ResponseEntity<?> getFaculty(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ofNullable(facultyRepository.findAll());
    }

    @PostMapping("/{id}/faculty")
    public ResponseEntity<?> addFaculty(@PathVariable(name = "id") Long id, @RequestBody FacultyDto facultyDto) {
        var faculty = new Faculty(id, facultyDto);
        return ResponseEntity.ofNullable(facultyRepository.save(faculty));
    }
}
