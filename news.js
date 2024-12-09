// script.js
document.addEventListener('DOMContentLoaded', function() {
    const headlines = document.querySelectorAll('.headline p');
    headlines.forEach(headline => {
        headline.addEventListener('click', () => {
            alert(headline.textContent);
        });
    });
});
