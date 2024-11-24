document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('userInfo', JSON.stringify({ name, age, email }));

    alert('Đăng ký thành công!');
    window.location.href = 'show.html';
});