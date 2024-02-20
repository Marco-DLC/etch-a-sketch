const container = document.querySelector('#innerContainer');
let desiredGridWidth = 100;

function createGrid(num) {
    if (container.hasChildNodes()) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    };

    const squareWidth = `${100 / num}%`;

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = squareWidth;
        square.style.paddingTop = squareWidth;

        square.addEventListener('mouseout', () => {
            square.style.backgroundColor = 'rgb(44, 53, 43)';
        });

        container.appendChild(square);
    };
};

createGrid(desiredGridWidth);

const gridSizeBtn = document.querySelector('#gridSizeBtn');

gridSizeBtn.addEventListener('click', () => {
    desiredGridWidth = prompt('Enter a number from 16-100 to select width');

    if (desiredGridWidth <= 100 && desiredGridWidth >= 16) {
        createGrid(desiredGridWidth);
    } else {
        alert('Sorry, that size isn\'t allowed. Please try again.');
    };
});

const resetGridBtn = document.querySelector('#resetGridBtn');

resetGridBtn.addEventListener('click', () => {
    createGrid(desiredGridWidth);
});