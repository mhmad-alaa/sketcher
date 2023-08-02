
let slider = document.querySelector('.slider');
let sliderValue = document.querySelector('.slider-value');
let clearBtn = document.querySelector('.clear'); 

document.body.onmousedown = () => mouseClickedStatus = 1;
document.body.onmouseup = () => mouseClickedStatus = 0;

function mouseoverHandler(e) {
  if (mouseClickedStatus)  
    // e.target.style.backgroundColor = '#393e46';
    // e.target.style.backgroundColor = '#8b9fbd';
    e.target.style.backgroundColor = '#68778d';
}

slider.addEventListener('input', () => {
    sliderValue.innerText = `${slider.value} x ${slider.value}`;
    drawGrid(slider.value); 
});

function drawGrid(density) {
    const gridContainer = document.querySelector('.main-frame'); 
    gridContainer.innerHTML = ''; 
    for (let r = 0; r < density; ++r) {
        const row = document.createElement('div');
        row.classList.add('row'); 
        for (let c = 0; c < density; ++c) {
            const cell = document.createElement('div'); 
            cell.classList.add('cell'); 
            cell.addEventListener('mouseover', mouseoverHandler); 
            row.appendChild(cell); 
        }
        gridContainer.appendChild(row); 
    }
}

clearBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell'); 
    cells.forEach(cell => cell.style.backgroundColor = '#ddd');
});


function init() {
    sliderValue.innerText = `${slider.value} x ${slider.value}`;
    drawGrid(slider.value);
}

init();

