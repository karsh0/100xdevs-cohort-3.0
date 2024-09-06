const fs = require('fs');

console.log('FileData: ', 'File is being read...'); // Log something first

function readingFiles(err, data) {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log('File content:', data);  // Log file content after reading
    }
}

fs.readFile('a.txt', 'utf-8', readingFiles);
