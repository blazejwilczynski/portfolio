const buttons = document.querySelectorAll('.counter-button');
let counter = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('previous-counter')) {
            counter--;
        }
        else if (button.classList.contains('next-counter')) {
            counter++;
        }

        const counterText = document.querySelector('.counter');
        counterText.textContent = counter;

        if (counter > 0) {
            counterText.style.color = 'lightseagreen';
        }
        else if (counter < 0) {
            counterText.style.color = 'lightcoral';
        }
        else {
            counterText.style.color = 'rgb(60,60,60)';
        }
    })
})