// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const button = document.getElementById('submit-button');
const main = document.getElementById('contact-page');

function changeContent() {
    const par = document.createElement('p');
    par.style.fontSize = '24px';
    par.innerHTML = 'Thank You for your message!'
    main.innerHTML = '';
    main.append(par);
    main.style.alignItems = 'center';
    main.style.justifyContent = 'start';
}

button.addEventListener('click', changeContent);




