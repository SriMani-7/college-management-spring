package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "subjects")
@ToString
public class Subject {
    @Id
    private String subjectId;
    @Column(nullable = false)
    private String name;
    @JoinColumn(referencedColumnName = "id",
            nullable = false,
            name = "course_id",
            foreignKey = @ForeignKey(name = "fk_courseId")
    )
    @ManyToOne
    private Course course;
    private int semester;
}