package com.esplai.meet2trek.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class ExceptionErrorHandler {
    private int status;
    private String message;
}
