package com.mca.mcms.collegemanage.dto;

import com.mca.mcms.collegemanage.entity.UserType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    @NotBlank
    private String userName;
    @Size(min = 8, max = 20)
    private String password;
    @NotNull
    private UserType userType;
}
