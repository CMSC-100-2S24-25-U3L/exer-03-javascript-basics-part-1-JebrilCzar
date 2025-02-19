/*A function for validating if 2 passwords match.
The function should accept 2 string parameters. Imagine that these represent the input from a
signup form’s password fields.
*/

//this function will validate if 2 passwords match
function validatePassword(password1, password2){

    //will first check if two passwords will match then will proceed to check if 
    //other conditions are passed
    if ((password1==password2)){
        var hasEightChar = false;
        var hasUpper = false;
        var hasLower = false;
        var hasNumber = false;
        //charCodeAt() is used to convert characters to ASCII Values
        //will check if password has at least 8 characters
        if(password1.length >= 8){
            hasEightChar = true;
        }
        //will check if password has atleast 1 lower case letter
        for (var a = 0; a < password1.length; a++){
            if (password1.charCodeAt(a)>=97 & password1.charCodeAt(a)<=122){
                hasLower=true;
            }
        }
        //check if password has atleast one upper case letter
        for (var a = 0; a < password1.length; a++){
            if (password1.charCodeAt(a)>=65 & password1.charCodeAt(a)<=90){
                hasUpper=true;
            }
        }
        //check if password has atleast one number
        for (var a = 0; a < password1.length; a++){
            if (password1.charCodeAt(a)>=48 & password1.charCodeAt(a)<=57){
                hasNumber=true;
            }
        }
        //will only return if all for variables are true
        if (hasEightChar & hasLower & hasUpper & hasNumber){return true}else{return false}
    }else{
        return false;
    }
} 
/*
console.log(validatePassword("helloworld","hello"));
console.log(validatePassword("hello","hello"));
console.log(validatePassword("hello1234","hello1234"));
console.log(validatePassword("Hello1234","Hello1234"));
console.log(validatePassword("HELLO1234","HELLO1234"));
*/

//This function will reverse the password string
function reversePassword(password){
    var array1 = new String;

    //this loop will insert each character starting from the end instead of the beginning of the string
    for (let i=0; i<password.length; i++){
        array1 = array1.concat(password[password.length-1-i]);
    }
    return array1;
}


//console.log(reversePassword("Hello1234"));

function storePassword(name, password1, password2){
    var newpass = password1;
    
    //ifelse statement will change if the two passwords match
    if (validatePassword(password1,password2)){
        newpass = reversePassword(password1);
    }

    var username = {
        name: name,
        newpassword: newpass,
    }

    return username;

}

//test 
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
//https://www.w3schools.com/jsref/jsref_concat_string.asp <= used concatenate function
//https://www.w3schools.com/jsref/jsref_charcodeat.asp <= used charcodeat function to convert string to ascii value