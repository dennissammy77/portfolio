console.log('loaded')
const toggleThemeButton = document.getElementById("toggle-theme");

toggleThemeButton.addEventListener("click", () => {
    //select all elements that have the dark class
    document.querySelectorAll(".dark-mode").forEach(element => {
        element.classList.toggle("active-dark-mode");
    });
    // save theme to local stroage
    const isDarkMode = document.body.classList.contains("active-dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Load the user's preference on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.querySelectorAll(".dark-mode").forEach(element => {
            element.classList.add("active-dark-mode");
        });
    }
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Skills card effects
const cards = document.querySelectorAll('.card');
cards.forEach((card)=>{
    card.addEventListener('mousemove', (e) => {
        // Get the card's size and position relative to the viewport
        const cardRect = card.getBoundingClientRect();
        
        // Calculate the position of the mouse relative to the card's top-left corner
        const x = e.clientX - cardRect.left; // X coordinate within the card
        const y = e.clientY - cardRect.top;  // Y coordinate within the card
        
        // Find the center of the card
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        // Calculate the rotation angles based on mouse position
        const rotateX = ((y - centerY) / centerY) * 25; // Tilt on the X-axis (up and down)
        const rotateY = ((centerX - x) / centerX) * 25; // Tilt on the Y-axis (left and right)
        
        // Apply the calculated rotation to the card
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    // Add an event listener for when the mouse leaves the card area
    card.addEventListener('mouseleave', () => {
        // Reset the card's rotation when the mouse leaves
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
})

