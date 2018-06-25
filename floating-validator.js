
function getValue() {

    return document.getElementById("number").value.toString();

}


function isFraction(number) {

    var signedFraction = /^-?[1-9]{1}[0-9]{0,9}[.,]{1}[0-9]{1,5}$/,
        wholeNumber = /^-?[1-9]{1}[0-9]{0,9}$/,
        leadingZeroFraction = /^-?[0]{1}[.,]{1}[0-9]{0,4}[1-9]{1}$/,
        trailingZeroFraction = /^-?[0]{1}[.,]{1}[1-9]{0,4}[1-9]{1}$/,
        unsignedFraction = /^[0]{1}[.,]{1}[1-9]{1}[0-9]{1,4}$/;


    var result = signedFraction.test(number)
    || wholeNumber.test(number)
    || leadingZeroFraction.test(number)
    || trailingZeroFraction.test(number)
    || unsignedFraction.test(number);

    return result;

}

function validate() {

    var value = getValue();

    var signedFraction = /^-?[1-9]{1}[0-9]{0,9}[.,]{1}[0-9]{1,5}$/,
        wholeNumber = /^-?[1-9]{1}[0-9]{0,9}$/,
        leadingZeroFraction = /^-?[0]{1}[.,]{1}[0-9]{0,4}[1-9]{1}$/,
        trailingZeroFraction = /^-?[0]{1}[.,]{1}[1-9]{0,4}[1-9]{1}$/,
        unsignedFraction = /^[0]{1}[.,]{1}[1-9]{1}[0-9]{1,4}$/;


    var result = signedFraction.test(value)
        || wholeNumber.test(value)
        || leadingZeroFraction.test(value)
        || trailingZeroFraction.test(value)
        || unsignedFraction.test(value);


    if(result){
        document.getElementById("validation").innerHTML = "Valid number!";
    }
    else {
        document.getElementById("validation").innerHTML = "Invalid number!";
    }
}