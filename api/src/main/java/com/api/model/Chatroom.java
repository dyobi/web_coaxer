package com.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.*;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.OrderBy;
import java.util.ArrayList;
import java.util.List;

@Entity @Getter @Setter
@DynamicInsert @DynamicUpdate
@NoArgsConstructor @AllArgsConstructor
public class Chatroom {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne @OnDelete(action = OnDeleteAction.CASCADE)
    private User user1;

    @ManyToOne @OnDelete(action = OnDeleteAction.CASCADE)
    private User user2;

    @OneToMany(mappedBy = "room", fetch = FetchType.EAGER)
    @OrderBy("sendDate asc")
    private List<Message> messages = new ArrayList<>();
    
}
