


// CONTACT US FORM POP UP 
const contactForm = document.getElementById('contactForm');
const thankYouPopup = document.getElementById('thankYouPopup');
const closeThankYou = document.getElementById('closeThankYou');
const thankYouMessage = document.getElementById('thankYouMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const method = document.getElementById('method').value;

    thankYouMessage.textContent = `Thank you, ${name} :) You have been enrolled in the ${batch} batch for ${method}.`;
    thankYouPopup.classList.add('active');
});

closeThankYou.addEventListener('click', () => {
    window.open('index.html', '_blank');;
});
