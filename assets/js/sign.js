function colorChange(event) {


    var btn = document.querySelectorAll('input[type="button"]');
    btn.forEach(function (elm) {
        elm.style.color = "#777e88";


    });
    event.target.style.color = "#23aa82";

    displace();
}

function displace() {
    document.getElementById('login1').classList.toggle('active')
    document.getElementById('login2').classList.toggle('active')

}

function loginEmail(event) {
    event.preventDefault();
    let emails = document.getElementById('emails').value;
    let passwords = document.getElementById('passwords').value;


    let loginpage = JSON.parse(localStorage.getItem('userDetails'));
    let isMatch = false;

    for (let values of loginpage) {
        let elementEmails = values.Email;
        let elementPasswords = values.Password;

        if (elementEmails == emails && elementPasswords == passwords) {
            isMatch = true;
            break;
        }
    }

    if (isMatch) {
        localStorage.setItem('User_Detail', emails);
        window.open('../index.html')
    } else {
        document.getElementById('message').innerText = 'Invalid Credentials'

    }
}



function loginPhone(event) {
    event.preventDefault();
    let Phone = document.getElementById('output').value;
    let password = document.getElementById('password').value;


    let loginpage = JSON.parse(localStorage.getItem('userDetails'));
    let isMatch = false;

    for (let value of loginpage) {
        let elementPhone = value.Phone;
        let elementPasswords = value.Password;
        if (elementPhone == Phone && elementPasswords == password) {
            isMatch = true;
            break;
        }
    }

    if (isMatch) {
        localStorage.setItem('User_phoneDetail', Phone);
        window.open('../index.html')
    } else {
        document.getElementById('messages').innerText = 'Invalid Credentials'

    }
}


