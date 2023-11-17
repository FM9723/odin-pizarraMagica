
const container = document.getElementById('container');
const sizeButton = document.getElementById('size');
let pixels;

function makeGrid(input) {
    let index =  1;

    for (let i = 0; i < input; i++) {
        var rowItem = document.createElement('div');
        rowItem.className = "rowItem";
        rowItem.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'blue';

        });
        container.appendChild(rowItem);
        for (let j = 0; j < input; j++) {
            var item = document.createElement('div');
            item.className = "item";
            item.textContent = index;
            index++;


            rowItem.appendChild(item);
        }
    }

}

function clearGrid(){
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
}

sizeButton.addEventListener("click", (event) => {
    do {
        pixels = prompt('Por favor ingrese un numero positivo ... ');
        
    } while (isNaN(pixels) || pixels < 0 || pixels > 100);
    clearGrid();
    makeGrid(pixels);
});


makeGrid(16);


