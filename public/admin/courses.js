const facultyHost = document.querySelector("#faculties-host");
const studentsHost = document.querySelector("#students-host");
const subjectsHost = document.querySelector("#subjects-host");
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("courseId");

const endPoints = {
  students: `../api/courses/${courseId}/students`,
  faculty: `../api/courses/${courseId}/faculty`,
  subjects: `../api/courses/${courseId}/subjects`,
};

window.addEventListener("load", () => {
  fetch("/api/courses/" + courseId)
    .then((res) => res.json())
    .then((course) => {
      let info = document.querySelector("#course-info");
      info.querySelector("#name").innerHTML = course.name;
      info.querySelector("#shortName").innerHTML = course.shortName;
      info.querySelector("#description").innerHTML = course.description;
    });
  loadFaculties();
  loadStudents();
  loadSubjects();
});

async function loadFaculties() {
  const response = await fetch(endPoints.faculty);
  const faculties = await response.json();
  facultyHost.innerHTML = "";
  faculties.forEach((faculty) => {
    facultyHost.innerHTML += `
		<tr>
		  <td>${faculty.joiningDate}</td>
		  <td>${faculty.firstName}</td>
		  <td>${faculty.lastName}</td>
		  <td>${faculty.course.name}</td>
		  <td>${faculty.contactDetails.city}</td>
		  <td>${faculty.contactDetails.mobileNumber}</td>
		  <td>${faculty.contactDetails.email}</td>
		</tr>`;
  });
}

async function loadStudents() {
  const response = await fetch(endPoints.students);
  const faculties = await response.json();
  studentsHost.innerHTML = "";
  faculties.forEach((student) => {
    studentsHost.innerHTML += `
	  <tr>
		<td>${student.admissionNumber}</td>
		<td>${student.joiningDate}</td>
		<td>${student.rollNumber}</td>
		<td>${student.firstName}</td>
		<td>${student.lastName}</td>
		<td>${student.course.name}</td>
		<td>${student.academicYear}</td>
		<td>${student.contactDetails.city}</td>
		<td>${student.contactDetails.mobileNumber}</td>
		<td>${student.contactDetails.email}</td>
	</tr>`;
  });
}

async function loadSubjects() {
  const response = await fetch(endPoints.subjects);
  const subjects = await response.json();
  subjectsHost.innerHTML = "";
  subjects.forEach((subject) => {
    subjectsHost.innerHTML += `
	<tr>
		<td>${subject.subjectId}</td>
		<td>${subject.name}</td>
		<td>${subject.semester}</td>
    </tr>`;
  });
}

async function handlePost(type, form) {
  const response = await postForm(endPoints[type], form);
  if (response.status === 200) {
    if (type == "subjects") {
      loadSubjects();
      subjectsModal.hide();
    } else if (type == "students") {
      loadStudents();
      studentModal.hide();
    } else if (type == "faculty") {
      loadFaculties();
      facultyModal.hide();
    }
    form.reset();
  } else if (response.status === 500) {
    const errorLabel = form.getElementById("errorLabel");
    const json = await response.text();
    errorLabel.textContent = json;
  }
}