let login = document.querySelector("form");

login.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!name || !password) {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
        return;
    }

    let users_data = JSON.parse(localStorage.getItem("users"));

    if (!users_data) {
        alert("Chưa có tài khoản nào được đăng ký!");
        return;
    }

    let current_user = users_data.find(
        (u) => u.name === name && u.password === password
    );

    if (current_user) {
        localStorage.setItem("current_user", JSON.stringify(current_user));
        location.href = "../webpages/home.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
});