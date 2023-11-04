
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js';
const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire({
        icon: 'success',
        title: '<h3 style="color: #00AD96 ">Great! You are now logged in. Click OK to proceed.</h3>',
        confirmButtonColor: "#00AD96",
        // iconColor: '#00AD96',
      }).then(() => {
        if (true) {
          window.location ='index.html'
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: '<h3 style="color: #00AD96 ">Oops...</h3>',
        text: 'Sorry,check the email or password',
        confirmButtonColor: "#00AD96",
        iconColor: '#00AD96',
      })
    });
})  
let input = document.querySelector('input');
        input.addEventListener('keyup',(e)=>{
            if(e.keyCode === 13){
                console.log(e.target.value)
                e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire({
        icon: 'success',
        title: '<h3 style="color: #00AD96 ">Great! You are now logged in. Click OK to proceed.</h3>',
        confirmButtonColor: "#00AD96",
        // iconColor: '#00AD96',
      }).then(() => {
        if (true) {
          window.location ='index.html'
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: '<h3 style="color: #00AD96 ">Oops...</h3>',
        text: 'Sorry,check the email or password',
        confirmButtonColor: "#00AD96",
        iconColor: '#00AD96',
      })
    });
            }
        })


// import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import {  signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// const provider = new GoogleAuthProvider();

// document.querySelector('#Google').addEventListener('click', ()=>{
// signInWithPopup(auth,provider)
//   .then((result) => {
//     console.log(result)
//     // // This gives you a Google Access Token. You can use it to access the Google API.
//     // const credential = GoogleAuthProvider.credentialFromResult(result);
//     // const token = credential.accessToken;
//     // // The signed-in user info.
//     // const user = result.user;
//     // alert(user)
//     // // IdP data available using getAdditionalUserInfo(result)
//     // // ...
//   }).catch((error) => {
//     console.log(error)
//     // // Handle Errors here.
//     // const errorCode = error.code;
//     const errorMessage = error.message;
//     // // The email of the user's account used.
//     // const email = error.customData.email;
//     alert(errorMessage)
//     // // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// })