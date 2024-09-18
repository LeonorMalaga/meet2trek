package com.esplai.meet2trek.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundErrorResponse extends RuntimeException {
    public NotFoundErrorResponse(String message) {
        super(message);
    }
}
