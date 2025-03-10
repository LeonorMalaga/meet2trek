package com.esplai.meet2trek.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ValidationErrorResponse> handleValidationException(MethodArgumentNotValidException ex) {
        ValidationErrorResponse errorResponse = new ValidationErrorResponse();
        for (FieldError error: ex.getBindingResult().getFieldErrors()) {
            errorResponse.getErrors().add(new ValidationErrorResponse.
                    ValidationError(error.getField(), error.getDefaultMessage()));
        }
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotFoundErrorResponse.class)
    public ResponseEntity<ExceptionErrorHandler> handleNotFoundException(NotFoundErrorResponse ex) {
        ExceptionErrorHandler exceptionErrorHandler = new ExceptionErrorHandler(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(exceptionErrorHandler, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConflictErrorResponse.class)
    public ResponseEntity<ExceptionErrorHandler> handleConflictException(ConflictErrorResponse ex) {
        ExceptionErrorHandler exceptionErrorHandler = new ExceptionErrorHandler(HttpStatus.CONFLICT.value(), ex.getMessage());
        return new ResponseEntity<>(exceptionErrorHandler, HttpStatus.CONFLICT);
    }
}
