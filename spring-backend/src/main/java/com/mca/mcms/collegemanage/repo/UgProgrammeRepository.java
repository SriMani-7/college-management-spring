package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.UgProgramme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UgProgrammeRepository extends JpaRepository<UgProgramme, String> {
}
