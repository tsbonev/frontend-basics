
var fnameField = document.getElementById("fname");
var lnameField = document.getElementById("lname");
var egnField = document.getElementById("egn");
var ageField = document.getElementById("age");
var addressField = document.getElementById("address");
var passwordField = document.getElementById("password");

var nameRegex = /^[\w]{1,15}$/;
var egnRegex = /^[\d]{10}$/;
var addressRegex = /^[\w]{1,100}$/;
var passwordRegex = /^[a-zA-Z0-9]{6,18}$/;


function trySubmit() {

    var children = document.getElementById("form").childNodes;

    var hasErrors = false;

    children.forEach(function (element) {

        if(element.tagName == "span" && element.innerHTML != ""){
            console.log(element);
            this.hasErrors = true;
        }

    })

    if(hasErrors){
        alert("Please fix your errors");
        return false;
    }

    return true;

}

function validateField(field, regex, error) {

    var value = field.value;
    var errorArea = document.getElementById(field.id + "-error");

    console.log(regex.test(value.toString()));

    if(!regex.test(value)){
        errorArea.innerHTML  = error;
    }
    else {
        errorArea.innerHTML = "";
    }

}

function validateNumber(field, rangeMin, rangeMax, error){

    var value = field.value;
    var errorArea = document.getElementById(field.id + "-error");

    if(field.value < rangeMin || field.value > rangeMax){
        errorArea.innerHTML  = error;
    }
    else {
        errorArea.innerHTML = "";
    }

}


fnameField.addEventListener("blur", function () {
    new validateField(fnameField, nameRegex, "First name must be between 1 and 15 symbols")
})

lnameField.addEventListener("blur", function () {
    new validateField(lnameField, nameRegex, "Last name must be between 1 and 15 symbols")
})

egnField.addEventListener("blur", function () {
    new validateField(egnField, egnRegex, "EGN must be exactly 10 digits")
})

ageField.addEventListener("blur", function () {
    new validateNumber(ageField,18, 118, "Age must be between 18 and 118")
})

addressField.addEventListener("blur", function () {
    new validateField(addressField, addressRegex, "Address must be between 1 and 100 symbols")
})

passwordField.addEventListener("blur", function () {
    new validateField(passwordField, passwordRegex, "Password must be between 6 and 18 latin characters and/or numbers")
})


