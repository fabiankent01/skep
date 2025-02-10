const sortSelect = document.getElementById("sort-products");

sortSelect.addEventListener("change", () => {
  const sortBy = sortSelect.value;

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  renderProducts(sortedProducts);
});
