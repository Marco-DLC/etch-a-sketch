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
            if (rainbowColorBtn.classList.contains('selected')) {
                square.style.backgroundColor = getRainbowColor();
            } else {
                square.style.backgroundColor = 'rgb(44, 53, 43)';
            };
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

const rainbowColorBtn = document.querySelector('#rainbowColorBtn');
const normalColorBtn = document.querySelector('#normalColorBtn');

rainbowColorBtn.addEventListener('click', () => {
    normalColorBtn.classList.remove('selected');
    rainbowColorBtn.classList.add('selected');
});

normalColorBtn.addEventListener('click', () => {
    rainbowColorBtn.classList.remove('selected');
    normalColorBtn.classList.add('selected');
});

function getRainbowColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};