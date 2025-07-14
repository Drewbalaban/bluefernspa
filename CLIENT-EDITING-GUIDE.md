# 🌿 Bluefern Spa Website - Client Editing Guide

## 📋 Quick Reference for Common Changes

### 🎠 **Hero Slider Images**
**Location:** `index.html` lines 110-130
```html
<!-- To change an image, replace the src="" with your new image filename -->
<img src="YOUR-NEW-IMAGE.jpg" alt="Description of image">
```

### 🏷️ **Specials Section**
**Location:** `index.html` lines 200-250 (after we implement your chosen design)
- **Prices:** Look for `$299` and change the number
- **Special Names:** Look for `<h3>Special Name</h3>` and change the text
- **Descriptions:** Look for `<p>Description text</p>` and change the text

### 📞 **Contact Information**
**Location:** `index.html` - Search for:
- **Phone:** `(407) 123-4567` 
- **Email:** `info@bluefernspa.com`
- **Address:** `123 Wellness Way, Orlando, FL`

### 🎨 **Colors** 
**Location:** `styles.css` lines 1-20
```css
:root {
    --primary-color: #d5eae5;    /* Main sage green */
    --secondary-color: #a8c9be;  /* Darker sage */
    --accent-color: #f2f7f5;     /* Light background */
}
```

---

## 🛡️ **SAFETY RULES - PLEASE READ!**

### ✅ **SAFE TO EDIT:**
- Text content (words, prices, descriptions)
- Image filenames (just the name, keep the quotes)
- Phone numbers, emails, addresses
- Color hex codes (the #d5eae5 part)

### ❌ **DO NOT TOUCH:**
- Anything with `<` and `>` brackets (HTML tags)
- Anything with `{` and `}` curly braces (CSS rules)
- JavaScript code in `script.js`
- File structure or folder organization

### 🆘 **If Something Breaks:**
1. **Undo:** Press `Ctrl+Z` (Windows) or `Cmd+Z` (Mac)
2. **Revert:** Right-click the file → "Discard Changes"
3. **Contact Support:** Call your developer immediately

---

## 📝 **Step-by-Step Editing Instructions**

### 1. **Changing Hero Slider Images**
```html
<!-- BEFORE -->
<img src="old-image.jpg" alt="Old Description">

<!-- AFTER -->
<img src="new-image.jpg" alt="New Description">
```
**Steps:**
1. Add your new image to the main folder
2. Find the `src="old-image.jpg"` part
3. Replace `old-image.jpg` with your new filename
4. Update the description in `alt=""`

### 2. **Updating Specials Prices**
```html
<!-- BEFORE -->
<div class="special-price">$299</div>

<!-- AFTER -->
<div class="special-price">$199</div>
```
**Steps:**
1. Search for the current price (like `$299`)
2. Change only the number, keep the `$` symbol
3. Save the file

### 3. **Changing Special Names & Descriptions**
```html
<!-- BEFORE -->
<h3>Couples Massage</h3>
<p>Relax together with our signature couples treatment</p>

<!-- AFTER -->
<h3>Hot Stone Massage</h3>
<p>Therapeutic massage with heated volcanic stones</p>
```

### 4. **Updating Contact Information**
**Search for these exact phrases and replace:**
- `(407) 123-4567` → Your real phone number
- `info@bluefernspa.com` → Your real email
- `123 Wellness Way, Orlando, FL` → Your real address

---

## 🎨 **Color Customization**

### **Seasonal Color Changes:**
**Spring/Summer:** Light, fresh colors
```css
--primary-color: #d5eae5;    /* Light sage */
--secondary-color: #a8c9be;  /* Medium sage */
```

**Fall/Winter:** Warmer, deeper colors
```css
--primary-color: #c9d4d1;    /* Warmer sage */
--secondary-color: #9bb0a5;  /* Deeper sage */
```

### **How to Change Colors:**
1. Open `styles.css`
2. Find the `:root {` section at the top
3. Change the hex codes (the #d5eae5 part)
4. Save and refresh your browser

---

## 📁 **File Organization**

### **Main Files You'll Edit:**
- `index.html` - Homepage content
- `styles.css` - Colors and appearance
- `contact.html` - Contact page content
- `services.html` - Services page content

### **Image Files:**
- Keep all images in the main folder
- Use `.jpg` or `.png` formats
- Keep filenames simple (no spaces or special characters)
- Good: `massage-therapy.jpg`
- Bad: `My Massage Photo (2023).jpg`

---

## 🔧 **Common Tasks**

### **Adding a New Special:**
1. Copy an existing special block
2. Paste it below the others
3. Change the image, name, description, and price
4. Save the file

### **Removing a Special:**
1. Find the special block you want to remove
2. Select from `<div class="special-card">` to `</div>`
3. Delete the entire block
4. Save the file

### **Changing Business Hours:**
1. Search for current hours in `index.html`
2. Replace with new hours
3. Make sure to update all pages that show hours

---

## 📞 **Emergency Contacts**

### **If Website Breaks:**
1. **Don't panic!** - Most issues are easily fixable
2. **Stop editing** - Don't make more changes
3. **Contact your developer** - They can fix it quickly
4. **Take a screenshot** - Shows what went wrong

### **Before Making Big Changes:**
1. **Backup first** - Save a copy of files you're changing
2. **Test on one page** - Make sure changes work
3. **Check on mobile** - View on your phone
4. **Ask for help** - When in doubt, ask your developer

---

## 🚀 **Pro Tips**

### **Making Changes Safely:**
- **Change one thing at a time** - Don't edit multiple files at once
- **Save frequently** - Press `Ctrl+S` often
- **Preview changes** - Refresh browser to see results
- **Use Find & Replace** - For changing text across multiple places

### **Best Practices:**
- **Keep backups** - Save original files before editing
- **Use descriptive filenames** - `summer-special-2024.jpg` not `image1.jpg`
- **Stay organized** - Keep images in one folder
- **Test everything** - Click all links and buttons after changes

---

## 📚 **Quick Reference Cheat Sheet**

| Task | File | What to Look For |
|------|------|------------------|
| Change hero image | `index.html` | `<img src="filename.jpg"` |
| Update price | `index.html` | `<div class="special-price">$299</div>` |
| Change phone | `index.html` | `(407) 123-4567` |
| Update email | `index.html` | `info@bluefernspa.com` |
| Change colors | `styles.css` | `--primary-color: #d5eae5;` |
| Add new special | `index.html` | Copy existing special block |

---

**Remember: When in doubt, ask for help! It's better to ask than to break something. Your developer is there to support you! 🌿** 