console.log(`loading Contact Form..`);

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const message = document.querySelector('#message');
const btn = document.querySelector('.contact-form button');
const banner = document.querySelector('.banner');

function showOnConsole() {
    console.log(`Your name is: ${firstName.value} ${lastName.value},\n and your message is: ${message.value}`);
    const insertBanner = document.createElement('div');
    insertBanner.classList.add('alert-success2');
    banner.append(insertBanner);

    const insertIcon = document.createElement('span');
    insertIcon.classList.add('icon');
    insertIcon.textContent = '✔';
    insertBanner.append(insertIcon);

    const insertBannermessage = document.createElement('span');
    insertBannermessage.classList.add('banner-message');
    insertBannermessage.textContent = `Thank you for contacting us,${firstName.value}`
    insertBanner.append(insertBannermessage);

    const insertBannerButton = document.createElement('button');
    insertBannerButton.classList.add('close');
    insertBannerButton.textContent = x;
    insertBanner.append(insertBannerButton);

}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    return showOnConsole();


})