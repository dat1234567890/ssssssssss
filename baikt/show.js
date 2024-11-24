const userInfo = JSON.parse(localStorage.getItem('userInfo'));

if (userInfo) {
    document.getElementById('userName').innerText = 'Tên: ' + userInfo.name;
    document.getElementById('userAge').innerText = 'Tuổi: ' + userInfo.age;
    document.getElementById('userEmail').innerText = 'Email: ' + userInfo.email;
} else {
    document.getElementById('userName').innerText = 'Không có thông tin';
    document.getElementById('userAge').innerText = '';
    document.getElementById('userEmail').innerText = '';
}