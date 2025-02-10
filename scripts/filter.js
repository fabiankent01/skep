const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "0-30" && product.price < 30) ||
      (selectedPrice === "30-50" && product.price >= 30 && product.price <= 50) ||
      (selectedPrice === "50+" && product.price > 50);

    return matchesCategory && matchesPrice;
  });

  renderProducts(filteredProducts);
}

// Attach event listeners to the filter dropdowns
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

// Render products initially
renderProducts(products);
