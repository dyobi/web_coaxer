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
import java.util.ArrayList;
import java.util.List;

@Entity @Getter @Setter
@DynamicInsert @DynamicUpdate
@NoArgsConstructor @AllArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty @Email
    @Column(unique = true, columnDefinition = "VARCHAR(30)")
    private String email;

    @Column(columnDefinition = "VARCHAR(15)")
    private String firstName;

    @Column(columnDefinition = "VARCHAR(15)")
    private String lastName;

    private Date dateOfBirth;

    @Column(columnDefinition = "TINYINT")
    private boolean gender = false;

    private Double latitude;

    private Double longitude;

    @Column(columnDefinition = "VARCHAR(500)")
    private String bio;

    @Column(columnDefinition = "TINYINT")
    private boolean notification = true;

    @Column(columnDefinition = "TINYINT")
    private boolean preferredGender = false;

    private Integer preferredMinAge = 0;

    private Integer preferredMaxAge = 100;

    private Integer preferredMaxRange = 310;

    @NotEmpty @Column(columnDefinition = "VARCHAR(10)")
    private String socialType;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
    private List<Picture> pictures = new ArrayList<>();

    // Only For Wrapping
    private Integer age;

    // Only For Wrapping
    private Float distance;

}
