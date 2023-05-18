var form = document.querySelector('form');
var emailField = form.querySelector('.emailField');
var emailInput = emailField.querySelector('input');
var errorMessage = emailField.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
})

function checkEmail()
{
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value == '')
    {
        emailField.classList.add('showError');
        errorMessage.innerHTML = 'Email cannot be empty';
    }
    else if(!emailInput.value.match(emailPattern))
    {
        emailField.classList.add('showError');
        errorMessage.innerHTML = 'Please enter a valid email address';
    }
}