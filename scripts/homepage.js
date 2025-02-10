// Add interactivity here if needed
// Example: Add a simple alert when the "Add to Cart" button is clicked
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });