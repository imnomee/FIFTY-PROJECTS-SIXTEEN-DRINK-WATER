const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percentage');
const remained = document.getElementById('remained');
const bigCup = document.querySelector('.cup-large');
console.log(bigCup);

cups.forEach((cup, i) => {
    cup.addEventListener('click', () => {
        highlightcups(i);
    });
});
updateBigCup();

function highlightcups(i) {
    if (
        cups[i].classList.contains('full') &&
        !cups[i].nextElementSibling.classList.contains('full')
    ) {
        i--;
    }
    cups.forEach((cup, i2) => {
        if (i2 <= i) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = cups.length;
    const bigCupSize = bigCup.style.height;

    if (fullCups === 0) {
        percent.style.visibility = 'hidden';
        percent.style.height = 0;
    } else {
        percent.style.visibility = 'visible';
        percent.style.height = `${(fullCups / totalCups) * 330}%`;
        percent.innerText = `${(fullCups / totalCups) * 100}%`;
    }
}
