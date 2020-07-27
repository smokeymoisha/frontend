let getDataButton = document.querySelector('.get-data');
let items = document.querySelector('.items');
  
getDataButton.addEventListener('click', getItems);
  
function getItems() {
  if (items.childNodes.length != 0) {
    while (items.firstChild){
      items.removeChild(items.firstChild);
    }
  }
    
  itemsList.forEach((item) => {
    let element = document.createElement('div');
     element.classList.add('item-element');

    let elemText = document.createElement('label');
    elemText.innerText = item.name;
    element.appendChild(elemText);
      
    let removeButton = document.createElement('button');
    removeButton.innerText = 'delete';
    removeButton.classList.add('clickable', 'item-button');
    removeButton.addEventListener('click', () => {
      itemsList.splice(itemsList.indexOf(item), 1);
      removeButton.parentNode.remove();
    });
    
    let elemInput = document.createElement('input');

    let editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.classList.add('clickable', 'item-button');
    editButton.addEventListener('click', () => {
      if (editButton.innerText == 'edit'){
        elemText.replaceWith(elemInput);
        editButton.innerText = 'save';
      } else {
        item.name = elemInput.value;
        elemInput.replaceWith(elemText);
        elemText.innerText = item.name;
        editButton.innerText = 'edit';
      }
    });

    element.appendChild(removeButton);
    element.appendChild(editButton);
    items.appendChild(element);
  })
    
  let clearAllButton = document.createElement('button');
  clearAllButton.innerText = 'Clear All';
  clearAllButton.classList.add('clickable', 'clear-all');
  clearAllButton.addEventListener('click', () => {
    while (items.firstChild){
      items.removeChild(items.firstChild);
    }
  });
  items.appendChild(clearAllButton);

  let addItemButton = document.createElement('button');
  addItemButton.innerText = 'Add Item';
  addItemButton.classList.add('clickable', 'add-item');
  addItemButton.addEventListener('click', () => {
    itemsList.push(new Item('new item'));
    getItems();
  });
  items.appendChild(addItemButton);
}