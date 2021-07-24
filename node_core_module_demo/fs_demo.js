const fs = require('fs');
const path = require('path');

// Create folder
// For more details of the function, please refer to https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback 
fs.mkdir(path.join(__dirname, '/dummy_folder'), {}, function(err) {
    if(err) throw err;
    console.log("Folder created");
});

// Same to use arrow to represent the function
// fs.mkdir(path.join(__dirname, '/dummy_folder'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created");
// });
