const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
const shippingCost = 5.00;

function addToCart(productName) {
  const product = products.find(item => item.name === productName);
  const cartItem = cart.find(item => item.name === productName);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalCount;
  }
  saveCart();
}

function renderCartPage() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalItemsElement = document.getElementById("total-items");
  const totalPriceElement = document.getElementById("total-price");
  const estimatedTotalElement = document.getElementById("estimated-total");
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const checkoutButton = document.getElementById("checkout-button");

  if (!cartItemsContainer || !totalItemsElement || !totalPriceElement || !estimatedTotalElement) return;

  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

  if (savedCart.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCartMessage.style.display = "block";
    totalItemsElement.textContent = "0";
    totalPriceElement.textContent = "0.00";
    estimatedTotalElement.textContent = shippingCost.toFixed(2);
    checkoutButton.disabled = true;
    return;
  } else {
    emptyCartMessage.style.display = "none";
    checkoutButton.disabled = false;
  }

  cartItemsContainer.innerHTML = savedCart
    .map((item, index) => `
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
    `).join("");

  const totalItems = savedCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  totalItemsElement.textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);
  estimatedTotalElement.textContent = (totalPrice + shippingCost).toFixed(2);
}

function increaseQuantity(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  savedCart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
}

function decreaseQuantity(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  if (savedCart[index].quantity > 1) {
    savedCart[index].quantity -= 1;
  } else {
    savedCart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
}

function removeFromCart(index) {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const removedItem = savedCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(savedCart));
  renderCartPage();
  alert(`${removedItem[0].name} has been removed from your cart.`);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCart();
  renderCartPage();
});

document.getElementById("cart-icon").addEventListener("click", () => {
  window.location.href = "cart_page.html";
});

// Proceed to Checkout and Pass Total with Login Check
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("userToken");  // Check if the user is logged in
  if (!isLoggedIn) {
    alert("You must log in to proceed to checkout.");
    window.location.href = "login_form.html";  // Redirect to the login page
  } else {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalPrice = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    localStorage.setItem("cartTotal", totalPrice.toFixed(2));
    window.location.href = "checkout_page.html";
  }
});
