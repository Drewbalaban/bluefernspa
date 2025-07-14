// ========== BLUEFERN SPA - CLIENT CONFIGURATION ==========
// This file contains settings your client can easily modify
// IMPORTANT: Only change the VALUES, not the structure!

const CLIENT_CONFIG = {
    // ========== BUSINESS INFORMATION ==========
    businessName: "Bluefern Spa",
    tagline: "Rejuvenate Your Mind, Body & Soul",
    
    // ========== CONTACT INFORMATION ==========
    // Update these with your real information
    contact: {
        phone: "(407) 123-4567",
        email: "info@bluefernspa.com",
        address: "123 Wellness Way, Orlando, FL 32801"
    },
    
    // ========== BUSINESS HOURS ==========
    hours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM", 
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 7:00 PM",
        friday: "9:00 AM - 6:00 PM",
        saturday: "8:00 AM - 5:00 PM",
        sunday: "10:00 AM - 4:00 PM"
    },
    
    // ========== HERO SLIDER SETTINGS ==========
    // Change these to control your main slider
    heroSlider: {
        autoPlay: true,              // true = slides change automatically
        slideInterval: 5000,         // Time between slides (in milliseconds)
        showDots: true,              // true = show navigation dots
        showArrows: true             // true = show navigation arrows
    },
    
    // ========== HERO SLIDER IMAGES ==========
    // To change images: Replace the filename, keep the quotes
    // Make sure your new images are in the main folder
    heroImages: [
        {
            src: "openart-woman-getting-a-massage-on-a-massage-table-spa-setting-relaxing-warm_eFHksr9-_upscaled.png",
            alt: "Therapeutic Massage"
        },
        {
            src: "man-woman-spa-980x370.jpg", 
            alt: "Couples Spa Experience"
        },
        {
            src: "Salt-Room-The-Salt-Room-Orlando.jpg",
            alt: "Salt Room Therapy"
        },
        {
            src: "beach.jpg",
            alt: "Relaxing Beach Retreat"
        }
    ],
    
    // ========== SPECIALS SECTION ==========
    // Update your current specials here
    specials: [
        {
            name: "Couples Massage Experience",
            description: "Side-by-side relaxation with aromatherapy",
            price: "$299",
            originalPrice: "$350",  // Leave empty "" if no original price
            duration: "90 minutes"
        },
        {
            name: "Salt Room + Facial Combo", 
            description: "Detoxify and rejuvenate in one session",
            price: "$179",
            originalPrice: "$220",
            duration: "75 minutes"
        },
        {
            name: "Microneedling Series",
            description: "3-session package for radiant skin", 
            price: "$450",
            originalPrice: "$550",
            duration: "3 sessions"
        }
    ],
    
    // ========== SOCIAL MEDIA LINKS ==========
    // Add your social media URLs here
    socialMedia: {
        facebook: "https://facebook.com/bluefernspa",
        instagram: "https://instagram.com/bluefernspa", 
        twitter: "https://twitter.com/bluefernspa",
        youtube: ""  // Leave empty if you don't have this platform
    },
    
    // ========== WEBSITE COLORS ==========
    // Change these hex codes to customize your colors
    // You can use a color picker tool online to find hex codes
    colors: {
        primary: "#d5eae5",      // Main sage green
        secondary: "#a8c9be",    // Darker sage  
        accent: "#f2f7f5",       // Light background
        lightSage: "#e8f2ee",    // Very light sage
        darkSage: "#9bb5aa",     // Medium sage
        darkerSage: "#7a9b8c"    // Darkest sage
    },
    
    // ========== SEASONAL SETTINGS ==========
    // Easily switch between seasonal themes
    currentSeason: "summer", // Options: "spring", "summer", "fall", "winter"
    
    seasonalColors: {
        spring: {
            primary: "#e8f5e8",
            secondary: "#b8d4b8"
        },
        summer: {
            primary: "#d5eae5", 
            secondary: "#a8c9be"
        },
        fall: {
            primary: "#e8ddd4",
            secondary: "#c9b8a8"  
        },
        winter: {
            primary: "#e0e8e8",
            secondary: "#b0c0c0"
        }
    }
};

// ========== INSTRUCTIONS FOR CLIENT ==========
/*
HOW TO USE THIS FILE:

1. CHANGING CONTACT INFO:
   - Update the phone, email, and address in the "contact" section
   - The changes will appear throughout your website

2. CHANGING BUSINESS HOURS:
   - Update the hours in the "hours" section
   - Use the same format: "9:00 AM - 7:00 PM"

3. CHANGING HERO SLIDER IMAGES:
   - Replace the filename in "src" with your new image
   - Update the "alt" text to describe your image
   - Make sure your new image is in the main website folder

4. UPDATING SPECIALS:
   - Change the name, description, and price
   - Set originalPrice to "" if there's no discount
   - Duration can be time or number of sessions

5. CHANGING COLORS:
   - Use hex codes (the #d5eae5 format)
   - You can find hex codes using online color pickers
   - Or change "currentSeason" to use preset seasonal colors

6. SOCIAL MEDIA:
   - Add your real social media URLs
   - Leave empty "" if you don't use that platform

SAFETY TIPS:
- Only change the VALUES (text inside quotes)
- Don't change the STRUCTURE (the words before the colons)
- Save the file after making changes
- Test your website after changes

NEED HELP?
- Contact your developer if something breaks
- Keep a backup copy of this file before making changes
- Make one change at a time and test it
*/

// Don't change anything below this line unless you know what you're doing!
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CLIENT_CONFIG;
} 