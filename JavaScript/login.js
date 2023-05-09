//login
// Xác định các phần tử HTML
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.getElementById("login-btn");

// Gán sự kiện cho nút Submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành động mặc định của nút Submit

  // Kiểm tra xem người dùng đã nhập đầy đủ thông tin hay chưa
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  // Chuyển đến trang "layout.html"
  window.location.href = "/HTML/main_layout.html";
});
//end