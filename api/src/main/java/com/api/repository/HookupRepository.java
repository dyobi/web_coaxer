package com.api.repository;

import com.api.model.Hookup;
import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface HookupRepository extends JpaRepository<Hookup, Long> {

    // HOOKUP DATABASE

    boolean existsByFromAndTo(User from, User to);

    ArrayList<Hookup> findAllByFrom(User from);

    @Query(value = "SELECT IF (COUNT(*) > 0, 'true', 'false') FROM hookup WHERE :user1 IN " +
            "(SELECT to_id from hookup WHERE from_id = :user2) AND :user1 IN " +
            "(SELECT from_id FROM hookup WHERE to_id = :user2)",
            nativeQuery = true)
    boolean existsByUsers(@Param("user1") long user1, @Param("user2") long user2);

}