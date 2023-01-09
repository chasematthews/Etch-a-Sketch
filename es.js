//Read in content from the HTML file

const gridContainer = document.querySelector(".grid-squares-container");
const slider = document.querySelector(".slider");
const output = document.querySelector("#slider-value");

//Edit the slider value when it is used

output.textContent = slider.value;
slider.oninput = function() {
    output.textContent = slider.value;
}

slider.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    gridChange()
})

//Change the grid size and number of elements depending on the slider.

function gridChange() {
    let grid = [];

    for (let row = 0; row <= slider.value-1; row++) {
        grid[row] = document.createElement('div');
        grid[row].classList.add('grid-rows')
        gridContainer.appendChild(grid[row]);
    }
    
    const gridRows = document.querySelectorAll(".grid-rows");
    
    gridRows.forEach((gridRow) => {
        for (let col = 0; col <= slider.value-1; col++) {
            grid[col] = document.createElement('div');
            grid[col].classList.add('grid-cells')
            gridRow.appendChild(grid[col]);
        }
    })
    
    const gridCells = document.querySelectorAll(".grid-cells");
    
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.background = 'rgb(104, 103, 103)';
        })
    })
}

window.onload = () => {
    gridChange()
}