let register = document.querySelector('#btnSignUp');
let display = document.querySelector('#btnDisplay');
// Empty array
let details = [];
// Adding the Event listener //
register.addEventListener('click', (e)=>{
    e.preventDefault();
// Retrieving values from information form
    let firstName = document.querySelector('#firstName').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let user = personDetails(firstName, surname, email);
    // Loading object into an array
    details.push(user);
    document.querySelector('#firstName').value = ''
    document.querySelector('#surname').value = ''
    document.querySelector('#email').value = ''
    console.log(details);
    // Saved to local memory
    localStorage.setItem('userDetails', JSON.stringify(details));

});

function personDetails(firstName, surname, email) {
    return {
        firstName: firstName,
        surname: surname,
        email : email,
    }
}

// Display
display.addEventListener('click', ()=> {
    let results = JSON.parse(localStorage.getItem('userDetails'));
    if(results.length) {
        console.clear(); 
        console.table(results);
    }else {
        console.log("Invalid Request");
    }
})