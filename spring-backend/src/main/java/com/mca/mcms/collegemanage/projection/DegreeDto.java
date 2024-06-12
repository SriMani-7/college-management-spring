package com.mca.mcms.collegemanage.projection;

import java.util.List;

public interface DegreeDto {
    String getCode();
    String getName();
    List<ProgrammeDto> getUgProgrammes();

    interface ProgrammeDto {
        String getCode();
        String getName();
        List<DepartmentDto> getCoreDepartments();
    }

    interface DepartmentDto {
        String getName();
        long getId();
    }
}
