const regBtn = document.querySelector(".submit_btn");
regBtn.addEventListener("click", registration);
async function registration() {
    const name = document.getElementById("input_name").value;
    const surname = document.getElementById("input_surname").value;
    const email = document.getElementById("input_email").value;
    const password = document.getElementById("input_password").value;
    const Json = JSON.stringify({ name, surname, email, password });
    console.log(Json);
    const responce =  await fetch('http://localhost:5000/auth/registration', {
        method: "POST",
        body: Json,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
    })
    if (!responce.ok) {
        alert("Пользователь с таким email уже существует");
    } else {
        alert("Регистрация прошла успешно");
        window.location.href = "../auth_pages/profile_page.html";
    }

}