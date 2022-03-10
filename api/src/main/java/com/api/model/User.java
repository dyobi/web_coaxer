package com.api.model;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.sql.Date;

@Entity @Getter @Setter
@DynamicInsert @DynamicUpdate
@NoArgsConstructor @AllArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty @Column(unique = true)
    private String userId;

    @NotEmpty @Column(unique = true) @Email
    private String email;

    private String firstName;

    private String lastName;

    private Date dateOfBirth;

    @Column(columnDefinition = "tinyint")
    private boolean gender = false;

    private float latitude;

    private float longitude;

    @Column(columnDefinition = "varchar(500)")
    private String bio;

    @Column(columnDefinition = "tinyint")
    private boolean notification = true;

    @Column(columnDefinition = "tinyint")
    private boolean preferredGender = false;

    private int preferredMinAge = 0;

    private int preferredMaxAge = 100;

    private int preferredMaxDistance = 310;

    @NotEmpty
    private String socialType;

    // TRANSIENT

}
