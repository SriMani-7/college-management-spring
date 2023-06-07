const loginForm = Form({
  attributes: {
    onsubmit: "event.preventDefault(); login(event);",
  },
  children: [
    FormField({
      name: "userName",
      label: "Enter user name",
      error: "invalid user name",
    }),
    FormField({
      name: "password",
      label: "Password",
      error: "Enter valid password",
    }),
    SelectOption({
      name: "userType",
      label: "User role",
      error: "Please select role",
      options: {
        ADMIN: "Admin",
        FACULTY: "Faculty",
        STUDENT: "Student",
      },
    }),
    '<p id="errorLabel" class="text-center text-danger"></p>',
    `<div class="d-grid gap-2 col-6 mx-auto">
			<button class="btn btn-primary" type="submit">Login</button>
			<a class="btn btn-link" href="/reset-password.html">Forget password?</a>
		  </div>`,
  ],
});

function RestPasswordForm(onSubmit) {
  return Form({
    attributes: { onsubmit: onSubmit },
    children: [
      FormField({
        name: "userName",
        label: "User name",
        error: "Enter your valid user name",
      }),
      FormField({
        name: "dob",
        label: "Date of Birth",
        error: "Enter valid date",
        type: 'date'
      }),
      FormField({
        name: "password",
        label: "New Password",
        error: "Enter strong password",
        min: '8',
        type: 'password',
        max: '20'
      }),
      FormField({
        name: "confirmPassword",
        label: "Re-enter password",
        error: "Password did not match",
        min: '8',
        max: '20'
      }),
      '<p id="errorLabel" class="text-center text-danger"></p>',
      SubmitButton("Submit"),
      '<a class="btn btn-link" href="/">Login?</a>'
    ],
  });
}

const newCourseForm = Form({
  attributes: {
    onsubmit: "addCourse(event)",
  },
  children: [
    FormField({
      name: "shortName",
      label: "Course name (Short)",
      error: "Enter course name",
    }),
    FormField({
      name: "name",
      label: "Course full name",
      error: "Enter valid name",
    }),
    FormField({
      name: "description",
      label: "Description",
      error: "Enter valuable description",
    }),
    '<p id="errorLabel" class="text-center text-danger"></p>',
    SubmitButton("Add course"),
  ],
});

function StudentRegistrationForm(onSubmit) {
  return Form({
    attributes: {
      onsubmit: onSubmit,
    },
    children: [
      FormField({
        name: "firstName",
        label: "Firstname",
        error: "Must not be empty",
      }),
      FormField({
        name: "lastName",
        label: "Lastname",
        error: "Must not be empty",
      }),
      FormField({
        name: "firstName",
        label: "Firstname",
        error: "Must not be empty",
      }),
      FormField({
        name: "admissionNumber",
        label: "Admission number",
        error: "Enter valid admission number",
        type: "number",
      }),
      FormField({
        name: "dob",
        label: "Date of birth",
        error: "Enter valid date of birth",
        type: "date",
      }),
      ...contactDetailsFields(),
      '<p id="errorLabel" class="text-center text-danger"></p>',
      SubmitButton("Submit"),
    ],
  });
}

function FacultyRegistrationForm(onSubmit) {
  return Form({
    attributes: {
      onsubmit: onSubmit,
    },
    children: [
      FormField({
        name: "firstName",
        label: "Firstname",
        error: "Must not be empty",
      }),
      FormField({
        name: "lastName",
        label: "Lastname",
        error: "Must not be empty",
      }),
      FormField({
        name: "dob",
        label: "Date of birth",
        error: "Enter valid date of birth",
        type: "date",
      }),
      SelectOption({
        name: "level",
        label: "Qualification",
        options: {
          ASST_PROFESSOR: "Assistant Professor",
          PROFESSOR: "Professor",
          SCHOLER: "Scholer",
        },
        error: "Select valid option",
      }),
      ...contactDetailsFields(),
      '<p id="errorLabel" class="text-center text-danger"></p>',
      SubmitButton("Submit"),
    ],
  });
}

function contactDetailsFields() {
  return [
    FormField({
      name: "email",
      label: "Email address",
      error: "Enter valid email address",
      type: "email",
    }),
    Div({
      attributes: {
        class: "row",
      },
      children: [
        FormField({
          name: "mobileNumber",
          label: "Mobile number",
          error: "Enter valid mobile number",
          type: "number",
        }),
        FormField({
          name: "state",
          label: "State",
          error: "This field is required",
        }),
      ],
    }),
    Div({
      attributes: {
        class: "row",
      },
      children: [
        FormField({
          name: "city",
          label: "City",
          error: "This field is required",
        }),
        FormField({
          name: "pinCode",
          label: "Pin-code",
          error: "This field is required",
          type: "number",
        }),
      ],
    }),
    FormField({
      name: "addressLine1",
      label: "Address line 1",
      error: "This field is required",
    }),
  ];
}

function SubjectForm(onSubmit) {
  return Form({
    attributes: {
      onsubmit: onSubmit,
    },
    children: [
      FormField({
        name: "subjectId",
        label: "Subject id",
        error: "Invalid subject id",
      }),
      FormField({
        name: "name",
        label: "Subject name",
        error: "Invalid subject name",
      }),
      FormField({
        name: "semester",
        label: "Semester",
        error: "Must be in between 1 and 4",
        type: "text",
      }),
      '<p id="errorLabel" class="text-center text-danger"></p>',
      SubmitButton("Submit"),
    ],
  });
}
