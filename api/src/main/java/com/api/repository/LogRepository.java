package com.api.repository;

import com.api.model.Log;
import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {

    // LOG DATABASE

    ArrayList<Log> findAllByUserOrderByLogDateDesc(User user);

}
