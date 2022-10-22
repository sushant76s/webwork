function submit() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var email = document.getElementById('email').value
    var cpassword = document.getElementById('cnf-password').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password, cpassword)
}

function checkusername(username) {
    if(username.length > 5) {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username-error').innerHTML=''
    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username-error').innerText='username must be greater than 5 char'
    }
}

function checkemail(email) {
    if(email.length > 8 && email.includes('@gmail')) {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email-error').innerHTML=''
    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email-error').innerText='Enter a valid email'
    }
}

function checkpassword(password) {
    if(password.length > 8 && password.includes('.')) {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password-error').innerHTML=''
    }
    else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password-error').innerText='Enter a valid password & must include dot and > 8 char'
    }
}

function checkpasswordmatch(password, cpassword) {
    if(password == cpassword && password!='') {
        document.getElementById('cnf-password').classList.replace('error', 'success')
        document.getElementById('cnf-password-error').innerHTML=''
        document.getElementById('cnf-password').classList.add('success')
    }
    else {
        document.getElementById('cnf-password').classList.add('error')
        document.getElementById('cnf-password-error').innerText='Password not match'
    }
}