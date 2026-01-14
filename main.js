console.log(`loading Contact Form..`);

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const message = document.querySelector('#message');
const btn = document.querySelector('.contact-form button');
const bannerAlert = document.querySelector('#banner-alert');
const bannerMessage = document.querySelector('.banner-message');


function validateField(field) {
    if (!field.value) {
        field.classList.add('error-class');
        return false;
    }
    field.classList.remove('error-class');
    return true;
}
function showContact() {
    const isFirstValid = validateField(firstName);
    const isLastValid = validateField(lastName);
    const isMessageValid = validateField(message);

    if (!isFirstValid || !isLastValid || !isMessageValid) return;

    bannerAlert.classList.remove('hidden');
    bannerMessage.textContent = `Thank you for contacting us, ${firstName.value}`;
    console.log(`Name: ${firstName.value} ${lastName.value}\nMessage: ${message.value}`);
    firstName.value = '';
    lastName.value = '';
    message.value = '';
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    return showContact();

})
