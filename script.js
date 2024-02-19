const container = document.querySelector('#innerContainer');
const desiredGridWidth = 16;

function createGrid(num) {
    container.innerHtml = '';

    const squareWidth = `${100 / num}%`;

    for (let i = 0; i < num * num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareWidth;
        square.style.paddingTop = squareWidth;
        container.appendChild(square);
    };
};

createGrid(desiredGridWidth);
