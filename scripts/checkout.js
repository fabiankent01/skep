document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const shippingCost = 5.00;
    let totalPrice = 0;

    const checkoutItemsContainer = document.getElementById("checkout-items");
    const checkoutTotalPrice = document.getElementById("checkout-total-price");
    const checkoutEstimatedTotal = document.getElementById("checkout-estimated-total");

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
        document.getElementById("place-order-button").disabled = true;
    } else {
        checkoutItemsContainer.innerHTML = cart.map(item => `
            <li>
                <strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}
            </li>
        `).join("");
        totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        checkoutTotalPrice.textContent = totalPrice.toFixed(2);
        checkoutEstimatedTotal.textContent = (totalPrice + shippingCost).toFixed(2);
    }

    const visaOption = document.getElementById("visa-option");
    const codOption = document.getElementById("cod-option");
    const cardDetails = document.getElementById("card-details");
    let selectedPayment = null;

    visaOption.addEventListener("click", () => {
        cardDetails.classList.remove("hidden");
        selectedPayment = "Visa";
    });

    codOption.addEventListener("click", () => {
        cardDetails.classList.add("hidden");
        selectedPayment = "COD";
    });

    document.getElementById("apply-discount-button").addEventListener("click", () => {
        const discountInput = document.getElementById("discount-code-input").value;
        if (discountInput === "DISCOUNT10") {
            const discountAmount = totalPrice * 0.1;
            totalPrice -= discountAmount;
            checkoutEstimatedTotal.textContent = (totalPrice + shippingCost).toFixed(2);
            alert(`Discount applied! You saved $${discountAmount.toFixed(2)}`);
        } else {
            alert("Invalid discount code.");
        }
    });

    document.getElementById("place-order-button").addEventListener("click", () => {
        const shippingForm = document.getElementById("shipping-form");
        if (!shippingForm.checkValidity()) {
            alert("Please fill out all required fields correctly.");
            return;
        }
        if (selectedPayment === "Visa" && !document.getElementById("card-form").checkValidity()) {
            alert("Please enter valid card details.");
            return;
        }
        alert("Order placed successfully! Thank you for shopping with us.");
        localStorage.removeItem("cart");
        window.location.href = "product_page.html";
    });
});