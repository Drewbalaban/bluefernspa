// Navigation Loader Script
// This script loads the shared navigation into all pages

// Embedded navigation HTML to avoid fetch issues
const navigationHTML = `<!-- Navigation Component -->
<nav class="nav">
    <div class="nav-container">
        <div class="nav-logo">
            <img src="darker-logo-1.png" alt="Bluefern Spa">
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a href="services.html" class="nav-link">Services</a>
                <div class="dropdown-content">
                    <div class="dropdown-grid">
                        <div class="dropdown-column">
                            <h3 class="dropdown-category">Massage Therapy</h3>
                            <div class="submenu">
                                <div class="submenu-item">
                                    <a href="#" class="submenu-trigger">Swedish Massage</a>
                                    <div class="submenu-dropdown">
                                        <a href="service_massage.html#swedish-classic">Classic Swedish</a>
                                        <a href="service_massage.html#swedish-aromatherapy">Swedish with Aromatherapy</a>
                                        <a href="service_massage.html#swedish-hot-stone">Swedish with Hot Stones</a>
                                    </div>
                                </div>
                                <div class="submenu-item">
                                    <a href="#" class="submenu-trigger">Deep Tissue</a>
                                    <div class="submenu-dropdown">
                                        <a href="service_massage.html#deep-tissue-standard">Standard Deep Tissue</a>
                                        <a href="service_massage.html#deep-tissue-sports">Sports Deep Tissue</a>
                                        <a href="service_massage.html#deep-tissue-therapeutic">Therapeutic Deep Tissue</a>
                                    </div>
                                </div>
                                <div class="submenu-item">
                                    <a href="#" class="submenu-trigger">Stretch Therapy</a>
                                    <div class="submenu-dropdown">
                                        <a href="service_massage.html#stretch-assisted">Assisted Stretching</a>
                                        <a href="service_massage.html#stretch-myofascial">Myofascial Release</a>
                                        <a href="service_massage.html#stretch-mobility">Mobility Enhancement</a>
                                    </div>
                                </div>
                                <div class="submenu-item">
                                    <a href="#" class="submenu-trigger">Specialty Massage</a>
                                    <div class="submenu-dropdown">
                                        <a href="service_massage.html#aromatherapy">Aromatherapy Massage</a>
                                        <a href="service_massage.html#lymphatic-drainage">Manual Lymphatic Drainage</a>
                                        <a href="service_massage.html#hot-stone">Hot Stone Massage</a>
                                        <a href="service_massage.html#therapeutic">Therapeutic Massage</a>
                                    </div>
                                </div>
                                <a href="service_massage.html" class="view-all-link">View All Massages</a>
                            </div>
                        </div>
                        <div class="dropdown-column">
                            <h3>Facial Treatments</h3>
                            <a href="services.html#signature-facial">Signature Facial</a>
                            <a href="services.html#anti-aging-facial">Anti-Aging</a>
                            <a href="services.html#microdermabrasion">Microdermabrasion</a>
                            <a href="services.html#facials">Advanced Facials</a>
                            <a href="services.html#facials">View All Facials</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Body & Wellness</h3>
                            <a href="services.html#body">Body Scrubs & Wraps</a>
                            <a href="services.html#body">Body Sculpting</a>
                            <a href="services.html#wellness">Salt Room Therapy</a>
                            <a href="services.html#wellness">Red Light Therapy</a>
                            <a href="services.html#wellness">Stretch Therapy</a>
                            <a href="services.html#body">View All Body Treatments</a>
                        </div>
                        <div class="dropdown-column">
                            <h3>Beauty & Packages</h3>
                            <a href="services.html#beauty">Waxing Services</a>
                            <a href="services.html#beauty">Brow & Lash</a>
                            <a href="services.html#packages">Spa Packages</a>
                            <a href="services.html#packages">Gift Certificates</a>
                            <a href="products.html">Société Products</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a href="index.html#specials" class="nav-link">Specials</a>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
            </li>
            <li class="nav-item">
                <a href="https://www.thegiftcardcafe.com/cart/selectpac.php" class="nav-link egift-link">Buy eGift</a>
            </li>
        </ul>
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
            
            // Remove the temporary placeholder class
            document.body.classList.remove('nav-loading');
            
            console.log('Navigation loaded successfully');
        } else {
            console.log('Navigation comment not found, trying fallback method');
            // Fallback: look for existing nav element or create one
            let navElement = document.querySelector('nav.nav');
            if (!navElement) {
                // If no nav element exists, create one at the beginning of body
                navElement = document.createElement('nav');
                navElement.className = 'nav';
                document.body.insertBefore(navElement, document.body.firstChild);
            }
            
            // Replace the content with the shared navigation
            navElement.outerHTML = navigationHTML;
            
            // Re-initialize navigation functionality after loading
            initializeNavigation();
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
            (currentPage === 'services.html' && linkHref === 'services.html')) {
            link.classList.add('active');
        }
    });
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}
