//login

const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("login-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); 

//regex
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  window.location.href = "/HTML/main_layout.html";
});
//end