const fs = require('fs');
const puppeteer = require('puppeteer');
const markdown = require('markdown-it')({
	html: true // Enable HTML tags in source
});

/**
 * Asynchronously generates a PDF from a Markdown file.
 * - Reads the Markdown file and converts it to HTML.
 * - Reads the CSS and font files.
 * - Embeds the CSS and font into the HTML.
 * - Saves the generated HTML to a file.
 * - Uses Puppeteer to generate a PDF from the HTML.
 */
(async () => {
	const browser = await puppeteer.launch(); // Launch a new browser instance
	const page = await browser.newPage(); // Open a new page

	// Read Markdown file with UTF-8 encoding
	const md = fs.readFileSync('resume.md', 'utf8');
	const content = markdown.render(md); // Convert Markdown to HTML

	// Read CSS file
	const css = fs.readFileSync('style.css', 'utf8');

	// Read font file and convert to base64
	const fontNormal = fs.readFileSync('node_modules/@fontsource/ia-writer-quattro/files/ia-writer-quattro-latin-400-normal.woff2').toString('base64');
	const fontItalic = fs.readFileSync('node_modules/@fontsource/ia-writer-quattro/files/ia-writer-quattro-latin-400-italic.woff2').toString('base64');
	const fontBold = fs.readFileSync('node_modules/@fontsource/ia-writer-quattro/files/ia-writer-quattro-latin-700-normal.woff2').toString('base64');

	// Set HTML content with UTF-8 charset
	const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<title>Justin Peacock – Resume</title>
        <meta charset="UTF-8">
        <style>
            @font-face {
                font-family: 'iA Writer Quattro';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url(data:font/woff2;base64,${fontNormal}) format('woff2');
            }

            @font-face {
				font-family: 'iA Writer Quattro';
				font-style: italic;
				font-display: swap;
				font-weight: 400;
				src: url(data:font/woff2;base64,${fontItalic}) format('woff2');
            }

            @font-face {
				font-family: 'iA Writer Quattro';
				font-style: normal;
				font-display: swap;
				font-weight: 700;
				src: url(data:font/woff2;base64,${fontBold}) format('woff2');
            }
            ${css}
        </style>
    </head>
    <body class="markdown-body">${content}</body>
    </html>`;

	// Save HTML to a file
	fs.writeFileSync('index.html', html);
	console.log('HTML file generated successfully!');

	await page.setContent(html, {waitUntil: 'load'}); // Set the page content to the generated HTML
	await page.pdf({path: 'resume.pdf', format: 'A4', printBackground: true}); // Generate a PDF from the HTML

	await browser.close(); // Close the browser
	console.log('PDF generated successfully!');
})();
