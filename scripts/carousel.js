document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        let images = carousel.querySelectorAll("img");
        let index = 0;

        // Create navigation buttons
        let prevBtn = document.createElement("button");
        prevBtn.innerHTML = "&#10094;";
        prevBtn.classList.add("prev");

        let nextBtn = document.createElement("button");
        nextBtn.innerHTML = "&#10095;";
        nextBtn.classList.add("next");

        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        // Create dot indicators
        let dotsContainer = document.createElement("div");
        dotsContainer.classList.add("carousel-dots");
        images.forEach((_, i) => {
            let dot = document.createElement("span");
            dot.dataset.index = i;
            dotsContainer.appendChild(dot);
        });
        carousel.appendChild(dotsContainer);

        let dots = dotsContainer.querySelectorAll("span");

        function updateCarousel(newIndex) {
            images[index].style.opacity = "0";
            dots[index].classList.remove("active");

            index = newIndex;

            images[index].style.opacity = "1";
            dots[index].classList.add("active");
        }

        // Auto-play every 3 seconds
        let autoPlay = setInterval(() => {
            updateCarousel((index + 1) % images.length);
        }, 3000);

        // Navigation button functionality
        prevBtn.addEventListener("click", () => {
            updateCarousel(index === 0 ? images.length - 1 : index - 1);
        });

        nextBtn.addEventListener("click", () => {
            updateCarousel((index + 1) % images.length);
        });

        // Dot indicator functionality
        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                updateCarousel(parseInt(dot.dataset.index));
            });
        });

        // Initialize first dot as active
        dots[0].classList.add("active");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");
    let currentImages = [];
    let currentIndex = 0;

    // Create Lightbox Container
    let lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    let lightboxImage = document.createElement("img");
    let closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-btn");

    let prevButton = document.createElement("button");
    prevButton.innerHTML = "&#10094;";
    prevButton.classList.add("prev");

    let nextButton = document.createElement("button");
    nextButton.innerHTML = "&#10095;";
    nextButton.classList.add("next");

    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeButton);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);
    document.body.appendChild(lightbox);

    // Open Lightbox on Image Click
    carousels.forEach(carousel => {
        let images = carousel.querySelectorAll("img");

        images.forEach((img, i) => {
            img.addEventListener("click", () => {
                currentImages = Array.from(carousel.querySelectorAll("img"));
                currentIndex = i;
                updateLightbox();
                lightbox.classList.add("show");
            });
        });
    });

    function updateLightbox() {
        if (currentImages.length > 0) {
            lightboxImage.src = currentImages[currentIndex].src;
        }
    }

    // Navigation Button Actions
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightbox();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightbox();
    });

    // Close Lightbox Actions
    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage && e.target !== prevButton && e.target !== nextButton) {
            lightbox.classList.remove("show");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.classList.remove("show");
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateLightbox();
        } else if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateLightbox();
        }
    });
});
