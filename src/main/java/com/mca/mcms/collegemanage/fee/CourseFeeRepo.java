package com.mca.mcms.collegemanage.fee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseFeeRepo extends JpaRepository<CourseFee, Long> {

    Optional<List<CourseFee>> findAllByCourse_Id(Long courseId);

    Optional<CourseFee> findByCourse_IdAndAcademicYear(Long courseId, int academicYear);
}
