// Navigation Loader Script
// This script loads the shared navigation into all pages

// Embedded navigation HTML to avoid fetch issues
const navigationHTML = `<!-- Navigation -->
<nav class="nav">
    <div class="nav-container">
        <div class="nav-logo">
            <img src="darker-logo-1.png" alt="Bluefern Spa">
        </div>
        <div class="nav-menu-wrapper">
            <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#services" class="nav-link">Services</a>
                <div class="dropdown-content">
                    <div class="dropdown-grid">
                        <div class="dropdown-column">
                            <a href="service_massage.html">Massage</a>
                            <a href="service_skincare.html">Skin Care</a>
                            <a href="service_bodytreats.html">Body Treatments</a>
                        </div>
                        <div class="dropdown-column">
                            <a href="service_beauty.html#waxing">Waxing</a>
                            <a href="service_beauty.html#lashbrow">Tinting</a>
                            <a href="service_beauty.html#skintag">Blemish Removal</a>
                        </div>
                        <div class="dropdown-column">
                            <a href="service_wellnesstherapy.html#salt-room">Salt Room</a>
                            <a href="service_wellnesstherapy.html#redlight">Red Light</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a href="specials.html" class="nav-link">Specials</a>
            </li>
            <li class="nav-item">
                <a href="service_spapackages.html" class="nav-link">Spa Packages</a>
            </li>
            </ul>
        </div>
        
        <!-- Dedicated eGift Button Container -->
        <div class="nav-egift-container">
            <a href="https://bluefernspa.com/spa-gift-card/" class="egift-button">Buy eGift</a>
        </div>
        <div class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>`;

function loadNavigation() {
    try {
        // Find the navigation comment and replace it with the actual navigation
        const bodyHTML = document.body.innerHTML;
        const navComment = '<!-- Navigation will be loaded by navigation-loader.js -->';
        
        if (bodyHTML.includes(navComment)) {
            // Replace the comment with the actual navigation HTML
            document.body.innerHTML = bodyHTML.replace(navComment, navigationHTML);
            
            // Re-initialize navigation functionality after loading
            initializeNavigation();
            
            // Initialize page-specific functionality with a longer delay to ensure page JS has run
            setTimeout(() => {
                initializePageSpecific();
            }, 500);
            
            // Remove the temporary placeholder class
            document.body.classList.remove('nav-loading');
            
            console.log('Navigation loaded successfully');
        } else {
            console.log('Navigation comment not found - this page likely has its own navigation');
            // Don't interfere with pages that have their own navigation (like index.html)
            return;
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

function initializeNavigation() {
    // Mobile menu toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Dropdown functionality
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
        const dropdownContent = item.querySelector('.dropdown-content');
        const submenuTriggers = item.querySelectorAll('.submenu-trigger');
        
        // Main dropdown hover
        item.addEventListener('mouseenter', () => {
            dropdownContent.style.display = 'block';
        });
        
        item.addEventListener('mouseleave', () => {
            dropdownContent.style.display = 'none';
        });
        
        // Submenu functionality
        submenuTriggers.forEach(trigger => {
            const submenuDropdown = trigger.nextElementSibling;
            
            trigger.addEventListener('mouseenter', () => {
                submenuDropdown.style.display = 'block';
            });
            
            trigger.addEventListener('mouseleave', () => {
                submenuDropdown.style.display = 'none';
            });
        });
    });
    
    // Set active navigation link based on current page
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Check if this link matches the current page
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === 'index.html' && linkHref === '#home') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function initializePageSpecific() {
    // Check if we're on service_beauty.html and initialize its functionality
    if (window.location.pathname.includes('service_beauty.html')) {
        // Call the page-specific initialization function if it exists
        if (typeof initBeautyServicesPage === 'function') {
            initBeautyServicesPage();
        }
        if (typeof initHeroAnimations === 'function') {
            initHeroAnimations();
        }
        
        // Dispatch a custom event to trigger the page's hash handling
        const hashEvent = new CustomEvent('navigationLoaded', {
            detail: { hash: window.location.hash }
        });
        document.dispatchEvent(hashEvent);
        
        console.log('Dispatched navigationLoaded event with hash:', window.location.hash);
    }
    
    // Check if we're on service_skincare.html and initialize its functionality
    if (window.location.pathname.includes('service_skincare.html')) {
        // Call the page-specific initialization function if it exists
        if (typeof initSkinCarePage === 'function') {
            initSkinCarePage();
        }
        if (typeof initHeroAnimations === 'function') {
            initHeroAnimations();
        }
        
        // Dispatch a custom event to trigger the page's hash handling
        const hashEvent = new CustomEvent('navigationLoaded', {
            detail: { hash: window.location.hash }
        });
        document.dispatchEvent(hashEvent);
        
        console.log('Dispatched navigationLoaded event for skin care page with hash:', window.location.hash);
    }
    
    // Check if we're on service_bodytreats.html and initialize its functionality
    if (window.location.pathname.includes('service_bodytreats.html')) {
        // Call the page-specific initialization function if it exists
        if (typeof initBodyTreatmentsPage === 'function') {
            initBodyTreatmentsPage();
        }
        if (typeof initHeroAnimations === 'function') {
            initHeroAnimations();
        }
        
        // Dispatch a custom event to trigger the page's functionality
        const hashEvent = new CustomEvent('navigationLoaded', {
            detail: { hash: window.location.hash }
        });
        document.dispatchEvent(hashEvent);
        
        console.log('Dispatched navigationLoaded event for body treatments page with hash:', window.location.hash);
    }
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}
