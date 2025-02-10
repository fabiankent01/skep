function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Set the actual image URL
          img.classList.remove('lazy-load'); // Remove the lazy-load class
          observer.unobserve(img); // Stop observing the image
        }
      });
    });
  
    lazyImages.forEach((img) => observer.observe(img));
  }
  
  // Call the lazyLoadImages function after rendering products
  lazyLoadImages();
  