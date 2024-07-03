package com.mca.mcms.collegemanage.entity.embed;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class StudentAddress {
    private String address;
    private String city;
    private String state;
    private String mobile;
    private int pincode;
}
