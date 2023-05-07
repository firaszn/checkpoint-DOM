// Get all the quantity decrement buttons
const decrementButtons = document.querySelectorAll('.decrement');

// Get all the quantity increment buttons
const incrementButtons = document.querySelectorAll('.increment');

// Get all the delete buttons
const deleteButtons = document.querySelectorAll('.delete');

// Get all the like buttons
const likeButtons = document.querySelectorAll('.like');

// Get the cart total element
const cartTotal = document.getElementById('cart-total');

// Function to update the total price based on the quantity of an item
function updateTotalPrice(quantity, price, totalElement) {
  const total = quantity * price;
  totalElement.textContent = `$${total}`;
}

// Function to update the cart total based on the total prices of all items
function updateCartTotal() {
  let total = 0;
  const totalElements = document.querySelectorAll('.total');
  totalElements.forEach(element => {
    total += parseFloat(element.textContent.replace('$', ''));
  });
  cartTotal.textContent = `$${total}`;
}

// Add event listeners to the quantity decrement buttons
decrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentNode.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      const price = parseFloat(button.parentNode.previousElementSibling.textContent.replace('$', ''));
      const totalElement = button.parentNode.nextElementSibling;
      updateTotalPrice(quantity, price, totalElement);
      updateCartTotal();
    }
  });
});

// Add event listeners to the quantity increment buttons
incrementButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentNode.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    const price = parseFloat(button.parentNode.previousElementSibling.textContent.replace('$', ''));
    const totalElement = button.parentNode.nextElementSibling;
    updateTotalPrice(quantity, price, totalElement);
    updateCartTotal();
  });
});

// Add event listeners to the delete buttons
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateCartTotal();
  });
});


