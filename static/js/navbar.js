document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'home') {
                    navbarLinks.classList.add('hidden');
                } else {
                    navbarLinks.classList.remove('hidden');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add animation class after a short delay
    setTimeout(() => {
        navbar.classList.remove('hidden-navbar');
    }, 100);
});