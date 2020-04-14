
function signup() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("semail").value;
    var password = document.getElementById("spassword").value;

    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)

    // if (firstName && lastName && email & password) {
        signupDetails = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        const signUpURL = "http://localhost:8080/signup";
        const Http = new XMLHttpRequest();
        Http.open("POST", signUpURL);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send(JSON.stringify(signupDetails));

        Http.onreadystatechange = (e) => {
            window.location = '/Login/login.html';
            var email = Http.response;
        }
    }


// }

