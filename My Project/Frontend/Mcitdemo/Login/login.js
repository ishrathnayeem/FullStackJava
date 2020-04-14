function signin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


        signinDetails = {
            email: email,
            password: password
        }
    
        const signURL = "http://localhost:8080/login";
        const Http = new XMLHttpRequest();
        Http.open("POST", signURL);
        Http.setRequestHeader("Content-type", "application/json");
        Http.send(JSON.stringify(signinDetails));
    
        Http.onreadystatechange = (e) => {
            var email = Http.response;
            if (email) {
                window.localStorage.setItem('email', email);
                window.location = '/MyProfile/myprofile.html';
            }
        }
    }
        

