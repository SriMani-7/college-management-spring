package com.mca.mcms.collegemanage.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class StudentDto {

    public static final String PASSWORD_PATTERN = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=])(?=.*!).{8,}$";
    public static final String DATE_FORMAT = "dd/MM/yyyy";
    public static final String EMAIL = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}";

    @NotBlank
    @Size(min = 2, max = 50)
    private String firstName;

    @NotBlank
    @Size(min = 2, max = 50)
    private String lastName;

    @NotNull
    @DateTimeFormat(pattern = DATE_FORMAT)
    private LocalDate dob;

    private long admissionNumber;

    @NotBlank
    @Pattern(regexp = EMAIL, message = "Enter valid email address")
    private String email;

    private long mobileNumber;

    @NotBlank
    private String state;

    @NotBlank
    private String city;

    @NotBlank
    private String addressLine1;

    @Positive
    private int pinCode;
}