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

function FormField({ name, label, error, type = "text", min, max}) {
  return Div({
    attributes: {
      class: 'col mb-3'
    }, children: [
      Label(name, label),
      createElement('input', {
        type: type,
        min: min,
        max: max,
        class: 'form-control',
        name: name,
        required: true
      }),
      `<div class="invalid-feedback" id="${name}-error" data-field="${name}">${error}</div>`
    ]
  })
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
    if(value != undefined)
    element.setAttribute(attr, value);
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
  return createElement('label', {
    class: 'form-label',
    for: forN
  }, [
    title
  ])
}