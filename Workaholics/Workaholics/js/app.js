function displayTextbox() {
    let val = document.getElementById('Category').value;
    if (val == "Applicant") {

        document.getElementById('Recruiter').style.display = "none"
        document.getElementById('Applicant').style.display = "block"
    }
    else {

        document.getElementById('Recruiter').style.display = "block"
        document.getElementById('Applicant').style.display = "none"
    }

}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('eye').classList.remove("fa-eye-slash")
        document.getElementById('eye').classList.add("fa-eye");
    } else {
        x.type = "password";
        document.getElementById('eye').classList.add("fa-eye-slash");
        document.getElementById('eye').classList.remove("fa-eye");
    }
}

const handleInput = (e) => {
    e.preventDefault();
    let obj = {}
    if (document.getElementById('Category').value == "Recruiter") {

        document.querySelectorAll('input:not(.Applicant input)').forEach((element) => {
            // if (element.classList.contains('recruiter') == false) {
            obj[element.name] = element.value;
            // }
        });
    }
    else{
        document.querySelectorAll('input:not(.Recruiter input)').forEach((element) => {
            // if (element.classList.contains('recruiter') == false) {
            obj[element.name] = element.value;
            // }
        });

    }
    obj.type = "recruiter"

    fetch('http://192.168.1.6:4444/auth/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    }).then(y => {
        return y.json();
    }).then(y => {
        console.log(y);
    });
    console.log(obj);
}