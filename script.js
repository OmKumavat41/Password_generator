const passwordBox = document.querySelector("#input")
const btn = document.querySelector("button")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbol = "!@#$%^&*()<>?~"
 
const allChar = upperCase+lowerCase+numbers+symbol

function createPassword(){
    let password =""
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length )]
    password += symbol[Math.floor(Math.random()*symbol.length)]


    while(length > password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)]
    }  

  passwordBox.value = password

}

btn.addEventListener("click",createPassword)

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}


