document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const repassword_mess = document.getElementById('repassword-message');
    console.log(repassword_mess)
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    if (password !== repassword) {
        repassword_mess.innerHTML = 'Mật Khẩu không khớp';
        repassword_mess.classList.add('show')
        return;
    }
    repassword_mess.classList.remove('show')
    console.log(password)
    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    const response = await fetch('http://localhost:3000/v1/api/account/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObject)
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
        window.location.href = '/dashboard';
    } else {
        alert(data.message);
    }
});