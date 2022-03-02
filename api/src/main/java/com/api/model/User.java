package com.api.model;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
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

    @Column(nullable = false, columnDefinition = "tinyint default 0")
    private boolean gender;

    private float latitude;

    private float longitude;

    @Column(columnDefinition = "varchar(500)")
    private String bio;

    @Column(nullable = false, columnDefinition = "tinyint default 1")
    private boolean notification;

    @Column(nullable = false, columnDefinition = "tinyint default 0")
    private boolean preferredGender;

    @ColumnDefault("0")
    private int preferredMinAge;

    @ColumnDefault("100")
    private int preferredMaxAge;

    @ColumnDefault("-1")
    private int preferredMaxDistance;

    @NotEmpty
    private String socialType;

    // TRANSIENT

}
