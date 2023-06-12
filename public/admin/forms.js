const studentFeeForm = Form({
  attributes: {
    onsubmit: "handleForm(event, 'studentsFee')",
  },
  children: [
    FormField({
      name: "admissionNumber",
      label: "Admission Number",
      error: "Enter a positive number",
      type: "number",
      min: "1",
    }),
    FormField({
      name: "semester",
      label: "Semester",
      error: "Enter a positive number",
      type: "number",
      min: "1",
    }),
    FormField({
      name: "date",
      label: "Date",
      error: "Enter a valid date",
      type: "date",
    }),
    FormField({
      name: "amount",
      label: "Amount",
      error: "Enter a positive number",
      type: "number",
      min: "0",
    }),
    FormField({
      name: "transactionId",
      label: "Transaction ID",
      error: "Enter a positive number",
      type: "number",
      min: "1",
    }),
    FormField({
      name: "academicYear",
      label: "Academic Year",
      error: "Enter a positive number",
      type: "number",
      min: "1",
    }),
    '<p id="errorLabel" class="text-center text-danger"></p>',
    SubmitButton("Add Student Fee"),
  ],
});