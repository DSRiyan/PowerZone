


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

    thankYouMessage.textContent = `Thank you ${name}, You have been enrolled in the ${batch} batch for ${method}.`;
    thankYouPopup.classList.add('active');
});

closeThankYou.addEventListener('click', () => {
    location.reload(); // Refresh the page
});




// Show Scroll to Top Button on Scroll
window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
