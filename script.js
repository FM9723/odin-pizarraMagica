
const container = document.getElementById('container');
const sizeButton = document.getElementById('size');
const randomColorButton = document.getElementById('rainbow');
let pixels;
var color = document.getElementById("color");
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let randomMode = false;

function makeGrid(input) {
  

    for (let i = 0; i < input; i++) {
        var rowItem = document.createElement('div');
        rowItem.className = "rowItem";
            rowItem.addEventListener('mouseover', function (e) {
                
                if(!randomMode){
                    e.target.style.backgroundColor = color.value;
               
                }else{
                    randomColor = Math.floor(Math.random()*16777215).toString(16);
                    e.target.style.backgroundColor = '#'+randomColor;
                   

                }
    
            });
        container.appendChild(rowItem);
        for (let j = 0; j < input; j++) {
            var item = document.createElement('div');
            item.className = "item";
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
randomColorButton.addEventListener('click', (event) =>{
    randomMode = !randomMode;
    if(randomMode){
        randomColorButton.textContent = ' Desactivar Color Random';
    }else{
        randomColorButton.textContent = 'Color Random ';
    }
});

sizeButton.addEventListener("click", (event) => {
    do {
        pixels = prompt('Por favor ingrese un numero positivo ... ');
        
    } while (isNaN(pixels) || pixels < 0 || pixels > 100);
    clearGrid();
    makeGrid(pixels);
});


makeGrid(16);


