
function submit(value){

    var firstName=document.getElementById("firstname").value;
    var lastName=document.getElementById("lastname").value;
    var email=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
    var dateOfbirth=document.getElementById("dateOfbirth").value;
    var aboutme=document.getElementById("aboutme").value;
    var education=document.getElementById("education").value;
    var experiance=document.getElementById("experiance").value;

    formDetails = {
        firstName : firstName,
        lastName : lastName,
        email  : window.localStorage.getItem('email'),
        gender : gender,
        dateOfbirth : dateOfbirth,
        aboutme : aboutme,
        education : education,
        experiance : experiance
    }


        
switch (value) {
        case "1":
            var url = "http://localhost:8080/firstname";
            break;
        case "2":
            var url = "http://localhost:8080/lastname";
            break;
        case "3":
            var url = "http://localhost:8080/email";
            break;
        case "4":
            var url = "http://localhost:8080/gender";
            break;
        case "5":
            var url = "http://localhost:8080/dob";
            break;
        case "6":
            var url = "http://localhost:8080/aboutme";
            break;
        case "7":
            var url = "http://localhost:8080/education";
            break;
        case "8":
            var url = "http://localhost:8080/experiance";
            break;
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url);
    Http.setRequestHeader("Content-type", "application/json");
    Http.send(JSON.stringify(formDetails));

    Http.onreadystatechange = (e) => {
        window.location = 'myprofile.html';
        var email = Http.response;
    }
}

function logout(){
    window.localStorage.clear();
    window.location = '/Login/login.html';
}
