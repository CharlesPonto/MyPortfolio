// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// for nav clicks
document.querySelectorAll("[data-section]").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = link.getAttribute("data-section");
        scrollToSection(section);

        mobileMenuBtn.classList.remove("active");
        mobileMenu.classList.remove("show");
    });
});

// current page
window.addEventListener("scroll", () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const scrollPos = window.scrollY + 100;

    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPos >= sectionTop &&
                scrollPos < sectionTop + sectionHeight
            ) {
                document
                    .querySelectorAll(".nav-link, .mobile-nav-link")
                    .forEach((link) => {
                        link.classList.remove("active");
                    });

                document
                    .querySelectorAll(`[data-section="${sectionId}"]`)
                    .forEach((link) => {
                        link.classList.add("active");
                    });
            }
        }
    });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
});
