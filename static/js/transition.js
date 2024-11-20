document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = button.closest('form').action;
        }, 1000); // Match the duration of the fadeOut animation
    });
});