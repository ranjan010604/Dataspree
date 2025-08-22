// Contact Form Validation and Formspree Integration
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('formConfirmation');
    const startChatBtn = document.getElementById('startChatBtn');
    const chatButton = document.getElementById('chatButton');
    
    // Initialize Tawk.to if available
    function initTawkTo() {
        if (typeof Tawk_API !== 'undefined') {
            // Tawk.to is loaded
            console.log('Tawk.to chat loaded successfully');
        }
    }
    
    // Add event listeners for chat buttons
    if (startChatBtn) {
        startChatBtn.addEventListener('click', openTawkToChat);
    }
    
    if (chatButton) {
        chatButton.addEventListener('click', openTawkToChat);
    }
    
    // Check if Tawk.to is loaded
    if (typeof Tawk_API !== 'undefined') {
        initTawkTo();
    } else {
        // If not loaded yet, wait for it
        setTimeout(initTawkTo, 2000);
    }
    
    if (contactForm) {
       
        const formspreeUrl = 'https://formspree.io/f/xzzvllvb';
        contactForm.action = formspreeUrl;
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            try {
                // Submit to Formspree
                const formData = new FormData(contactForm);
                
                const response = await fetch(formspreeUrl, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                   
                    confirmationMessage.style.display = 'block';
                    contactForm.reset();
                    
                   
                    confirmationMessage.scrollIntoView({ behavior: 'smooth' });
                    
                    
                    setTimeout(() => {
                        confirmationMessage.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                alert('Sorry, there was an error sending your message. Please try again later.');
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
    
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Initialize neural network background if function exists
    if (typeof initNeuralNetwork === 'function') {
        initNeuralNetwork();
    }
});