let priceToggle = document.getElementById('switch');
let yearly = document.querySelectorAll('.yearly');
let monthly = document.querySelectorAll('.monthly');

function activateToggle() {
    if (priceToggle.checked) {
        yearly.forEach(price => price.classList.add('hidden'));
        monthly.forEach(price => price.classList.remove('hidden'));
    } else {
        yearly.forEach(price => price.classList.remove('hidden'));
        monthly.forEach(price => price.classList.add('hidden'));
    }
}

priceToggle.addEventListener('click', activateToggle);