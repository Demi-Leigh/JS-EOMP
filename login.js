let form = document.querySelector(".login-form");

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://pacific-hollows-19982.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);

        localStorage.setItem("jwt-token", data["access_token"]);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        // myStorage = window.localStorage;
        // myStorage.setItem("jwt-token", data["access_token"]);
        // myStorage.setItem("username", username);
        // myStorage.setItem("password", password);
        window.location.href = "./home.html";
      }
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  login(username, password);
});
