document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Scroll event listener to toggle active class on scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        // Determine the current section based on scroll position
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        for (let i = 0; i < navLinks.length; i++) {
            const currentLink = navLinks[i];
            const section = document.querySelector(currentLink.hash);
            
            if (
                section.offsetTop <= scrollPosition + 100 &&
                section.offsetTop + section.offsetHeight > scrollPosition + 100
            ) {
                currentSection = currentLink.hash;
            }
        }
        
        // Add or remove active class
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.hash === currentSection) {
                link.classList.add('active');
            }
        });
    });
});
