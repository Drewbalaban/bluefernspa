// ===== Services Page Functionality =====
const initServicesPage = () => {
    try {
        const banner = document.querySelector('.hero-banner');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const serviceCategories = document.querySelectorAll('.service-category');

        if (!banner || !categoryButtons.length || !serviceCategories.length) {
            console.error('Missing required elements for services page');
            return;
        }

        // Hero elements for clean animation
        const heroElements = {
            eyebrow: banner.querySelector('.hero-eyebrow'),
            title: banner.querySelector('.hero-title'),
            subtitle: banner.querySelector('.hero-subtitle'),
            quote: banner.querySelector('.hero-quote')
        };

        // Initialize banner
        banner.classList.add('massage-bg');

        // Clean, elegant animation with fade transitions
        const animateHero = (isInitial = false) => {
            const elements = Object.values(heroElements).filter(Boolean);
            
            // Reset all elements to invisible
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'none';
            });
            
            // Add a slight delay for initial load
            const initialDelay = isInitial ? 300 : 0;
            
            // Staggered fade in with smooth transitions
            setTimeout(() => {
                elements.forEach((element, index) => {
                    const delay = initialDelay + (index * 200);
                    
                    setTimeout(() => {
                        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, delay);
                });
            }, 100); // Small delay to ensure elements are reset first
        };

        // Content for different categories
        const categoryContent = {
            massage: {
                title: 'Massage Therapy',
                subtitle: 'Therapeutic healing through the power of touch',
                quote: 'Where tension melts away and wellness begins'
            },
            facials: {
                title: 'Facial Treatments',
                subtitle: 'Advanced skincare for radiant, healthy skin',
                quote: 'Reveal your most luminous complexion'
            },
            body: {
                title: 'Body Treatments',
                subtitle: 'Luxurious full-body rejuvenation experiences',
                quote: 'Transform your skin from head to toe'
            },
            wellness: {
                title: 'Wellness Therapies',
                subtitle: 'Holistic treatments for mind, body, and spirit',
                quote: 'Discover your path to complete wellness'
            },
            beauty: {
                title: 'Beauty Services',
                subtitle: 'Professional beauty treatments for your best self',
                quote: 'Enhance your natural radiance'
            },
            packages: {
                title: 'Spa Packages',
                subtitle: 'Curated experiences for the ultimate escape',
                quote: 'Your journey to complete relaxation'
            }
        };

        // Smooth category transition
        const switchCategory = (targetCategory, animate = true) => {
            try {
                // Update active states
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                const targetButton = document.querySelector(`[data-category="${targetCategory}"]`);
                if (targetButton) targetButton.classList.add('active');

                serviceCategories.forEach(category => category.classList.remove('active'));
                const targetCategoryElement = document.getElementById(targetCategory);
                if (targetCategoryElement) targetCategoryElement.classList.add('active');

                // Update banner background
                banner.className = 'hero-banner';
                banner.classList.add(`${targetCategory}-bg`);

                // Update content
                const content = categoryContent[targetCategory];
                if (content && animate) {
                    // Simple fade out all elements
                    Object.values(heroElements).forEach(element => {
                        if (element) {
                            element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                            element.style.opacity = '0';
                            element.style.transform = 'translateY(-20px)';
                        }
                    });

                    // After fade out, update content and fade in
                    setTimeout(() => {
                        // Update text content
                        if (heroElements.title) heroElements.title.textContent = content.title;
                        if (heroElements.subtitle) heroElements.subtitle.textContent = content.subtitle;
                        if (heroElements.quote) heroElements.quote.textContent = content.quote;
                        
                        // Animate each element back in with staggered timing
                        const elements = [
                            heroElements.eyebrow,
                            heroElements.title,
                            heroElements.subtitle,
                            heroElements.quote
                        ].filter(Boolean);
                        
                        elements.forEach((element, index) => {
                            // Reset position
                            element.style.transition = 'none';
                            element.style.opacity = '0';
                            element.style.transform = 'translateY(30px)';
                            
                            // Animate in with delay
                            setTimeout(() => {
                                element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                                element.style.opacity = '1';
                                element.style.transform = 'translateY(0)';
                            }, index * 200);
                        });
                    }, 300);
                } else if (content) {
                    // Direct update for initial load
                    if (heroElements.title) heroElements.title.textContent = content.title;
                    if (heroElements.subtitle) heroElements.subtitle.textContent = content.subtitle;
                    if (heroElements.quote) heroElements.quote.textContent = content.quote;
                }

                // Animate service items
                const serviceItems = targetCategoryElement?.querySelectorAll('.service-item') || [];
                serviceItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    item.style.transition = 'none';
                    
                    const itemDelay = animate ? 1200 + (index * 100) : 600 + (index * 80);
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, itemDelay);
                });

            } catch (error) {
                console.error('Error switching category:', error);
            }
        };

        // Event listeners
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const category = button.getAttribute('data-category');
                if (category) {
                    switchCategory(category, true);
                }
            });
        });

        // Initialize page
        const initialCategory = window.location.hash.substring(1) || 'massage';
        switchCategory(initialCategory, false);
        
        // Start initial animation
        setTimeout(() => {
            animateHero(true);
        }, 300);

        // Handle URL hash changes
        window.addEventListener('hashchange', () => {
            const newCategory = window.location.hash.substring(1);
            if (newCategory && categoryContent[newCategory]) {
                switchCategory(newCategory, true);
            }
        });

    } catch (error) {
        console.error('Error initializing services page:', error);
    }
};

// Initialize when ready
document.addEventListener('DOMContentLoaded', initServicesPage);

// Toggle Learn More functionality
function toggleLearnMore(button) {
    try {
        // Get the specific content element that follows this button
        const content = button.parentElement.querySelector('.learn-more-content');
        const buttonSpan = button.querySelector('span');
        
        if (!content || !buttonSpan) return; // Safety check
        
        const isActive = content.classList.contains('active');
        
        if (isActive) {
            // Close the content
            content.classList.remove('active');
            button.classList.remove('active');
            buttonSpan.textContent = 'Learn More';
        } else {
            // Open the content
            content.classList.add('active');
            button.classList.add('active');
            buttonSpan.textContent = 'Show Less';
        }
    } catch (error) {
        console.error('Error in toggleLearnMore:', error);
    }
}

// Price animation on scroll
const prices = document.querySelectorAll('.price');
const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-price');
            priceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

prices.forEach(price => priceObserver.observe(price));

// Add-on item stagger animation
const addonItems = document.querySelectorAll('.addon-item');
const addonObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            addonObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

addonItems.forEach(item => {
    item.classList.add('hidden');
    addonObserver.observe(item);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .animate-price {
        animation: priceGlow 0.6s ease;
    }
    
    @keyframes priceGlow {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
            color: var(--primary-color);
        }
    }
    
    .addon-item.hidden {
        opacity: 0;
        transform: translateY(20px);
    }
    
    .addon-item.visible {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style); 