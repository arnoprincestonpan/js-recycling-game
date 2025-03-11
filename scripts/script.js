const recycleBin = document.getElementById('recycle-bin');
const trashBin = document.getElementById('trash-bin');

let draggedItem = null;

recycleBin.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData('text/html', draggedItem.textContent);
})

trashBin.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedItem.textContent);
})

recycleBin.addEventListener('dragover', (e) => {
    e.preventDefault();
})

trashBin.addEventListener('dragover', (e) => {
    e.preventDefault();
})

recycleBin.addEventListener('drop', (e) => {
    e.preventDefault();
    if(draggedItem){
        recycleBin.append(draggedItem);
        draggedItem = null;
    }
})

trashBin.addEventListener('drop', (e) => {
    e.preventDefault();
    if(draggedItem){
        trashBin.append(draggedItem);
        draggedItem = null;
    }
})