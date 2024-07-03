package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
