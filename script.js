
const container = document.getElementById('container');
function makeGrid() {
    var index = 1 ;
    for (let i = 0; i < 16; i++) {
        var rowItem = document.createElement('div');
        rowItem.className = "rowItem";
        container.appendChild(rowItem);
        for (let j = 0; j < 16; j++) {
            var item = document.createElement('div');
            item.className = "item";
            item.textContent = index;
            index++;
            item.addEventListener("mouseover",(e) => {
                item.style.backgroundColor = "#ccc";
            });

            
            rowItem.appendChild(item);
        }
    }
}

makeGrid();

