const loginBtn = document.querySelector(".submit_btn");
loginBtn.addEventListener("click", login);
async function login() {
    const email = document.getElementById("input_email").value;
    const password = document.getElementById("input_password").value;
    const Json = JSON.stringify({ email, password });
    const responce =  await fetch('http://localhost:5000/auth/login', {
        method: "POST",
        body: Json,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })
    if (!responce.ok) {
        alert("Некорректный пароль или почта");
    } else {
        alert("Вход прошел успешно");
        window.location.href = "../auth_pages/profile_page.html";
    }

}