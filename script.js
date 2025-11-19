// Custom JavaScript for Spice Kitchen

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Navbar Shrink (Bootstrap Scroll Behavior)
    const navbar = document.getElementById('mainNav');
    const shrinkThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > shrinkThreshold) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }
    });

    // 3. Contact Form Submission Handler (Client-Side Only)
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate a successful form submission (no actual backend call)
        // In a real application, you would use 'fetch' or 'XMLHttpRequest' here.

        // Hide errors and show success message
        errorMessage.classList.add('d-none');
        successMessage.classList.remove('d-none');

        // Clear the form after a short delay
        setTimeout(() => {
            contactForm.reset();
            successMessage.classList.add('d-none');
        }, 3000);
    });

    // 4. Reservation Form Submission Handler (Client-Side Only)
    const reservationForm = document.getElementById('reservationForm');
    const resSuccess = document.getElementById('resSuccess');
    const resError = document.getElementById('resError');

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate a successful reservation
        resError.classList.add('d-none');
        resSuccess.classList.remove('d-none');

        // Close modal and clear form
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
            modal.hide();
            reservationForm.reset();
            resSuccess.classList.add('d-none');
        }, 3000);
    });

});
