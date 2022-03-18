package com.api.repository;

import com.api.model.Hookup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional @Repository
public interface HookupRepository extends JpaRepository<Hookup, Long> {

    // HOOKUP DATABASE

}
