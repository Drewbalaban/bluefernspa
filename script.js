// ===== DOM Elements =====
const navbar = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollIndicator = document.querySelector('.scroll-indicator');

// Error handling wrapper
const withErrorHandling = (fn) => {
    return (...args) => {
        try {
            return fn(...args);
        } catch (error) {
            console.error('Error in navigation:', error);
        }
    };
};

// ===== Navigation Scroll Effect =====
let lastScrollTop = 0;
const scrollThreshold = 100;

window.addEventListener('scroll', withErrorHandling(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for navbar styling
    if (scrollTop > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 300) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}));

// ===== Mobile Menu Toggle with Accessibility =====
const toggleMobileMenu = withErrorHandling(() => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    const isMenuOpen = navToggle.classList.contains('active');
    
    spans.forEach((span, index) => {
        if (isMenuOpen) {
            span.style.transform = index === 0 
                ? 'rotate(45deg) translateY(6px)' 
                : index === 1 
                    ? 'opacity(0)' 
                    : 'rotate(-45deg) translateY(-6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
    
    // Focus management
    if (isMenuOpen) {
        navMenu.setAttribute('aria-expanded', 'true');
        navMenu.querySelector('a').focus();
    } else {
        navMenu.setAttribute('aria-expanded', 'false');
        navToggle.focus();
    }
});

navToggle.addEventListener('click', toggleMobileMenu);

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Smooth Scrolling with Accessibility =====
const smoothScroll = withErrorHandling((targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    const offsetTop = target.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
    
    // Focus management
    setTimeout(() => target.focus(), 500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            smoothScroll(targetId);
        }
    });
});

// ===== Scroll Indicator =====
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Remove Intersection Observer animations to prevent elements from moving during scroll



// ===== Service Cards Hover Effect =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===== Magnetic Button Effect =====
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// ===== Counter Animation =====
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// ===== Lazy Loading Images =====
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== Form Validation =====
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Remove error class after user starts typing
                input.addEventListener('input', function() {
                    this.classList.remove('error');
                }, { once: true });
            }
        });
        
        if (isValid) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! We will contact you soon.';
            this.appendChild(successMessage);
            
            // Reset form
            this.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        }
    });
});

// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// ===== Smooth Page Transitions =====
const pageTransition = () => {
    const links = document.querySelectorAll('a:not([href^="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname) {
                e.preventDefault();
                const href = this.href;
                
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
};

pageTransition();

// ===== Initialize AOS-like scroll animations =====
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    const animateOnScroll = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
};

// ===== Custom Cursor =====
const initCustomCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateCursor = () => {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        cursorX += distX * 0.1;
        cursorY += distY * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    
    animateCursor();
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorDot.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorDot.classList.remove('hover');
        });
    });
};

// Initialize custom cursor only on desktop
if (window.innerWidth > 1024) {
    initCustomCursor();
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    // Add loading class to body
    document.body.classList.add('loaded');
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            this.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Scroll effect for navigation
    let lastScrollTop = 0;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/show nav on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Magnetic button effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== Modern Services Banner Parallax =====
const initBannerParallax = () => {
    const bannerCards = document.querySelectorAll('.banner-card');
    
    if (bannerCards.length === 0) return;
    
    const handleScrollParallax = () => {
        if (window.innerWidth <= 768) return; // Disable on mobile for performance
        
        const scrollTop = window.pageYOffset;
        
        bannerCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top + scrollTop;
            const cardHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Check if card is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                const parallaxImage = card.querySelector('.parallax-image');
                const bannerOverlay = card.querySelector('.banner-overlay');
                
                if (parallaxImage) {
                    // Calculate parallax offset based on scroll position
                    const speed = 0.3 + (index * 0.1); // Different speeds for each card
                    const yPos = -(scrollTop - cardTop) * speed;
                    
                    // Apply parallax transform
                    parallaxImage.style.transform = `translate(-10%, -10%) translateY(${yPos}px)`;
                }
                
                // Enhance overlay effect based on scroll
                if (bannerOverlay) {
                    const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
                    const opacity = 0.7 + (scrollProgress * 0.1);
                    bannerOverlay.style.background = bannerOverlay.style.background.replace(/rgba\(44, 44, 44, [0-9.]+\)/, `rgba(44, 44, 44, ${opacity})`);
                }
            }
        });
    };
    
    // Throttle scroll event for better performance
    let ticking = false;
    const throttledScrollHandler = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScrollParallax();
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Initial call
    handleScrollParallax();
};

// ===== Enhanced Banner Card Interactions =====
const initBannerInteractions = () => {
    const bannerCards = document.querySelectorAll('.banner-card');
    
    bannerCards.forEach((card, index) => {
        const parallaxImage = card.querySelector('.parallax-image');
        const bannerContent = card.querySelector('.banner-content');
        const bannerOverlay = card.querySelector('.banner-overlay');
        
        // Mouse move effect for enhanced interactivity
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            // Apply subtle 3D transform
            card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-15px) rotateX(0deg) rotateY(0deg)';
        });
        
        // Staggered animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200); // Stagger animation
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        cardObserver.observe(card);
    });
};

// ===== Misty Overlay Effect =====
const initMistyEffect = () => {
    const bannerOverlays = document.querySelectorAll('.banner-overlay');
    
    bannerOverlays.forEach(overlay => {
        // Create dynamic mist effect
        const createMistParticle = () => {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.background = 'rgba(255, 255, 255, 0.1)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            overlay.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        };
        
        // Create particles on hover
        overlay.parentElement.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createMistParticle(), i * 100);
            }
        });
    });
};

// ===== Initialize all banner effects =====
document.addEventListener('DOMContentLoaded', () => {
    initBannerParallax();
    initBannerInteractions();
    initMistyEffect();
});

// Reinitialize on window resize
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        initBannerParallax();
    }, 250);
});

// ===== Summer Specials Animation =====
const initSpecialsAnimation = () => {
    const packageCards = document.querySelectorAll('.package-card');
    
    if (packageCards.length === 0) return;
    
    // Enhanced card animations
    packageCards.forEach((card, index) => {
        // Remove conflicting hover effects - let CSS handle the animations
        // The CSS gentleFloat animation will handle the movement
    });
    
    // Intersection observer for initial animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const specialsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate cards in sequence
                const cards = entry.target.querySelectorAll('.package-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        // Remove transform to let CSS animation take over
                        card.style.transform = '';
                        card.classList.add('animate-in');
                    }, index * 150);
                });
                specialsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial state and observe
    const specialsGrid = document.querySelector('.specials-grid');
    if (specialsGrid) {
        const cards = specialsGrid.querySelectorAll('.package-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            // Use CSS class instead of inline transform
            card.classList.add('initial-state');
        });
        specialsObserver.observe(specialsGrid);
    }
};

// Initialize specials animation
document.addEventListener('DOMContentLoaded', () => {
    initSpecialsAnimation();
});

// ===== Contact Form Functionality =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const location = formData.get('location');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Create mailto link with form data
            const locationText = location ? `Location: ${location === 'suwanee' ? 'Suwanee' : 'Johns Creek'}\n` : '';
            const serviceText = service ? `Service Interest: ${service}\n` : '';
            const phoneText = phone ? `Phone: ${phone}\n` : '';
            
            const emailBody = `Name: ${name}\n${phoneText}${locationText}${serviceText}\nMessage: ${message}`;
            
            const mailtoLink = `mailto:almaspa@ymail.com?subject=Spa Appointment Request - ${name}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client will open to send the message.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
    initializeContactForm();
});