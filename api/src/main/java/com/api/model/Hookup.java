package com.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity @Getter @Setter
@DynamicInsert @DynamicUpdate
@NoArgsConstructor @AllArgsConstructor
public class Hookup {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonIgnore @ManyToOne @JoinColumn(name = "from_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User from;

    @JsonIgnore @ManyToOne @JoinColumn(name = "to_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User to;

}
