

// export const containNumbers = value => {
//     return /\d/.test(value)
// }

// export function ValidateEmail(EmailAddress) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(EmailAddress);
// }

// export function Validate (input) {
//     let inputs = document.getElementsByTagName('input')
    
//     for (let input of inputs) {
//         input.addEventListener('keyup', (e) => {
//             if(e.target.value.length < 4) {
//                 document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//                 document.getElementById('Save_Btn').disabled = true
//             }
//             else {
//                 document.getElementById(`${e.target.id}-error`).innerText = ''
//                 document.getElementById('Save_Btn').disabled = false
//             }
//         })
//     } 
// }



export function EmailIsValid (Email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)
  }
