alert ("Welcome to My Kurchaniya's Mart")
let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  // Add the product to the cart
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;
  
  // Update the cart display
  updateCart();
}

function updateCart() {
  // Show cart items
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>No items in your cart yet.</p>';
  } else {
    cart.forEach(item => {
      const itemElement = document.createElement('p');
      itemElement.textContent = `${item.name} - ₹${item.price}`;
      cartItemsContainer.appendChild(itemElement);
    });
  }
  
  // Update the total price
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function showPaymentOptions(option) {
  // Hide both forms
  document.getElementById('payment-form').style.display = 'none';
  document.getElementById('cod-message').style.display = 'none';
  
  if (option === 'payment') {
    document.getElementById('payment-form').style.display = 'block';
  } else if (option === 'cod') {
    document.getElementById('cod-message').style.display = 'block';
  }
}

// Handle form submission (for payment)
document.getElementById('payment-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  // For demo purposes, just log the card details (in a real app, you would send this to the server)
  console.log('Processing payment...');
  console.log(`Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);

  alert('Payment processed successfully! Thank you for your purchase.');
});
document.getElementById("addressForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;

  if (!name || !address || !city || !zip) {
      alert("Please fill out all fields.");
      return;
  }
  
  alert("Address submitted successfully!");
  this.reset();
});