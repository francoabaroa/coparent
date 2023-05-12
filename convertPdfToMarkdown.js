console.log('start');

const fs = require('fs');
const path = require('path');
const pdf2md = require('@opendocsg/pdf2md')

async function convertPdfToMd(pdfPath, mdPath) {
  const markdown = await pdf2md(pdfPath);
  fs.writeFileSync(mdPath, markdown);
  console.log(`Converted ${pdfPath} to ${mdPath}`);
}

async function convertFolderPdfToMd(folderPath) {
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const extname = path.extname(file);
    if (extname === '.pdf') {
      const basename = path.basename(file, extname);
      const mdPath = path.join(folderPath, `${basename}.md`);
      await convertPdfToMd(filePath, mdPath);
    }
  }
  console.log('Conversion complete!');
}

/** Example usage:

convertFolderPdfToMd(<PATH-TO-PDF-DIRECTORY>);

then run convertPdfToMarkdown.js script

**/


console.log('end');