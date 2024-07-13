package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Course;
import com.mca.mcms.collegemanage.projection.AdmissionCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
    @Query("select c.id as id, c.name as name from Course c")
    Optional<List<AdmissionCourse>> getAdmissionsCourses();
}
