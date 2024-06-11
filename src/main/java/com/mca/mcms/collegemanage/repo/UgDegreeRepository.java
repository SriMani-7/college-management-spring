package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.projection.DegreeDto;
import com.mca.mcms.collegemanage.entity.UgDegree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UgDegreeRepository extends JpaRepository<UgDegree, String> {

    @Query("select u from UgDegree u")
    List<DegreeDto> findAllDegrees();
}