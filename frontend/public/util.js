function createModal(id, title, body, footer) {
  const foot = "";
  if (footer != undefined) {
    foot = `<div class="modal-footer">
    ${footer}
  </div>`;
  }
  let root = document.createElement("div");
  root.className = "modal fade";
  root.id = id;
  root.tabIndex = -1;
  root.ariaHidden = true;
  root.innerHTML = `<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">${title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				${body}
			</div>
      ${foot}
		</div>
	</div>`;
  return root;
}

function FormField({ name, label, error, type = "text", min, max }) {
  return Div({
    attributes: {
      class: "col mb-3",
    },
    children: [
      Label(name, label),
      createElement("input", {
        type: type,
        min: min,
        max: max,
        class: "form-control",
        name: name,
        required: true,
        placeHolder: "Enter here"
      }),
      `<div class="invalid-feedback" id="${name}-error" data-field="${name}">${error}</div>`,
    ],
  });
}

function SelectOption({ name, label, options, error }) {
  let root = document.createElement("div");
  root.className = "col mb-3";
  let select = document.createElement("select");
  select.className = "form-select";
  select.ariaLabel = label;
  select.name = name;
  select.id = name;
  select.required = true;
  select.innerHTML = `<option value>Choose</option>`;
  for (const key in options) {
    select.innerHTML += `<option value="${key}">${options[key]}</option>`;
  }
  root.innerHTML = `<label for="${name}" class="form-label">${label}</label>`;
  root.append(select);
  root.innerHTML += `<div class="invalid-feedback" id="${name}-error">${error}</div>`;
  return root;
}

function createElement(tagName, attributes = {}, children = []) {
  const element = document.createElement(tagName);
  for (const [attr, value] of Object.entries(attributes)) {
    if (value != undefined) element.setAttribute(attr, value);
  }

  for (const child of children) {
    if (typeof child === "string") {
      element.innerHTML += child;
    } else {
      element.appendChild(child);
    }
  }

  return element;
}

function Div({ attributes = {}, children = [] }) {
  return createElement("div", attributes, children);
}

function Form({ attributes = {}, children = [] }) {
  attributes.action = "#";
  attributes.method = "POST";
  attributes.className = "needs-validation";
  attributes.novalidate = true;
  return createElement("form", attributes, children);
}

function SubmitButton(title) {
  let button = createElement("button", {
    class: "btn btn-primary",
    type: "submit",
  });
  button.innerHTML = title;
  return button;
}

function Label(forN, title) {
  return createElement(
    "label",
    {
      class: "form-label",
      for: forN,
    },
    [title]
  );
}

function Row(children) {
  return createElement(
    "div",
    {
      class: "row",
    },
    children
  );
}

function handleFormSubmit(event, onValid) {
  event.preventDefault();
  const form = event.target;

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
  } else {
    onValid(form);
  }
}

function SimpleToast(message, style) {
  return createElement(
    "div",
    {
      class: "toast show",
      'data-bs-autohide':"true",
      'data-bs-delay': "1000"
    },
    [
      `<div class="d-flex ${style}">
          <div class="toast-body">${message}</div>
          <button type="button" class="nav-link ${style} me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
          </button>
      </div>`,
    ]
  );
}


function el(selector) {
  return document.querySelector(selector);
}