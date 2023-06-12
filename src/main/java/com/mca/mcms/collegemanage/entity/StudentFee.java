package com.mca.mcms.collegemanage.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "student_fee")
public class StudentFee {
    @Id
    private Long id;
    @JoinColumn(nullable = false)
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Student student;
    @JoinColumn(referencedColumnName = "id", nullable = false)
    @ManyToOne(cascade = CascadeType.REMOVE)
    private CourseFee courseFee;
    private long transactionId;
    private double amount;
    private LocalDate paidDate;
    private int semester;
}