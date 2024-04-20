package com.mca.mcms.collegemanage;

import com.mca.mcms.collegemanage.entity.UserType;
import jakarta.servlet.http.HttpSession;

public class Auth {
    public static final String USERTYPE_ATTR = "userType";
    public static final String USERNAME_ATTR = "userName";

    public static Boolean hasLogin(UserType userType, HttpSession httpSession) {
        Object user = httpSession.getAttribute(USERTYPE_ATTR);
        return (user != null && user.equals(userType));
    }
}
