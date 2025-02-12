document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const placeOrderButton = document.getElementById("place-order-button");
    const totalPriceElement = document.getElementById("checkout-total-price");
    const orderConfirmation = document.getElementById("order-confirmation");
  
    if (!loggedInUser) {
      alert('Please log in or sign up to proceed to checkout.');
      const currentUrl = window.location.href;
      window.location.href = `login_form.html?redirect=${encodeURIComponent(currentUrl)}`;
    }
  
    document.getElementById("apply-coupon").addEventListener("click", function () {
      const couponInput = document.getElementById("coupon-code").value.trim();
      const couponMessage = document.getElementById("coupon-message");
      let totalPrice = parseFloat(totalPriceElement.innerText);
  
      const validCoupons = {
        "SAVE10": 10,  // 10% off
        "FREESHIP": 5   // Flat $5 off
      };
  
      if (validCoupons[couponInput]) {
        let discount = (validCoupons[couponInput] / 100) * totalPrice;
        totalPrice -= discount;
        totalPriceElement.innerText = totalPrice.toFixed(2);
        couponMessage.style.color = "green";
        couponMessage.innerText = "Coupon applied successfully!";
      } else {
        couponMessage.style.color = "red";
        couponMessage.innerText = "Invalid coupon code.";
      }
    });
  
    placeOrderButton.addEventListener("click", function () {
      if (validateForm()) {
        placeOrderButton.disabled = true;
        placeOrderButton.innerText = "Processing...";
        
        setTimeout(() => {
          orderConfirmation.style.display = "block";
          placeOrderButton.disabled = false;
          placeOrderButton.innerText = "Place Order";
        }, 1500);
      }
    });
  
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
  
      if (!name || !email || !phone || !address) {
        alert("Please fill in all fields.");
        return false;
      }
      if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return false;
      }
      return true;
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  