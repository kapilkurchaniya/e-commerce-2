alert ("Welcome to Krishna Mart")
let cart = [];
let totalPrice = 0;

function flipToOptions(buttonElement) {
  const flipCardInner = buttonElement.closest('.flip-card-inner');
  if (flipCardInner) {
    flipCardInner.classList.add('flipped');
  }
}

function addToCart(productName, productPrice, buttonElement) {
  // Add the product to the cart
  cart.push({ name: productName, price: productPrice, quantity: 1 });
  totalPrice += productPrice;
  
  // Update the cart display
  updateCart();

  // Trigger flip animation on the product card
  if (buttonElement) {
    const flipCardInner = buttonElement.closest('.flip-card-inner');
    if (flipCardInner) {
      flipCardInner.classList.add('flipped');
    }
  }
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
      itemElement.textContent = `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`;
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
  document.getElementById('qr-payment').style.display = 'none';
  
  if (option === 'payment' && cart.length > 0) {
    document.getElementById('payment-form').style.display = 'block';
  } else if (option === 'cod' && cart.length > 0) {
    document.getElementById('cod-message').style.display = 'block';
  }
  else if (option === 'Qr payment' && cart.length > 0) {
    alert('Please scan the QR code to proceed with the payment. Thank you!');
    document.getElementById('qr-payment').style.display = 'block';
  }
  else {
    alert('Your cart is empty. Please add items to proceed to checkout. Thank you!');
  }
}
if (cart.length === 0) {
 console.log('Your cart is empty. Please add items to proceed to checkout. Thank you!');
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

function flipBack(buttonElement) {
  const flipCardInner = buttonElement.closest('.flip-card-inner');
  if (flipCardInner) {
    flipCardInner.classList.remove('flipped');
  }
}

// Sliding cart functionality
function openCart() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.classList.add('open');
}

function closeCart() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.classList.remove('open');
}

// Trigger slide-in animation for product-item images on page load
window.addEventListener('DOMContentLoaded', function() {
  const productImages = document.querySelectorAll('.product-item img');
  productImages.forEach((img, idx) => {
    setTimeout(() => {
      img.classList.add('slide-in');
    }, idx * 150); // staggered effect
  });
});

function addToCartWithQty(productName, productPrice, qtyInputId, buttonElement) {
  const quantityInput = document.getElementById(qtyInputId);
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1) {
    alert('Please enter a valid quantity.');
    return;
  }
  // Add the product with quantity to the cart
  cart.push({ name: productName, price: productPrice, quantity: quantity });
  totalPrice += productPrice * quantity;

  // Update the cart display
  updateCart();

  // Flip back the card to front
  if (buttonElement) {
    const flipCardInner = buttonElement.closest('.flip-card-inner');
    if (flipCardInner) {
      flipCardInner.classList.remove('flipped');
    }
  }
}
