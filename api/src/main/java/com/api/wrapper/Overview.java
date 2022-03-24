package com.api.wrapper;

import com.api.model.User;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Overview {

    private List<User> fromMe = new ArrayList<>();

    private List<User> fromOther = new ArrayList<>();

    private List<User> matched = new ArrayList<>();

}
