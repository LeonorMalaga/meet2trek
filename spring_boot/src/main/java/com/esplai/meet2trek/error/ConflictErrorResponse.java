package com.esplai.meet2trek.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ConflictErrorResponse extends RuntimeException {
    public ConflictErrorResponse(String message) {
        super(message);
    }
}
