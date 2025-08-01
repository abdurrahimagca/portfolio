// DOM elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const parallaxElements = document.querySelectorAll('.parallax');
const floatingElements = document.querySelectorAll('.floating-element');

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
}

// Parallax effect
function handleParallax() {
    const scrollTop = window.pageYOffset;
    
    // Hero background parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        const speed = 0.5;
        heroBg.style.transform = `translateY(${scrollTop * speed}px)`;
    }
    
    // Floating elements parallax
    floatingElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px) rotate(${scrollTop * 0.02}deg)`;
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Animate elements on scroll - can retrigger when out of view and back in view
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .project-card, .stat-item, .skill-category');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 150;
        
        // Element is in view
        if (elementTop < window.innerHeight - elementVisible && elementBottom > elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('animated');
        } 
        // Element is out of view (reset for re-animation)
        else if (elementTop > window.innerHeight || elementBottom < 0) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.classList.remove('animated');
        }
    });
}

// Initialize scroll animations styles
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .project-card, .stat-item, .skill-category');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        });
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
        color: var(--bg-primary);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInFromRight 0.3s ease;
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInFromRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Typing animation for hero text - triggers when in view (fixed)
function initTypingAnimation() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        let isAnimating = false;
        let hasAnimated = false;
        let isInViewport = false;
        
        // Function to start typing animation
        function startTyping() {
            if (isAnimating) return;
            
            isAnimating = true;
            hasAnimated = true;
            heroName.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroName.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 60);
                } else {
                    // Typing is complete
                    isAnimating = false;
                }
            };
            
            typeWriter();
        }
        
        // Check if element is in view with debouncing
        function checkInView() {
            const rect = heroName.getBoundingClientRect();
            const currentlyInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
            
            // Only trigger when first entering viewport
            if (currentlyInView && !isInViewport && !hasAnimated) {
                isInViewport = true;
                startTyping();
            } 
            // Reset when completely out of view
            else if (!currentlyInView && isInViewport) {
                isInViewport = false;
                // Only reset if we're far from the element
                if (rect.bottom < 0 || rect.top > window.innerHeight) {
                    hasAnimated = false;
                    isAnimating = false;
                    heroName.textContent = originalText;
                }
            }
        }
        
        // Add scroll listener with throttling
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(checkInView, 100);
        });
        
        // Check on initial load
        setTimeout(checkInView, 500);
    }
}

// Particle effect for hero section
function initParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--primary-color);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        opacity: ${Math.random() * 0.5 + 0.2};
        animation: floatParticle ${duration}s linear infinite;
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentElement) {
            particle.remove();
            createParticle(container); // Create new particle
        }
    }, duration * 1000);
}

// Add particle animation keyframes
function addParticleStyles() {
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Skills progress animation - repeatable when in view
function animateSkillsProgress() {
    const skills = document.querySelectorAll('.skill');
    
    skills.forEach((skill, index) => {
        const rect = skill.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
            skill.style.animationDelay = `${index * 0.05}s`; // Faster animation delay
            skill.classList.add('animate');
        } 
        // Reset when out of view for re-animation
        else if (rect.top > window.innerHeight || rect.bottom < 0) {
            skill.classList.remove('animate');
            skill.style.animationDelay = '';
        }
    });
}

// Add CSS for skill animation
function addSkillAnimationStyles() {
    if (!document.querySelector('#skill-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'skill-animation-styles';
        style.textContent = `
            .skill.animate {
                animation: skillPop 0.5s ease forwards;
            }
            
            @keyframes skillPop {
                0% {
                    transform: scale(0.8);
                    opacity: 0.5;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initTypingAnimation();
    initParticleEffect();
    addParticleStyles();
    addSkillAnimationStyles();
    
    // Event listeners
    window.addEventListener('scroll', function() {
        handleNavbarScroll();
        handleParallax();
        animateOnScroll();
        animateSkillsProgress();
    });
    
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Close mobile menu on resize
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Initial calls
    handleNavbarScroll();
    animateOnScroll();
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading styles if not exists
    if (!document.querySelector('#loading-styles')) {
        const style = document.createElement('style');
        style.id = 'loading-styles';
        style.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--bg-primary);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            body:not(.loaded)::after {
                content: '';
                width: 50px;
                height: 50px;
                border: 3px solid var(--border-color);
                border-top: 3px solid var(--primary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10000;
            }
            
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}); 