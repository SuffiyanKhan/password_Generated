

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js';

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
let input = document.querySelector('input');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      const user = res.user;
      console.log(user)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Signup has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
        if(true){
          window.location ='login.html'
        }
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      alert( errorCode,errorMessage)
    });
})  
input.addEventListener('keyup',(e)=>{
  if(e.keyCode === 13){
    e.preventDefault();
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
          // Signed up 
          const user = res.user;
          console.log(user)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Signup has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(() =>{
            if(true){
              window.location ='login.html'
            }
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          alert( errorCode,errorMessage)
        });
  }
})  



