// Script to update all HTML files to use shared navigation
// This is a Node.js script that can be run to update all files at once

const fs = require('fs');
const path = require('path');

// List of HTML files that need navigation updates
const htmlFiles = [
    'service_massage.html',
    'red-light-therapy.html', 
    'service_spapackages.html',
    'ServiceTiles.html',
    'service_beauty.html',
    'service_bodytreats.html',
    'service_skincare.html',
    'hero-template.html',
    'hero-variations.html',
    'facial-treatments-demo.html',
    'rf-firming-facial.html',
    'microneedling.html'
];

function updateNavigationInFile(filename) {
    try {
        const filePath = path.join(__dirname, filename);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find and replace navigation section
        const navRegex = /<!-- Navigation -->[\s\S]*?<\/nav>/;
        const replacement = '    <!-- Navigation will be loaded by navigation-loader.js -->';
        
        if (navRegex.test(content)) {
            content = content.replace(navRegex, replacement);
            
            // Add navigation loader script if not already present
            if (!content.includes('navigation-loader.js')) {
                const scriptRegex = /(<script src="script\.js"><\/script>)/;
                if (scriptRegex.test(content)) {
                    content = content.replace(scriptRegex, '    <script src="navigation-loader.js"></script>\n    $1');
                }
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated ${filename}`);
        } else {
            console.log(`⚠️  No navigation found in ${filename}`);
        }
    } catch (error) {
        console.error(`❌ Error updating ${filename}:`, error.message);
    }
}

// Update all files
console.log('🔄 Updating navigation in HTML files...\n');
htmlFiles.forEach(updateNavigationInFile);
console.log('\n✨ Navigation update complete!');
