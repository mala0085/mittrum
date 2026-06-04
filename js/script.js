// js/script.js
console.log("✅ MittRum script.js är laddad");


// HERO SLIDER

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    const intervalTime = 6000;

    function showNextSlide() {
        if (slides.length === 0) return;
        
        slides[current].classList.add('opacity-0');
        current = (current + 1) % slides.length;
        slides[current].classList.remove('opacity-0');
    }

    if (slides.length > 0) {
        setInterval(showNextSlide, intervalTime);
    }
});


// HAMBURGERMENY 

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        
        // Toggle meny
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Förhindrar att klicket bubblar upp
            navMenu.classList.toggle('active');
        });

        // Stäng meny när man klickar på en länk
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Stäng meny om man klickar utanför 
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Stäng meny vid Escape-tangent
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Kategori-knappar
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
        });
    });
});

// MODAL
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roomForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const titleInput = document.getElementById('roomTitle');
            const title = titleInput && titleInput.value.trim() !== '' 
                        ? titleInput.value.trim() 
                        : "Ditt nya rum";
            
            // Visa modal
            const modalTitle = document.getElementById('modalRoomTitle');
            if (modalTitle) modalTitle.textContent = title;
            
            const modal = document.getElementById('successModal');
            if (modal) modal.classList.remove('hidden');
        });
    }
});

// Stäng modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.add('hidden');
    
    // Töm formuläret
    const form = document.getElementById('roomForm');
    if (form) form.reset();

    //Till utforska när modal stängs
    window.location.href = "explore.html";
}