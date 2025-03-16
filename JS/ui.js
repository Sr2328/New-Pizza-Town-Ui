 // THIS IS INDEX JS CODE

 // Get current day and highlight it
 document.addEventListener('DOMContentLoaded', function() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const currentTime = new Date().getHours();

  const dayElements = document.querySelectorAll('.day-time');
  dayElements[today].classList.add('current');

  // Check if currently open
  const timeElement = dayElements[today].querySelector('.time');
  const [openHour, closeHour] = timeElement.textContent.split(' - ')
      .map(time => parseInt(time.split(':')[0]));

  if (currentTime >= openHour && currentTime < closeHour) {
      dayElements[today].classList.add('current');
  }
});
// THIS IS CONTACT JS CODE
 // Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
 // Get the contact form
 const contactForm = document.getElementById('contactForm');
 
 // Exit if form doesn't exist
 if (!contactForm) {
     console.error('Contact form not found');
     return;
 }

 // Initialize success and error messages
 initializeMessages(contactForm);

 // Add form submit handler
 contactForm.addEventListener('submit', handleFormSubmit);

 // Add click effects to contact buttons
 initializeContactButtons();
});

function initializeMessages(contactForm) {
 // Create success message
 const successMessage = document.createElement('div');
 successMessage.className = 'success-message';
 successMessage.style.display = 'none';
 successMessage.innerHTML = `
     <i class="fas fa-check-circle"></i>
     <p>Message sent successfully!</p>
 `;

 // Create error message
 const errorMessage = document.createElement('div');
 errorMessage.className = 'error-message';
 errorMessage.style.display = 'none';
 errorMessage.innerHTML = `
     <i class="fas fa-exclamation-circle"></i>
     <p>Failed to send message. Please try again.</p>
 `;

 // Add messages to DOM
 contactForm.parentElement.appendChild(successMessage);
 contactForm.parentElement.appendChild(errorMessage);
}

async function handleFormSubmit(e) {
 e.preventDefault();

 const form = e.target;
 const submitBtn = form.querySelector('button[type="submit"]');
 const successMessage = document.querySelector('.success-message');
 const errorMessage = document.querySelector('.error-message');

 if (!submitBtn) return;

 // Update button state
 submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
 submitBtn.disabled = true;

 try {
     const WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1346746342424449055/L9biBgv3aEBzu37vmjKN_TPUlf2I8NRrAGRdckp3ueOhxLAer9Pk47Qjy-aoXNAPeFlA';
     
     const formData = {
         name: form.querySelector('[name="name"]').value.trim(),
         email: form.querySelector('[name="email"]').value.trim(),
         phone: form.querySelector('[name="phone"]').value.trim(),
         message: form.querySelector('[name="message"]').value.trim(),
         timestamp: new Date().toLocaleString()
     };

     // Validate form data
     if (!formData.name || !formData.email || !formData.message) {
         throw new Error('Please fill in all required fields');
     }

     const response = await fetch(WEBHOOK_URL, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             embeds: [{
                 title: '🍕 New Contact Form Submission',
                 color: 0xff4757,
                 fields: [
                     {
                         name: '👤 Name',
                         value: formData.name,
                         inline: true
                     },
                     {
                         name: '📧 Email',
                         value: formData.email,
                         inline: true
                     },
                     {
                         name: '📞 Phone',
                         value: formData.phone || 'Not provided',
                         inline: true
                     },
                     {
                         name: '💬 Message',
                         value: formData.message
                     }
                 ],
                 footer: {
                     text: 'Pizza Town Contact Form'
                 },
                 timestamp: new Date().toISOString()
             }]
         })
     });

     if (!response.ok) {
         throw new Error('Network response was not ok');
     }

     // Show success message
     form.reset();
     showMessage(successMessage);

 } catch (error) {
     console.error('Error:', error);
     showMessage(errorMessage);
 } finally {
     // Reset button state
     submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
     submitBtn.disabled = false;
 }
}

function showMessage(messageElement) {
 messageElement.style.display = 'flex';
 messageElement.style.animation = 'slideIn 0.5s ease-out';
 
 setTimeout(() => {
     messageElement.style.animation = 'slideOut 0.5s ease-out';
     setTimeout(() => {
         messageElement.style.display = 'none';
     }, 500);
 }, 3000);
}

function initializeContactButtons() {
 const contactButtons = document.querySelectorAll('.contact-btn');
 contactButtons.forEach(button => {
     button.addEventListener('click', function() {
         this.classList.add('clicked');
         setTimeout(() => {
             this.classList.remove('clicked');
         }, 600);
     });
 });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded'); // Debug log
    initializeNavigation();
});

function initializeNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    let isMenuOpen = false;

    // Debug logs
    console.log('mobileMenuBtn:', mobileMenuBtn);
    console.log('navLinks:', navLinks);
    console.log('navbar:', navbar);

    if (!mobileMenuBtn || !navLinks || !navbar) {
        console.error('Required navigation elements not found');
        return;
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        navLinks.classList.toggle('active');
        
        // Toggle menu icon
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');

        // Handle overlay
        const existingOverlay = document.querySelector('.mobile-menu-overlay');
        if (isMenuOpen) {
            if (!existingOverlay) {
                const overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (existingOverlay) {
                existingOverlay.remove();
                document.body.style.overflow = '';
            }
        }
    }

    // Event Listeners
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
        console.log('Menu toggled'); // Debug log
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            toggleMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu();
        }
    });

    // Add scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
}
// THIS IS CATEGORY FEATURE JS//
document.addEventListener('DOMContentLoaded', function() {
    const categoriesGrid = document.querySelector('.categories-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Set initial scroll position
    let scrollPosition = 0;
    // Amount to scroll each time
    const scrollAmount = 320;

    // Initially hide prev button
    prevBtn.style.opacity = '0';

    // Previous button click handler
    prevBtn.addEventListener('click', () => {
        scrollPosition -= scrollAmount;
        if (scrollPosition < 0) scrollPosition = 0;
        
        categoriesGrid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        updateButtonVisibility();
    });

    // Next button click handler
    nextBtn.addEventListener('click', () => {
        scrollPosition += scrollAmount;
        const maxScroll = categoriesGrid.scrollWidth - categoriesGrid.clientWidth;
        if (scrollPosition > maxScroll) scrollPosition = maxScroll;
        
        categoriesGrid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        updateButtonVisibility();
    });

    // Update button visibility based on scroll position
    function updateButtonVisibility() {
        prevBtn.style.opacity = scrollPosition > 0 ? '1' : '0';
        nextBtn.style.opacity = 
            scrollPosition < (categoriesGrid.scrollWidth - categoriesGrid.clientWidth) 
            ? '1' 
            : '0';
    }

    // Add touch scroll functionality
    let isScrolling = false;
    let startX;
    let scrollLeft;

    categoriesGrid.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - categoriesGrid.offsetLeft;
        scrollLeft = categoriesGrid.scrollLeft;
    });

    categoriesGrid.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - categoriesGrid.offsetLeft;
        const walk = (x - startX) * 2;
        categoriesGrid.scrollLeft = scrollLeft - walk;
        updateButtonVisibility();
    });

    categoriesGrid.addEventListener('touchend', () => {
        isScrolling = false;
    });

    // Update button visibility on scroll
    categoriesGrid.addEventListener('scroll', () => {
        scrollPosition = categoriesGrid.scrollLeft;
        updateButtonVisibility();
    });
});
