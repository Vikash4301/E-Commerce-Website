const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form inputs
        var nameInput = document.querySelector('input[name="name"]');
        var emailInput = document.querySelector('input[name="email"]');
        var subjectInput = document.querySelector('input[name="subject"]');
        var messageInput = document.querySelector('textarea[name="message"]');

        // Check if any field is empty
        if (nameInput.value === '' || emailInput.value === '' || subjectInput.value === '' || messageInput.value === '') {
            // Display an alert if any field is empty
            alert("All fields are required.");
        } else {
            // If all fields are filled, submit the form
            event.target.submit();
        }
    }

    // Add event listener to the form submit button
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', handleSubmit);
});