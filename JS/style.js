document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.skills');
    const paragraphs = document.querySelectorAll('.text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and paragraphs
            buttons.forEach(btn => btn.classList.remove('active'));
            paragraphs.forEach(paragraph => paragraph.classList.remove('active'));

            // Add 'active' class to the clicked button and corresponding paragraph
            button.classList.add('active');
            document.querySelector(`.${button.dataset.target}`).classList.add('active');
        });
    });
});

document.querySelector('.back-to-top a').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});