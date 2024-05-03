package com.mca.mcms.collegemanage.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ForgetPassword {
    @NotNull
    private String userName;
    @Size(min = 8, max = 20)
    private String password;
    @Size(min = 8, max = 20)
    private String confirmPassword;
    @DateTimeFormat(pattern = StudentDto.DATE_FORMAT)
    private LocalDate dob;

    public boolean isPasswordMatch() {
        return password.equals(confirmPassword);
    }
}
