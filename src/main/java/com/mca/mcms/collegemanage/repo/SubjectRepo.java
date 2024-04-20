package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepo extends JpaRepository<Subject, Long> {

    List<Subject> findByCourse_Id(Long courseId);
}
