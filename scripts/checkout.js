document.getElementById("place-order-button").addEventListener("click", function() {
    if (validateForm()) {
        document.getElementById("order-confirmation").style.display = "block";
    }
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    if (!name || !email || !phone || !address) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function closeConfirmation() {
    document.getElementById("order-confirmation").style.display = "none";
    window.location.href = "index.html";
}



document.getElementById("place-order-button").addEventListener("click", function() {
    if (validateForm()) {
        document.getElementById("order-confirmation").style.display = "block";
    }
});

document.getElementById("apply-coupon").addEventListener("click", function() {
    const couponInput = document.getElementById("coupon-code").value.trim();
    const couponMessage = document.getElementById("coupon-message");
    let totalPrice = parseFloat(document.getElementById("checkout-total-price").innerText);

    const validCoupons = {
        "SAVE10": 10,  // 10% off
        "FREESHIP": 5   // Flat $5 off
    };

    if (validCoupons[couponInput]) {
        let discount = (validCoupons[couponInput] / 100) * totalPrice;
        totalPrice -= discount;
        document.getElementById("checkout-total-price").innerText = totalPrice.toFixed(2);
        couponMessage.style.color = "green";
        couponMessage.innerText = "Coupon applied successfully!";
    } else {
        couponMessage.style.color = "red";
        couponMessage.innerText = "Invalid coupon code.";
    }
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    if (!name || !email || !phone || !address) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function closeConfirmation() {
    document.getElementById("order-confirmation").style.display = "none";
    window.location.href = "index.html";
}
