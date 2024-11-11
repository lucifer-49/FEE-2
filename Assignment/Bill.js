
const billForm = document.getElementById('billForm');
const itemList = document.getElementById('itemList');
const totalAmount = document.getElementById('totalAmount');
const clearButton = document.getElementById('clearButton');

let total = 0;

function addItem(event) {
    event.preventDefault(); 

    const itemInput = document.getElementById('item');
    const priceInput = document.getElementById('price');
    const itemName = itemInput.value;
    const itemPrice = parseFloat(priceInput.value);

    if (itemName && !isNaN(itemPrice)) {
        
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${itemName}: $${itemPrice.toFixed(2)} <button class="btn btn-danger btn-sm" onclick="removeItem(this, ${itemPrice})">Remove</button>`;
        
        itemList.appendChild(listItem);

        total += itemPrice;
        totalAmount.textContent = total.toFixed(2);

        itemInput.value = '';
        priceInput.value = '';
    }
}
function removeItem(button, price) {
    const listItem = button.parentElement;
    itemList.removeChild(listItem);

    total -= price;
    totalAmount.textContent = total.toFixed(2);
}

function clearItems() {
    itemList.innerHTML = ''; 
    total = 0; 
    totalAmount.textContent = total.toFixed(2); 
}

billForm.addEventListener('submit', addItem);
clearButton.addEventListener('click', clearItems);
