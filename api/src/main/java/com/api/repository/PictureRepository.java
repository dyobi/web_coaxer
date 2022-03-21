package com.api.repository;

import com.api.model.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {

    // PICTURE DATABASE

    Picture findByName(String name);

    ArrayList<Picture> findByUserId(long userId);

    @Transactional
    void deleteByName(String name);

}
