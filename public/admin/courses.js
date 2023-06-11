const facultyHost = document.querySelector("#faculties-host");
const studentsHost = document.querySelector("#students-host");
const subjectsHost = document.querySelector("#subjects-host");
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("courseId");

document.getElementById("new-stu-a").href =
  "student-register?courseId=" + courseId;

document.getElementById("new-fa-a").href =
  "faculty-register?courseId=" + courseId;

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
      <td>
        <button class="btn btn-outline-info btn-sm" onclick="ops('faculty', false, ${faculty.id})">Update</button>
        <button class="btn btn-outline-danger btn-sm" onclick="ops('faculty', true, ${faculty.id})">Delete</button>
      </td>
		</tr>`;
  });
}

async function loadStudents() {
  const response = await fetch(endPoints.students);
  const faculties = await response.json();
  loadStudentsList(faculties);
}

function loadStudentsList(list) {
  studentsHost.innerHTML = "";
  list.forEach((student) => {
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
    <td>
      <button class="btn btn-outline-info btn-sm" onclick="ops('students', false, ${student.admissionNumber})">Update</button>
      <button class="btn btn-outline-danger btn-sm" onclick="ops('students', true, ${student.admissionNumber})">Delete</button>
    </td>
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
    <td>
      <button class="btn btn-outline-info btn-sm" onclick="ops('subjects', false, ${subject.id})">Update</button>
      <button class="btn btn-outline-danger btn-sm" onclick="ops('subjects', true, ${subject.id})">Delete</button>
    </td>
    </tr>`;
  });
}

function ops(user, isDelete, id) {
  const endPoint = endPoints[user] + "/" + id;
  try {
    if (isDelete) {
      del(endPoint).then(result => {
        showToast(result, "success");
        if(user == "faculty") loadFaculties();
        else if(user == "students") loadStudents();
        else if(user == "subjects") loadSubjects();
      });
    } else {
      showToast('Coming soon !!', 'info');
    }
  } catch (error) {
    showToast("Something went wrong, try again", "warning");
  }
}

function showToast(message, type) {
  let contaainer = document.querySelector(".toast-container");
  contaainer.append(SimpleToast(message, "text-bg-" + type));
}

async function handlePost(type, form) {
  const response = await postForm(endPoints[type], form);
  if (response.status === 200) {
    if (type == "faculty") {
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
