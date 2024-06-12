package com.mca.mcms.collegemanage.dto;

import com.mca.mcms.collegemanage.entity.Subject;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SubjectDto {
    @Size(min = 2)
    private String subjectId;
    @NotBlank
    private String name;
    @Positive
    private int semester;

    public Subject getSubject() {
        Subject subject = new Subject();
        subject.setSubjectId(subjectId);
        subject.setName(name);
        subject.setSemester(semester);
        return subject;
    }
}