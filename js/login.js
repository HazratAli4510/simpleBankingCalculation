// Login Validation
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', function () {
    //User name
    const userNameField = document.getElementById('User-name')
    const username = userNameField.value

    // user password
    const userPasswordFeild = document.getElementById('user-password')
    const userPassword = userPasswordFeild.value
    
    //redirect to banking page if username and password is valid
    if (username == 'userName' && userPassword == 'passWord') {
        location.href = 'banking.html'
    } else {
        alert('Please enter valid information')
    }
})