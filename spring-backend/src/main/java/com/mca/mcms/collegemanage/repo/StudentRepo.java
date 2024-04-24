package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface StudentRepo extends CrudRepository<Student, Long> {
    boolean existsByAdmissionNumberAndDob(long admissionNumber, LocalDate dob);

    List<Student> findByCourse_Id(Long courseId);
}