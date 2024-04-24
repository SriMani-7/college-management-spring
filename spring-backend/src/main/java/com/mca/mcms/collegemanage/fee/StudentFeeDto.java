package com.mca.mcms.collegemanage.fee;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class StudentFeeDto {
    @Positive
    private Long admissionNumber;
    @Positive
    private int semester;
    @NotNull
    private LocalDate date;
    @Positive
    private double amount;
    @Positive
    private long transactionId;
    @Positive
    private int academicYear;

    public StudentFeeDto(StudentFee studentFee) {
        admissionNumber = studentFee.getStudent().getAdmissionNumber();
        semester = studentFee.getSemester();
        date = studentFee.getPaidDate();
        amount = studentFee.getAmount();
        transactionId = studentFee.getTransactionId();
        academicYear = studentFee.getCourseFee().getAcademicYear();
    }
}