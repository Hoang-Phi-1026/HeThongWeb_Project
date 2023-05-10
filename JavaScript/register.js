//form register
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault(); 
  
    if(validateForm()){
        alert("Bạn đã đăng ký tài khoản thành công!");
        location.reload(); //load lại trang
        return true;
    }
  });
  
  function validateForm(){
    // Lấy giá trị các trường dữ liệu
    var name = document.getElementById("username").value;
    var email = document.getElementsByName("email")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var day = document.getElementsByName("day")[0].value;
    var month = document.getElementsByName("month")[0].value;
    var year = document.getElementsByName("year")[0].value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementsByName("confirm_password")[0].value;
  
    // Kiểm tra dữ liệu nhập vào
    if(name == "" || email == "" || phone == "" || day == "" || month == "" || year == "" || password == "" || confirmPassword == ""){
        alert("Vui lòng nhập đầy đủ thông tin!"); // Thông báo lỗi nếu có trường dữ liệu bị bỏ trống
        return false;
    }
  
    if(!email.endsWith("@gmail.com")){
        alert("Email phải có định dạng @gmail.com!"); // Thông báo lỗi nếu email không đúng định dạng
        return false;
    }
  
    if(!/^\d{10}$/.test(phone)){
        alert("Số điện thoại phải đủ 10 số!"); // Thông báo lỗi nếu số điện thoại không đúng định dạng
        return false;
    }
  
    if(!/^\d+$/.test(day) || !/^\d+$/.test(month) || !/^\d+$/.test(year)){
        alert("Ngày tháng năm phải là số!"); // Thông báo lỗi nếu ngày tháng năm không đúng định dạng
        return false;
    }
  
    if(password != confirmPassword){
        alert("Mật khẩu và xác nhận mật khẩu không giống nhau!"); // Thông báo lỗi nếu mật khẩu và xác nhận mật khẩu không giống nhau
        return false;
    }
  
    // Nếu dữ liệu hợp lệ, trả về true
    return true;
  }
  //end