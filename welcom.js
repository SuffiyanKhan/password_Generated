


import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js';
// let log_out = document.querySelector('#log_out');
log_out.addEventListener('click',()=>{
signOut(auth).then(() => {
  // Sign-out successful.  
  console.log('user logout successfully');
  window.location = 'signup.html'
}).catch((error) => {
  // An error happened.  
  console.log(error)
});
})
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const email = user.email
    console.log(uid)
    console.log(email)    
    // document.querySelector('#email').innerHTML = email            
  } else {
    window.location = 'login.html'
  }  
});  


















// ====================password generated====================//
var passLength = document.getElementById("length");
var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var result = document.getElementById("result");


var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '0123456789';
var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

let gP =document.querySelector('#gP');
document.querySelector('#gP').addEventListener('click',()=>{

    if (uppercase.checked == true || lowercase.checked == true || numbers.checked == true || symbols.checked == true) {
        if (passLength.value <= 50) {
        if (passLength.value >= 4) {


    var password = "";

    if (uppercase.checked == true) {
        password += uppercaseChars
    }

    if (lowercase.checked == true) {
        password += lowercaseChars
    }

    
    if (numbers.checked == true) {
        password += numberChars
    }

    if (symbols.checked == true) {
        password += specialChars
    }
    
        var genPass = "";

        for (let i = 0; i < passLength.value; i++) {
            var genratePass = Math.random() * password.length;
            genPass += password.charAt(Math.floor(genratePass))
        }
        if (genPass.length == passLength.value) {
            result.innerText = genPass
        }

        
        
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF">Minimum Password Length 4</h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF">Maximum Password Length 50</h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
    }else{
        Swal.fire({
            icon: 'error',
            title: '<h5 style="color:#FFF"> Please tick any one checkbox </h5>',
            iconColor: '#FFF',
            background: '#23235B'
          })
    }
  })
  //  update image //
//   document.getElementById('myFileInput').addEventListener("change",function(){
//     const reader = new FileReader();
//     location.reload();

//     reader.addEventListener("load", () => {
//         localStorage.setItem("recent_image", reader.result)
//     })

//     reader.readAsDataURL(this.files[0])
// })
// document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataURL = localStorage.getItem("recent_image");
//     if(recentImageDataURL){
//         // document.getElementById("imgPreview").setAttribute("src",recentImageDataURL)
//         document.getElementById("imgPreview").style.backgroundImage = `url(${recentImageDataURL})`
//         // location.reload();
//     }
// })
  // function textCopy() {

document.querySelector('.btn').addEventListener('click',()=>{
    if (result.textContent != "") {
        var textToCopy = result.textContent;
        var textArea = document.createElement('textarea');
        textArea.value = textToCopy;
      
        document.body.appendChild(textArea);
      
        textArea.select();
        document.execCommand('copy');
      
        document.body.removeChild(textArea);
    }
})

// import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { auth } from './config.js';
// let log_out = document.querySelector('#log_out');
// log_out.addEventListener('click',()=>{
// signOut(auth).then(() => {
//   // Sign-out successful.  
//   console.log('user logout successfully');
//   window.location = 'signup.html'
// }).catch((error) => {
//   // An error happened.  
//   console.log(error)
// });
// })
// import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     const email = user.email
//     console.log(uid)
//     console.log(email)    
//     // document.querySelector('#email').innerHTML = email            
//   } else {
//     window.location = 'login.html'
//   }  
// });  



// ===============google signup ================//

// import { deleteUser } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


// const user = auth.currentUser;

// log_out.addEventListener('click',()=>{
//   deleteUser(user).then(() => {
//     // User deleted.
    
//     alert(user)
//   }).catch((error) => {
//     // An error ocurred
//     // ...
//     alert(error)
//   });
// })
// email.innerHTML = 'hello world'
