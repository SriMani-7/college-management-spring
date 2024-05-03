package com.mca.mcms.collegemanage.repo;

import com.mca.mcms.collegemanage.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
    boolean existsByUserNameAndPassword(String userName, String password);
}
