getProfileInfo();
function getProfileInfo() {

    const loginURL = "http://localhost:8080/profile?email=" + window.localStorage.getItem('email');

    fetch(loginURL)
        .then(response => response.json())
        .then(data => {
            console.log(data) // Prints result from `response.json()` in getRequest
            if (data.firstName != null) {
                document.getElementById("firstname").innerHTML = data.firstName;
            }
            if (data.lastName != null) {
                document.getElementById("lastname").innerHTML = data.lastName;
            }
                if (data.email != null) {
                    document.getElementById("email").innerHTML = data.email;
            }
                if (data.gender != null) {
                 document.getElementById("gender").innerHTML = data.gender;
            }
            if (data.aboutme != null) {
                document.getElementById("aboutMe").innerHTML = data.aboutme;
            }
            if (data.experiance != null) {
                document.getElementById("experiance").innerHTML = data.experiance;
            }
            if (data.education != null) {
                document.getElementById("education").innerHTML = data.education;
            }
        })
        .catch(error => console.error(error))
}
function logout(){
    window.localStorage.clear();
    window.location = '/Login/login.html';
}