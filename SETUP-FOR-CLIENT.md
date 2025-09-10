# 🌿 Bluefern Spa Website - Client Setup Guide

## 🎯 **Getting Started with Your Website**

Congratulations! Your website is ready for you to customize. This guide will help you get started safely.

---

## 📁 **Important Files You'll Work With**

### **Main Files:**
- `index.html` - Your homepage content
- `styles.css` - Colors and appearance  
- `client-config.js` - Easy settings file (RECOMMENDED)
- `CLIENT-EDITING-GUIDE.md` - Detailed instructions

### **Demo Files (for reference):**
- `specials-demo.html` - Design options for specials
- `single-image-specials-demo.html` - Single image specials examples

---

## 🚀 **STEP 1: Create Backups (IMPORTANT!)**

Before making any changes, create backup copies:

1. **Create a "BACKUPS" folder** in your main website folder
2. **Copy these files to your BACKUPS folder:**
   - `index.html` → `index-BACKUP.html`
   - `styles.css` → `styles-BACKUP.css`
   - `client-config.js` → `client-config-BACKUP.js`

**Why backup?** If something breaks, you can restore from your backup!

---

## 🎨 **STEP 2: Choose Your Editing Method**

### **Option A: Easy Mode (RECOMMENDED)**
Use the `client-config.js` file - it's designed for non-technical users.

**What you can change:**
- ✅ Contact information
- ✅ Business hours
- ✅ Hero slider images
- ✅ Specials and prices
- ✅ Social media links
- ✅ Colors (including seasonal themes)

### **Option B: Direct Editing**
Edit `index.html` and `styles.css` directly using the `CLIENT-EDITING-GUIDE.md`.

**Use this for:**
- ✅ More detailed customization
- ✅ Adding new sections
- ✅ Advanced color changes

---

## 📝 **STEP 3: Make Your First Change**

### **Test with Contact Information:**

1. **Open `client-config.js`** in Cursor
2. **Find this section:**
   ```javascript
   contact: {
       phone: "(407) 123-4567",
       email: "info@bluefernspa.com", 
       address: "123 Wellness Way, Orlando, FL 32801"
   },
   ```
3. **Replace with your real information:**
   ```javascript
   contact: {
       phone: "(407) 555-0123",
       email: "hello@yourspa.com",
       address: "456 Spa Street, Your City, FL 32801"  
   },
   ```
4. **Save the file** (Ctrl+S or Cmd+S)
5. **Open your website** in a browser to see the changes

---

## 🛡️ **STEP 4: Safety Rules**

### **✅ SAFE TO CHANGE:**
- Text inside quotes: `"Your text here"`
- Numbers: `5000`, `$299`
- Hex color codes: `#d5eae5`
- Image filenames: `"your-image.jpg"`

### **❌ NEVER CHANGE:**
- Code structure: `{`, `}`, `:`, `;`
- HTML tags: `<div>`, `</div>`
- CSS selectors: `.hero-slider`, `#main`
- JavaScript functions

### **🆘 If Something Breaks:**
1. **Don't panic!** 
2. **Press Ctrl+Z** (Windows) or **Cmd+Z** (Mac) to undo
3. **Or restore from your backup**
4. **Contact your developer**

---

## 🎨 **STEP 5: Common Changes**

### **Changing Hero Slider Images:**
```javascript
// In client-config.js, find heroImages section:
heroImages: [
    {
        src: "your-new-image.jpg",        // ← Change this
        alt: "Description of your image"  // ← And this
    }
]
```

### **Updating Specials:**
```javascript
// In client-config.js, find specials section:
specials: [
    {
        name: "Your Special Name",           // ← Change this
        description: "Your description",     // ← And this  
        price: "$199",                      // ← And this
        originalPrice: "$250",              // ← And this (or leave empty "")
        duration: "60 minutes"              // ← And this
    }
]
```

### **Changing Colors:**
```javascript
// In client-config.js, find colors section:
colors: {
    primary: "#d5eae5",      // ← Change these hex codes
    secondary: "#a8c9be",    // ← Use online color picker tools
}
```

---

## 📱 **STEP 6: Test Your Changes**

After making changes:

1. **Save your files** (Ctrl+S or Cmd+S)
2. **Refresh your browser** (F5 or Cmd+R)
3. **Check on mobile** - view on your phone
4. **Test all links** - make sure everything works
5. **Check all pages** - not just the homepage

---

## 🔧 **STEP 7: Image Management**

### **Adding New Images:**
1. **Save images** in your main website folder
2. **Use good filenames:** `spa-massage-2024.jpg` ✅
3. **Avoid bad filenames:** `IMG_1234.jpg` ❌
4. **Keep files small** - compress large images
5. **Use common formats:** `.jpg`, `.png`, `.webp`

### **Image Size Tips:**
- **Hero slider:** 1200x600 pixels (approximately)
- **Specials:** 800x600 pixels
- **Keep file sizes** under 500KB when possible

---

## 📞 **STEP 8: Get Help When Needed**

### **Before Calling for Help:**
1. **Try undoing** your last change (Ctrl+Z)
2. **Check your backup** - can you restore it?
3. **Take a screenshot** of any error messages
4. **Note what you changed** - this helps with troubleshooting

### **When to Call Your Developer:**
- ✅ Website looks broken
- ✅ Changes aren't showing up
- ✅ You want to add new features
- ✅ You're not sure about something

---

## 🌟 **Pro Tips for Success**

### **Best Practices:**
1. **Make one change at a time** - don't edit multiple things at once
2. **Test immediately** - check your changes right away
3. **Keep backups current** - update them regularly
4. **Use descriptive names** - for images and content
5. **Stay organized** - keep files in proper folders

### **Seasonal Updates:**
- **Spring:** Fresh greens and light colors
- **Summer:** Bright, vibrant colors (current theme)
- **Fall:** Warm oranges and browns
- **Winter:** Cool blues and grays

You can easily switch seasons by changing `currentSeason` in `client-config.js`!

---

## 📚 **Quick Reference**

| What You Want to Change | File to Edit | Section to Find |
|-------------------------|--------------|-----------------|
| Phone/Email/Address | `client-config.js` | `contact` |
| Business Hours | `client-config.js` | `hours` |
| Hero Images | `client-config.js` | `heroImages` |
| Specials & Prices | `client-config.js` | `specials` |
| Colors | `client-config.js` | `colors` |
| Social Media | `client-config.js` | `socialMedia` |

---

## 🎉 **You're Ready!**

Your website is now set up for easy editing. Remember:

- **Start small** - make simple changes first
- **Test everything** - check your changes immediately  
- **Keep backups** - always have a safety net
- **Ask for help** - your developer is there to support you

**Happy editing! 🌿**

---

*Need immediate help? Contact your developer with:*
- *Screenshot of the problem*
- *What you were trying to change*
- *What file you were editing* 