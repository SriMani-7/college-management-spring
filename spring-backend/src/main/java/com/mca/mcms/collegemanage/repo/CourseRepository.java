package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
