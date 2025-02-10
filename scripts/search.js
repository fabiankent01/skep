// Define the search bar and button
const searchBar = document.getElementById("search-bar");
const searchButton = document.querySelector(".search-button");

// Add event listener to the search button
searchButton.addEventListener("click", handleSearch);

// Function to handle the search
function handleSearch() {
  const searchQuery = searchBar.value.toLowerCase().trim(); // Get query and trim whitespace

  // Check if search query is empty
  if (!searchQuery) {
    document.getElementById("product-list").innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  // Filter products based on the query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Render filtered products or show "No products found" message
  if (filteredProducts.length > 0) {
    renderProducts(filteredProducts);
  } else {
    document.getElementById("product-list").innerHTML = "<p>No products found.</p>";
  }
}
