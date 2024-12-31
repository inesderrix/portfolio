
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); 
    const navLinks = document.querySelectorAll("nav a"); 

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste selon la hauteur de la navbar
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id"); // Récupère l'ID de la section visible
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active"); // Supprime la classe active de tous les liens
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active"); // Ajoute la classe active au lien correspondant
            }
        });
    });
});
