package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.CourseFee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseFeeRepo extends JpaRepository<CourseFee, Long> {

    Optional<List<CourseFee>> findAllByCourse_Id(Long courseId);
}
