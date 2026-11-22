let login = document.querySelector("form")

login.addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.getElementById("name").value.trim()
    let password = document.getElementById("password").value.trim()

    // Lấy dữ liệu users từ localStorage
    let users_data = JSON.parse(localStorage.getItem("users"))

    // Kiểm tra nếu chưa có dữ liệu người dùng nào đăng ký
    if (!users_data) {
        alert("Chưa có tài khoản nào được đăng ký!")
        return
    }

    // Tìm kiếm user khớp với tên đăng nhập và mật khẩu
    let current_user = users_data.find(
        u => u.name === name && u.password === password
    )

    if (current_user) {
        localStorage.setItem("current_user", JSON.stringify(current_user))
        location.href = "../home.html"
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!")
    }  
})