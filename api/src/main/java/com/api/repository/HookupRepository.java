package com.api.repository;

import com.api.model.Hookup;
import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Transactional @Repository
public interface HookupRepository extends JpaRepository<Hookup, Long> {

    // HOOKUP DATABASE

    boolean existsByFromAndTo(User from, User to);

    ArrayList<Hookup> findAllByFrom(User from);

}
