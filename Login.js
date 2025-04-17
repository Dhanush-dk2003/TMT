function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful for ' + email);
        window.location.href = './Index/Index.html'; // Redirect to index page
    } else {
        alert('Please fill in all fields');
    }
}
