const path = require('path');

// Full name
console.log(__filename);

// Base name
console.log(path.basename(__filename));

// Dir name
console.log(path.dirname(__filename));

// Ext name
console.log(path.extname(__filename));

// Create a path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'dummy_dir', 'dummy_file.html'));