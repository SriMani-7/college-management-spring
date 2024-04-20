package com.mca.mcms.collegemanage.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Embeddable
public class ContactDetails {
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private long mobileNumber;
    @Column(nullable = false)
    private String state;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String addressLine1;
    @Column(nullable = false)
    private int pinCode;
}
