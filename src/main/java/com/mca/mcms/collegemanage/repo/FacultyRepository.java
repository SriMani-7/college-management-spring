package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Faculty;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;

public interface FacultyRepository extends ListCrudRepository<Faculty, Long> {
    List<Faculty> findAllByDepartmentId(long did);
}
