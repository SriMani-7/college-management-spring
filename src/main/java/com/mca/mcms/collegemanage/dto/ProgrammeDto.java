package com.mca.mcms.collegemanage.dto;

import com.mca.mcms.collegemanage.projection.DegreeDto;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ProgrammeDto {
    private String code;
    private String name;
    private String degree;
    private List<Department> departments;

    @Getter
    @Setter
    public static class Department {
        private long id;
        private String name;
    }
}
