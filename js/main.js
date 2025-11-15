document.addEventListener("DOMContentLoaded", () => {
    // --- LIGHTBOX FUNCTIONALITY ---
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Only attach to portfolio images
    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent accidental bubble
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // Close on clicking background or close button
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox || e.target.classList.contains("close-lightbox")) {
            lightbox.style.display = "none";
        }
    });

    // --- PORTFOLIO FILTERING ---
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const activeBtn = document.querySelector(".filter-btn.active");
            if (activeBtn) activeBtn.classList.remove("active");
            btn.classList.add("active");

            const category = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (category === "All" || cardCategory === category) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 10);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.9)";
                    setTimeout(() => { card.style.display = "none"; }, 200);
                }
            });
        });
    });
});
