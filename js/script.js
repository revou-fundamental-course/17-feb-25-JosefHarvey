const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const lastname2 = document.getElementById('last2-name');
const email = document.getElementById('email');
const packageSelect = document.getElementById('package');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error');

    errorDisplay.innerText = message;
    inputGroup.classList.add('error'); 
    inputGroup.classList.remove('success'); 
}


const setSuccess = element => {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector('.error');

    errorDisplay.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
};


const setErrorMessage = (message) => {
    const errorDisplay = document.querySelector('.inputgroup .error');
    errorDisplay.innerText = message;
};

const clearErrorMessage = () => {
    const errorDisplay = document.querySelector('.inputgroup .error');
    errorDisplay.innerText = '';
};


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const packageValue = packageSelect.value; 

   
    if (firstnameValue === '' && lastnameValue === '') {
        setErrorMessage('First name and last name are required');
    }   
    else if(firstnameValue ===''){
        setError(firstname, 'First name are required');
    }
    else if(lastnameValue ===''){
        setError(lastname, 'Last name are required');
    }
    else {
        setSuccess(firstname);
        setSuccess(lastname);
    }
    

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please provide a valid email');
    } else {
        setSuccess(email);
    }

  
    if (packageValue === "select") { 
        setError(packageSelect, "Please pick a city");
    } else {
        setSuccess(packageSelect);
    }
};

// Script for sliding banner

let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides-fade");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Hilangkan kelas aktif
    }

    slideIndex = (slideIndex + 1) % slides.length; // Looping otomatis
    slides[slideIndex].classList.add("active"); // Tambahkan kelas aktif

    setTimeout(showSlides, 2000); // Ubah slide setiap 2 detik
}

// Mulai slideshow setelah halaman dimuat
document.addEventListener("DOMContentLoaded", showSlides);

