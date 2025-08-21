// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'home.html')) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function(e) {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Handle CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('Get Started')) {
                window.location.href = 'index.html';
            } else if (text.includes('Watch Demo')) {
                // Open demo modal or video
                alert('Demo video would play here');
            }
        });
    });
});