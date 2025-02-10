const cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
const cartCount = document.getElementById("cart-count");

// Function to add items to the cart
function addToCart(productName) {
  const product = products.find((item) => item.name === productName);
  const cartItem = cart.find((item) => item.name === productName);

  if (cartItem) {
    cartItem.quantity += 1; // Increase quantity if already in cart
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new item to cart
  }

  saveCart(); // Save updated cart to localStorage
  updateCart(); // Update cart count
}

// Function to save the cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to update cart count and save to localStorage
function updateCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalCount;
  }
  saveCart(); // Save cart data
}

// Function to render cart items on the cart page
function renderCartPage() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalItemsElement = document.getElementById("total-items");
  const totalPriceElement = document.getElementById("total-price");

  if (!cartItemsContainer || !totalItemsElement || !totalPriceElement) return; // Exit if elements don't exist

  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  if (savedCart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
    totalItemsElement.textContent = "0";
    totalPriceElement.textContent = "0.00";
    return;
  }

  cartItemsContainer.innerHTML = savedCart
    .map(
      (item, index) => `
      <li>
        <img src="${item.image}" alt="${item.name}" width="50">
        <div class="cart-item-details">
          <p><strong>${item.name}</strong></p>
          <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
        </div>
        <div class="cart-item-controls">
          <button onclick="increaseQuantity(${index})">+</button>
          <button onclick="decreaseQuantity(${index})">-</button>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      </li>
    `
    )
    .join("");

  const totalItems = savedCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to increase item quantity
function increaseQuantity(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  savedCart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
}

// Function to decrease item quantity
function decreaseQuantity(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  if (savedCart[index].quantity > 1) {
    savedCart[index].quantity -= 1;
  } else {
    savedCart.splice(index, 1); // Remove item if quantity is 1
  }
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
}

// Function to remove item from cart
function removeFromCart(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  savedCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCart(); // Ensure cart count updates on all pages
  renderCartPage(); // Only runs if on the cart page
});

// Redirect to cart page when clicking cart icon
document.getElementById("cart-icon").addEventListener("click", () => {
  window.location.href = "cart_page.html";
});
