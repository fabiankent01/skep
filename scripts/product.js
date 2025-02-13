const products = [
    { name: "Axe", price: 29.99, image: "images/axe.jpg",rating: 3.5, stock: 52 },
    { name: "Hoe", price: 19.99, image: "images/hoe.jpg", rating: 5.0, stock: 65},
    { name: "Rake", price: 49.99, image: "images/rake.jpg", rating: 4.5, stock: 28},
    { name: "Machete", price: 39.99, image: "images/machete.jpg", rating: 4.5, stock: 98},
    { name: "Hand trowel", price: 59.99, image: "images/hand trowel.jpg", rating: 4.0, stock: 13},
    { name: "Pruning shears", price: 24.99, image: "images/pruning shears.jpg", rating: 4.5, stock: 12},
    { name: "Sickle", price: 55.99, image: "images/sickle.jpg", rating: 4.5, stock: 5},
    { name: "Fork", price: 65.99, image: "images/fork.jpg", rating: 0, stock: 8},
    { name: "Pick axe", price: 15.99, image: "images/pick-axe.jpg", rating: 4.5, stock: 12},
    { name: "Mattock", price: 95.99, image: "images/mattock.jpg", rating: 5, stock: 26},
    { name: "Scythe", price: 95.99, image: "images/scythe.jpg", rating: 1.5, stock:25},
    { name: "Post hole digger", price: 95.99, image: "images/post-hole-digger.jpg", rating: 2.5, stock: 38},
    { name: "Wheel barrow", price: 95.99, image: "images/Wheel-barrow.jpg", rating: 5, stock: 94},
    { name: "Garden hose", price: 95.99, image: "images/garden-hose.jpg", rating: 4, stock: 97},
    { name: "Watering can", price: 95.99, image: "images/watering-can.jpg", rating: 2, stock: 34},
    { name: "Sprayer", price: 95.99, image: "images/sprayer.jpg", rating: 1.5, stock: 16},
    { name: "Cultivator", price: 95.99, image: "images/cultivator.jpg", rating: 5, stock: 35},
    { name: "Seed planter", price: 95.99, image: "images/seed-planter.jpg", rating: 0, stock: 97},
    { name: "Seed drilling machine", price: 95.99, image: "images/seed-drill-machine.jpg", rating: 4.5, stock: 64},
    { name: "Electric cultivator", price: 95.99, image: "images/electric-cultivator.jpg", rating: 4.5, stock: 35},
    { name: "Automatic irrigation system", price: 95.99, image: "images/automatic-irrigation-system.jpg", rating: 5, stock: 29},
    { name: "Solar powered pumps", price: 95.99, image: "images/Solar-powered-pumps.jpg", rating: 2, stock: 5},
    { name: "Drip irrigation kit", price: 95.99, image: "images/Drip-irrigation-kits.jpg", rating: 0, stock: 8},
    { name: "Soil moisture sensors", price: 95.99, image: "images/Soil Moisture Sensor.jpg", rating: 5, stock: 6},
    { name: "Combine harvester", price: 95.99, image: "images/Combine Harvester.jpg", rating: 2, stock: 77},
    { name: "Grain mill", price: 95.99, image: "images/Grain Mill.jpg", rating: 4.5, stock: 98},
    { name: "Crop sprayer", price: 98.99, image: "images/Crop Sprayer.jpg", rating: 0, stock: 66}
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

