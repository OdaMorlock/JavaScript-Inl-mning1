// export const validate = (value, min = 4, callback) => {
//     if(value.length < min){
//         callback({statusCode: 4001, message: `uppfyller inte kravet på ${min} tecken.`})
//     }
       
//     else{
//         callback({statusCode: 2001, message: `uppfyller kravet på ${min} tecken.`})
//     }
        
// }

// export const containNumbers = value => {
//     return /\d/.test(value)
// }

// export function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// export function Validate (input) {
//     let inputs = document.getElementsByTagName('input')
    
//     for (let input of inputs) {
//         input.addEventListener('keyup', (e) => {
//             if(e.target.value.length < 4) {
//                 document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
//                 document.getElementById('add_btn').disabled = true
//             }
//             else {
//                 document.getElementById(`${e.target.id}-error`).innerText = ''
//                 document.getElementById('add_btn').disabled = false
//             }
//         })
//     } 
// }