package com.api.repository;

import com.api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // USER DATABASE

    User findByEmail(String email);

    @Transactional
    void deleteByEmail(String email);

    @Query(value = "SELECT id, email, last_name, first_name, YEAR(CURDATE()) - YEAR(date_of_birth) AS age, " +
            "date_of_birth, gender, latitude, longitude, bio, notification, social_type, " +
            "preferred_max_range, preferred_gender, preferred_min_age, preferred_max_age, " +
            "(3959 * acos(cos(radians(:#{#user.latitude})) * cos(radians(latitude)) * cos(radians(longitude) - " +
            "radians(:#{#user.longitude})) + sin(radians(:#{#user.latitude})) * sin(radians(latitude)))) AS distance " +
            "FROM user WHERE id != :#{#user.id} AND gender = :#{#user.preferredGender} AND " +
            "(YEAR(CURDATE()) - YEAR(date_of_birth) BETWEEN :#{#user.preferredMinAge} AND :#{#user.preferredMaxAge}) AND " +
            "((3959 * acos(cos(radians(:#{#user.latitude})) * cos(radians(latitude)) * cos(radians(longitude) - " +
            "radians(:#{#user.longitude})) + sin(radians(:#{#user.latitude})) * sin(radians(latitude))) " +
            "<= :#{#user.preferredMaxRange}) OR :#{#user.preferredMaxRange} = 310) AND last_name IS NOT NULL AND " +
            "first_name IS NOT NULL AND bio IS NOT NULL AND date_of_birth IS NOT NULL AND latitude IS NOT NULL AND " +
            "longitude IS NOT NULL AND (SELECT COUNT(*) FROM picture WHERE user_id = user.id) > 0 AND " +
            "id NOT IN (SELECT to_id FROM hookup WHERE from_id = :#{#user.id}) ORDER BY distance",
            nativeQuery = true)
    ArrayList<User> getIdealUsers(@Param("user") User user);

}
