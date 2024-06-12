package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.Department;
import com.mca.mcms.collegemanage.projection.DegreeDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByName(String name);

    @Query("select d.id as id, d.name as name from Department d")
    List<DegreeDto.DepartmentDto> getAvailableDepts();
}
