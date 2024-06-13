const loginform = document.querySelector("#login-form");

loginform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    const response = await fetch("http://localhost:3000/v1/api/account/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
    });
    const data = await response.json();
    console.log(data);
    if (!data.code) {
        window.location.href = "/dashboard";
    } else {
        alert(data.message);
    }
});