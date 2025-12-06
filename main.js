<script>
// ===== Navbar active link highlight on scroll =====
const sections = document.querySelectorAll("#about, #contact");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("text-accent");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("text-accent");
        }
    });
});

// ===== Fade-in sections on scroll =====
const fadeSections = document.querySelectorAll("#about, #contact");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
        }
    });
}, { threshold: 0.2 });

fadeSections.forEach(section => {
    section.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observer.observe(section);
});
</script>