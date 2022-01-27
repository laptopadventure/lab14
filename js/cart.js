/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // DONE: Find the table body
  let tbody = document.querySelector('tbody');
  // DONE: Iterate over the items in the cart
  for(let cartItem of cart.items) {
    // DONE: Create a TR
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    // DONE: Create a TD for the delete link, quantity,  and the item
    let tr = tbody.appendChild(document.createElement('tr'));
    for(let i = 0; i < 3; i++) {
      let td = tr.appendChild(document.createElement('td'));
      console.log(i);
      switch(i) {
      case 0:
        let a = td.appendChild(document.createElement('a'));
        a.href = '#';
        a.textContent = 'Remove item from cart';
        break;
      case '1':
        td.textContent = `${cartItem.quantity} in cart`;
        break;
      case '2':
        console.log('product name');
        td.textContent = `${cartItem.product}`;
        break;
      }
    }
  }

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
