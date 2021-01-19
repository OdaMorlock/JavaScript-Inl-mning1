import User from './Models/User.js'
import {EmailIsValid} from './Functions.js'



let Email = document.getElementById('EmailAddress')

Email.addEventListener("keyup", Event => {
    if (EmailIsValid(Event.target.value) == true) {
        document.getElementById('Save_Btn').disabled = false
        $('.EmailAddress-Invalid').html(`<p> </p>`)
        return;
    }
    else{
        $('.EmailAddress-Invalid').html(`<p> Invalid Email Address Input </p>`)
        document.getElementById('Save_Btn').disabled = true
        return;
    }
})



document.getElementById('Form').addEventListener('submit', (e) => {
    e.preventDefault()



    const user = new User(
        document.getElementById('FirstName').value,
        document.getElementById('LastName').value,
        document.getElementById('EmailAddress').value,
        document.getElementById('PhoneNumber').value,
        document.getElementById('PostalAddress').value,
        document.getElementById('ZipCode').value,
        document.getElementById('PostOffice').value,
        )

console.log(user.FirstName),console.log(user.LastName)
    
console.log(user.DisplayName)
    
console.log(user.EmailAddress)
    
console.log(user.PhoneNumber)
    
console.log(user.PostOffice)
    
console.log(user.ZipCode)
    
console.log(user.PostalAddress)
    
console.log(user.Id)

$('.UserInfo').html(` <div id="flip">${user.DisplayName}</div><div id="panel"><div class = "PanelLayout"> <div class ="UserId"> User Id ${user.Id}</div><div class ="UserFirstName">User FirstName ${user.FirstName}</div><div class ="UserLastName">User LastName ${user.LastName}</div><div class ="UserEmailAddress"> User EmailAddress ${user.EmailAddress}</div><div class ="UserPhoneNumber">User PhoneNumber ${user.PhoneNumber}</div><div class ="UserPostalAddress"> User PostalAddress ${user.PostalAddress}</div><div class ="UserZipCode">User ZipCode ${user.ZipCode}</div><div class ="UserPostalOffice">User PostalOffice ${user.PostOffice}</div></div></div>`)  
    


$(document).ready(function() {

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    }); 

})

})



