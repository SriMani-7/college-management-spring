async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const json = await response.json();
    return json;
  } else {
    const text = await response.text();
    return text;
  }
}

async function get(url) {
  const response = await fetch(url);
  return handleResponse(response);
}

async function post(url, data) {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function postForm(url, form) {
  const jsonObject = {};
  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
  console.log("form data", jsonObject);
  return post(url, jsonObject);
}

async function put(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

async function del(url) {
  const response = await fetch(url, {
    method: "DELETE",
  });
  return handleResponse(response);
}
