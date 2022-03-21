package com.api.repository;

import com.api.model.Chatroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ChatroomRepository extends JpaRepository<Chatroom, Long> {

    // CHATROOM DATABASE

    @Query(value = "SELECT IF (COUNT(*) > 0, 'true', 'false') FROM chatroom WHERE :user1 IN " +
            "(SELECT user1_id from chatroom WHERE user2_id = :user2) AND :user1 IN " +
            "(SELECT user2_id FROM chatroom WHERE user1_id = :user2)",
            nativeQuery = true)
    boolean existsByUsers(@Param("user1") long user1, @Param("user2") long user2);

    @Query(value = "SELECT * FROM chatroom WHERE user1_id = :id OR user2_id = :id",
            nativeQuery = true)
    ArrayList<Chatroom> findAllByUserId(long id);

}
