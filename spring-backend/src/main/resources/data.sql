insert into departments (id, name, vision) values(1, 'Physics', 'Our vision is to develop scientific skills, Scientific reasoning among students that will empower them to successfully move into the society with confidence and build their abilities and skills.');
insert into departments (id, name, vision) values(2, 'Statistics', 'To become a centre of excellence in Statistics education and research by imparting students with latest statistical skills through high quality teaching methodologies.');
insert into departments (id, name, vision) values(3, 'Mathematics', 'Mathematics crosses borders in a way that other  subjects are unable to. Therefore, our goal is to mould our students and teach them the fundamental ideas of mathematics nature and structure so they may use it in everyday life.');
insert into departments (id, name, vision) values(4, 'Computer science', 'To make the Department a center of excellence for high quality human and knowledge resources in diverse areas of Computer Applications to meet technical and social needs of the society.');
insert into departments (id, name, vision) values(5, 'Electronics', 'To become a pioneer in higher learning and to produce creative solution to social needs');
insert into departments (id, name, vision) values(6, 'Economics', 'Imparting theoretical and applied knowledge of Economics and preparing the students for modern day challenges and global competition.');

insert into departments (id, name, vision) values(7, 'Microbiology ', 'To evolve as a centre of community awareness and employability training; To widely disseminate the knowledge of microbiology especially among rural sections via empowered students.');
insert into departments (id, name, vision) values(8, 'Zoology', 'Promoting the significance of animal conservation, providing quality knowledge and creating enthusiasm for studying the diversity of animals, ensuring all round development while working for transforming the students as socially responsible persons..');
insert into departments (id, name, vision) values(9, 'Botany', 'To excel by providing quality education in Plant Sciences and to cultivate talent, equip students with skills that are employable and inventive.');

--- Languages
insert into departments (id, name, vision) values(10, 'Telugu', 'To make students learn the greatness of Telugu heritage, customs and traditions. Explain the need of Telugu language which has been losing its importance survival.');
insert into departments (id, name, vision) values(11, 'English', 'Quality Communication for Personality Development.');

--- Degrees
insert into ug_degrees (code, name) values('B.Sc', 'Bachelor of Science');
insert into ug_degrees (code, name) values('B.A', 'Bachelor of Arts');
insert into ug_degrees (code, name) values('B.Com', 'Bachelor of Commerce');

--- BSC programmes
insert into ug_programmes (code, name, degree_code) values('BS1', 'MPCs', 'B.Sc');
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS1',3);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS1',1);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS1',4);

insert into ug_programmes (code, name, degree_code) values('BS2', 'MSCs', 'B.Sc');
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS2',3);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS2',2);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS2',4);

insert into ug_programmes (code, name, degree_code) values('BS3', 'MECs', 'B.Sc');
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS3',3);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS3',5);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS3',4);

insert into ug_programmes (code, name, degree_code) values('BS4', 'MPE', 'B.Sc');
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS4',3);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS4',1);
insert into ug_programme_core_departments (ug_programme_code, core_departments_id) values('BS4',5);
