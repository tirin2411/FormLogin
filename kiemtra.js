function validate() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
      
    if(u== "") {
        alert("Vui lòng nhập tên đăng nhập!");
        return false;
    }
    if(p == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
    }
    alert("Đăng nhập thành công! Xin chào "+u+"!");
    
    location.replace("/home.html");
    return true;
}