let register = document.querySelector("form");

register.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Kiểm tra điền thiếu thông tin
    if (!name || !email || !password) {
        alert("Vui lòng điền đầy đủ Username, Email và Password!");
        return;
    }

    let users_data = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra trùng tên đăng nhập
    let isExisted = users_data.some((u) => u.name === name);
    if (isExisted) {
        alert("Tên đăng nhập này đã tồn tại, vui lòng chọn tên khác!");
        return;
    }

    users_data.push({
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users_data));
    alert("Đăng ký thành công!");
    location.href = "../index.html";
});