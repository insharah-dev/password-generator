const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const special = "~!@#$%^&*()-+"


const uppercaseChecked = document.getElementById('uppercaseChecked')
const LowercaseChecked = document.getElementById('LowercaseChecked')
const numberChecked = document.getElementById('numberChecked')
const specialChecked = document.getElementById('specialChecked')

const btn = document.getElementById('btn')
const outputbtn = document.getElementById('outputbtn')
let passLength = +prompt("enter your password length: ")

if(passLength <1){
    alert("Enter a correct password length.")
}

btn&&btn.addEventListener('click',()=>{
 
let characters = ""
let pass = ""

if(uppercaseChecked.checked){
  characters+=uppercase
}
if(LowercaseChecked.checked){
  characters+=lowercase
}
if(numberChecked.checked){
  characters+=number
}
 if(specialChecked.checked){
  characters+=special
}
if(characters.length ===0){
    alert('please select atleast one option!')
    outputbtn.value =""
    return;
}


for(let i = 0; i<passLength; i++){
   
    pass+=characters[Math.floor(Math.random()*characters.length)]
    console.log(pass);
    outputbtn.value = pass
}

})




