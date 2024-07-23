# Resume Builder

This project provides a simple way to generate a resume in PDF format from a Markdown file. The Markdown file can be easily updated with your resume content, and the script will convert it to a PDF with consistent styling.

## Project Structure

- `resume.md`: The Markdown file containing the resume content.
- `style.css`: The CSS file for styling the HTML content.
- `generate-pdf.js`: The Node.js script that converts the Markdown file to HTML and then to a PDF.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/justin-peacock/resume-builder.git
    cd resume-builder
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Ensure the `resume.md` and `style.css` files are updated with your content and styles.

2. Run the script to generate the PDF:
    ```sh
    node generate-pdf.js
    ```

3. The generated `resume.pdf` will be saved in the project directory.

## Files

### `resume.md`

This file contains the resume content in Markdown format. Use HTML tags like `<div class="page-break"></div>` to add page breaks.

### `style.css`

This file contains the CSS styles for the HTML content. It includes styles for the Markdown body and ensures consistent margins on all pages.

### `generate-pdf.js`

This Node.js script reads the Markdown file, converts it to HTML using `markdown-it`, applies the CSS styles, and generates a PDF using Puppeteer.

## Example

Here is an example of how to structure your `resume.md`:

```markdown
# Your Name

**Email:** your.email@example.com | **Phone:** 123-456-7890<br>
**Website:** [yourwebsite.com](https://yourwebsite.com) | **LinkedIn:** [linkedin.com/in/yourprofile](https://www.linkedin.com/in/yourprofile)<br>
**Address:** 123 Main Street, City, State ZIP

## Professional Summary

Your professional summary goes here.

## Core Competencies

`Skill1` `Skill2` `Skill3`

## Professional Experience

**Company Name, Location** | Job Title
*Start Date–End Date*

- Your achievements and responsibilities.

<div class="page-break"></div>

**Another Company, Location** | Job Title
*Start Date–End Date*

- Your achievements and responsibilities.

## Notable Projects

- [Project Name](https://projecturl.com)
- [Another Project](https://anotherprojecturl.com)
```

## Customization

You can customize the styling of the PDF by updating the `style.css` file. You can modify fonts, colors, margins, and other styles to match your preferences.

Use the class `.hide-for-web` to hide elements in the PDF that should not be displayed in the HTML version (e.g., links). Use the class `.hide-for-pdf` to hide elements in the HTML version that should not be displayed in the PDF (e.g., page breaks).
