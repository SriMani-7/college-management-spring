package com.mca.mcms.collegemanage.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class DepartmentDto {
    @NotBlank
    private String name;
    @NotBlank
    @Size(min = 10, max = 250)
    private String vision;
}
