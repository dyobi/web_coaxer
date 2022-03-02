package com.api.model;

import lombok.*;

@Getter @Setter @RequiredArgsConstructor
@NoArgsConstructor @AllArgsConstructor
public class Response {

    @NonNull
    private int status;

    private Object obj;

}
