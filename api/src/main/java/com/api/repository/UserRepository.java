package com.api.repository;

import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Long> {

    // USER DATABASE

    User findByEmail(String email);

    @Transactional
    void deleteByEmail(String email);

}
