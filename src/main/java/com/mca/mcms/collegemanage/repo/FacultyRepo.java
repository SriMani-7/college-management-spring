package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Faculty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FacultyRepo extends CrudRepository<Faculty, Long> {
    boolean existsByContactDetails_EmailAndDob(String userName, LocalDate dob);

    List<Faculty> findByCourse_Id(Long courseId);
}

