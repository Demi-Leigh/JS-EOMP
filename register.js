function register() {
  let full_name = document.querySelector(".input.fullname").value;
  let username = document.querySelector(".input.password").value;
  let password = document.querySelector(".input.password").value;
  let email = document.querySelector(".input.email").value;
  console.log(full_name);
  console.log(username);
  console.log(password);
  console.log(email);

  fetch("https://pacific-hollows-19982.herokuapp.com/user-registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: full_name,
      username: username,
      password: password,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      console.log("there was error with registering");
      console.log("error", error);
      response.status < 400;
    });
}
console.log(document.querySelector(".form-container"));

document.querySelector(".form-container").addEventListener("click", (e) => {
  e.preventDefault();

  register();
});
