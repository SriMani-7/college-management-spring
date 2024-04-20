insert into Courses (id, short_name, name, description) values(1,'MCA', 'Masters of Computer Applications', 'MCA equips students with a strong foundation in computer science and prepares them for challenging and rewarding careers in the field of technology.');
insert into Courses (id, short_name, name, description) values(2,'MBA', 'Master of Business Administration', 'Master of Business Administration (MBA) is a postgraduate degree program that focuses on providing advanced training in business and management.');
insert into Courses (id, short_name, name, description) values(3,'MCom', 'Masters of Computer Applications', 'The course is ideal for students who want to learn, and drive careers in one of the following fields; international business');
insert into Subjects (subject_id, name, semester, course_id) values("MCA 101", "Discrete Mathematical Structures", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 102", "Object Oriented Programming with Java", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 103", "Computer Organization", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 104", "Operating Systems", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 105A", "Accounting and Financial management", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 105B", "Accounting Essentials for Computer Applications", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 106P", "Software Lab I (based on 101 & 103)", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 107P", "Object Oriented Programming Lab", 1,1);
insert into Subjects (subject_id, name, semester, course_id) values("MCA 108P", "Operating Systems Lab", 1,1);

insert into course_fees (id, course_id, price, academic_year) values(1, 1, 44000, 2021);
insert into course_fees (id, course_id, price, academic_year) values(2, 2, 45000, 2021);
insert into course_fees (id, course_id, price, academic_year) values(3, 3, 43000, 2021);


INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2000-01-01', '2022-09-01', 12345, 2, 1001, 1, 1234567890, 123, '123 Main Street', 'City', 'example1@example.com', 'John', 'Doe', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2001-02-15', '2023-02-01', 54321, 1, 1002, 2, 9876543210, 456, '456 Oak Street', 'City', 'example2@example.com', 'Jane', 'Smith', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2002-07-20', '2023-03-15', 67890, 3, 1003, 3, 1112223334, 789, '789 Elm Street', 'City', 'example3@example.com', 'Michael', 'Johnson', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2003-05-10', '2023-04-01', 98765, 2, 1004, 1, 5554443332, 321, '321 Maple Street', 'City', 'example4@example.com', 'Emily', 'Brown', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2004-09-25', '2023-05-01', 24680, 1, 1005, 2, 7778889990, 654, '654 Pine Street', 'City', 'example5@example.com', 'Andrew', 'Wilson', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2005-03-12', '2023-06-01', 13579, 3, 1006, 3, 9998887776, 987, '987 Cedar Street', 'City', 'example6@example.com', 'Sophia', 'Davis', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2006-11-05', '2023-07-01', 97531, 2, 1007, 1, 3332221118, 876, '876 Walnut Street', 'City', 'example7@example.com', 'Daniel', 'Lee', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2007-08-18', '2023-08-01', 12345, 3, 1008, 2, 6667778886, 543, '543 Oak Street', 'City', 'example8@example.com', 'Olivia', 'Clark', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2008-01-23', '2023-09-01', 54321, 1, 1009, 3, 2223334442, 210, '210 Elm Street', 'City', 'example9@example.com', 'David', 'Taylor', 'State');

INSERT INTO students (dob, joining_date, pin_code, semester, admission_number, course_id, mobile_number, roll_number, address_line1, city, email, first_name, last_name, state)
VALUES ('2009-04-09', '2023-10-01', 67890, 2, 1010, 1, 8889990002, 109, '109 Maple Street', 'City', 'example10@example.com', 'Emma', 'Miller', 'State');
