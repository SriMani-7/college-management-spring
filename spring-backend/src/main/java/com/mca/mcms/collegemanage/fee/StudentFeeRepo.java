package com.mca.mcms.collegemanage.fee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentFeeRepo extends JpaRepository<StudentFee, Long> {
    Optional<List<StudentFee>> findAllByCourseFee_Course_Id(Long courseId);
    List<StudentFee> findAllByStudent_admissionNumber(Long number);
}
