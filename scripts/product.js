const products = [
    { name: "Product 1", price: 29.99, image: "https://picsum.photos/200/150?random=1",rating: 3.5, stock: 52 },
    { name: "Product 2", price: 49.99, image: "https://picsum.photos/200/150?random=2", rating: 4.5, stock: 28},
    { name: "Product 3", price: 19.99, image: "https://picsum.photos/200/150?random=3", rating: 5.0, stock: 65},
    { name: "Product 4", price: 39.99, image: "https://picsum.photos/200/150?random=4", rating: 4.5, stock: 98},
    { name: "Product 5", price: 59.99, image: "https://picsum.photos/200/150?random=5", rating: 4.0, stock: 13},
    { name: "Product 6", price: 24.99, image: "https://picsum.photos/200/150?random=6", rating: 4.5, stock: 12},
    { name: "Product 7", price: 55.99, image: "https://picsum.photos/200/150?random=7", rating: 4.5, stock: 5},
    { name: "Product 8", price: 65.99, image: "https://picsum.photos/200/150?random=8", rating: 0, stock: 8},
    { name: "Product 9", price: 15.99, image: "https://picsum.photos/200/150?random=9", rating: 4.5, stock: 12},
    { name: "Product 10", price: 95.99, image: "https://picsum.photos/200/150?random=10", rating: 5, stock: 26},
    { name: "Product 11", price: 95.99, image: "https://picsum.photos/200/150?random=11", rating: 1.5, stock:25},
    { name: "Product 12", price: 95.99, image: "https://picsum.photos/200/150?random=12", rating: 2.5, stock: 38},
    { name: "Product 13", price: 95.99, image: "https://picsum.photos/200/150?random=13", rating: 5, stock: 94},
    { name: "Product 14", price: 95.99, image: "https://picsum.photos/200/150?random=14", rating: 4, stock: 97},
    { name: "Product 15", price: 95.99, image: "https://picsum.photos/200/150?random=15", rating: 2, stock: 34},
    { name: "Product 16", price: 95.99, image: "https://picsum.photos/200/150?random=16", rating: 1.5, stock: 16},
    { name: "Product 17", price: 95.99, image: "https://picsum.photos/200/150?random=17", rating: 5, stock: 35},
    { name: "Product 18", price: 95.99, image: "https://picsum.photos/200/150?random=18", rating: 0, stock: 97},
    { name: "Product 19", price: 95.99, image: "https://picsum.photos/200/150?random=19", rating: 4.5, stock: 64},
    { name: "Product 20", price: 95.99, image: "https://picsum.photos/200/150?random=20", rating: 4.5, stock: 35},
    { name: "Product 21", price: 95.99, image: "https://picsum.photos/200/150?random=21", rating: 5, stock: 29},
    { name: "Product 22", price: 95.99, image: "https://picsum.photos/200/150?random=22", rating: 2, stock: 5},
    { name: "Product 23", price: 95.99, image: "https://picsum.photos/200/150?random=23", rating: 0, stock: 8},
    { name: "Product 24", price: 95.99, image: "https://picsum.photos/200/150?random=24", rating: 5, stock: 6},
    { name: "Product 25", price: 95.99, image: "https://picsum.photos/200/150?random=25", rating: 2, stock: 77},
    { name: "Product 26", price: 95.99, image: "https://picsum.photos/200/150?random=26", rating: 4.5, stock: 98},
    { name: "Product 27", price: 98.99, image: "https://picsum.photos/200/150?random=27", rating: 0, stock: 66}
  ];
  
  
const productContainer = document.getElementById("product-list");

function renderProducts(products) {
  productContainer.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
          <img class="lazy-load" src="placeholder.jpg" data-src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Rating: ${product.rating ? `${product.rating} ⭐` : 'No ratings yet'}</p>
          <p>Stock: ${product.stock > 0 ? product.stock : 'Out of stock'}</p>
          ${
            product.stock > 0
              ? `<button onclick="addToCart('${product.name}')">Add to Cart</button>`
              : `<button disabled style="background-color: #ccc; cursor: not-allowed;">Out of Stock</button>`
          }
        </div>
      `
    )
    .join('');
}

function addToCart(productName) {
  alert(`${productName} added to the cart!`);
}

renderProducts(products);

