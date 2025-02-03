document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lightbox effect for illustrations
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);
            
            const lightboxImg = document.createElement("img");
            lightboxImg.src = img.src;
            lightbox.appendChild(lightboxImg);
            
            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });

    // Fade-in animation on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => observer.observe(section));
});

