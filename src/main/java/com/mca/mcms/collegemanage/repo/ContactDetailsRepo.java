package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.ContactDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactDetailsRepo extends JpaRepository<ContactDetails, Long> {
}
