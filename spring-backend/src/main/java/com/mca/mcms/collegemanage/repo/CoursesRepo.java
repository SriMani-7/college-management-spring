package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursesRepo extends JpaRepository<Course, Long> {
    boolean existsByShortName(String shortName);
}
