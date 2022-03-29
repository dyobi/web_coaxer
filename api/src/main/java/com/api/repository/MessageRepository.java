package com.api.repository;

import com.api.model.Chatroom;
import com.api.model.Message;
import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.HashSet;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    // MESSAGE DATABASE

    @Query(value = "SELECT * FROM message WHERE room_id = :chat_id AND visible_id = :visible_id ORDER BY id",
            nativeQuery = true)
    HashSet<Message> findByVisible(long chat_id, long visible_id);

    @Transactional
    void deleteAllByRoomAndVisible(Chatroom room, User visible);

}
