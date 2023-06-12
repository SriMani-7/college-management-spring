package com.mca.mcms.collegemanage.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "course_fees")
public class CourseFee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JoinColumn(referencedColumnName = "id")
    @OneToOne
    private Course course;
    private Double price;
    private int academicYear;
}